'use client'
import { useEffect, useState } from 'react'
import { Navbar } from './components/Navbar'
import styles from './Homepage.module.css'
import Link from 'next/link'
import MenuItem from '@mui/material/MenuItem'
import WatchLaterRoundedIcon from '@mui/icons-material/WatchLaterRounded'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import FmdGoodRoundedIcon from '@mui/icons-material/FmdGoodRounded'
import { InputAdornment, Select, TextField } from '@mui/material'
import Article from './components/Article'
import Map from './components/Map'
import Footer from './components/Footer'
import ApiGetCountries from './api/homepage/countries'
import ApiGetArticles from './api/homepage/articles'

interface country {
  id: number
  name: string
}

interface article {
  id: number
  img: string
  title: string
  link: string
  text: string
}

const Page = () => {
  const [articles, setArticles] = useState<article[] | null>(null)

  useEffect(() => {
    // Utilisez useEffect pour appeler la fonction handleApiRequest lors du chargement de la page
    async function fetchData() {
      try {
        const responseData = await ApiGetArticles()
        if (responseData !== undefined) {
          setArticles(responseData) // Mettez à jour l'état avec les données récupérées
        }
      } catch (error) {
        console.error(
          "Une erreur s'est produite lors de la récupération des données :",
          error
        )
      }
    }

    fetchData()
  }, [])

  const [bgColor, setBgColor] = useState('bg-transparent')
  const [optionSelected, setOptionSelected] = useState('Livrer maintenant')
  const [address, setAddress] = useState('')

  useEffect(() => {
    const handleColor = () => {
      let scrollY = window.scrollY

      if (scrollY != 0) {
        setBgColor('bg-white transition duration-300')
      } else {
        setBgColor('bg-transparent transition duration-300')
      }
    }

    window.addEventListener('scroll', handleColor)

    return () => {
      window.removeEventListener('scroll', handleColor)
    }
  }, [])

  const selectOption = (event: any) => {
    setOptionSelected(event.target.value)
  }
  const changeAddress = (event: any) => {
    setAddress(event.target.value)
  }

  const [countries, setCountries] = useState<country[] | null>(null)
  useEffect(() => {
    // Utilisez useEffect pour appeler la fonction handleApiRequest lors du chargement de la page
    async function fetchData() {
      try {
        const responseData = await ApiGetCountries()
        if (responseData !== undefined) {
          setCountries(responseData) // Mettez à jour l'état avec les données récupérées
        }
      } catch (error) {
        console.error(
          "Une erreur s'est produite lors de la récupération des données :",
          error
        )
      }
    }

    fetchData()
  }, [])

  return (
    <>
      <Navbar bgColor={bgColor} />
      <div className={`${styles.homepage} h-screen flex items-center`}>
        <div className="px-10 flex flex-col gap-10">
          <span className="text-[54px] leading-[60px]">
            Vos plats préférés, directement à<br /> votre porte
          </span>
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-2 h-14">
              <TextField
                className=" bg-white"
                value={address}
                placeholder="Saisissez l'adresse de livraison."
                onChange={changeAddress}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <FmdGoodRoundedIcon style={{ color: 'black' }} />
                    </InputAdornment>
                  ),
                  style: {
                    padding: '8px 16px',
                    width: '540px',
                    height: '56px',
                  },
                }}
                variant="standard"
              />

              <Select
                id="demo-simple-select-standard"
                className="bg-white flex items-center px-4"
                value={optionSelected}
                onChange={selectOption}
              >
                <MenuItem value={'Livrer maintenant'} className="flex gap-4">
                  <WatchLaterRoundedIcon /> Livrer maintenant
                </MenuItem>
                <MenuItem
                  value={'Planifier pour plus tard'}
                  className="flex gap-3"
                >
                  <CalendarMonthIcon /> Planifier pour plus tard
                </MenuItem>
              </Select>
              <Link
                href={'/restaurant'}
                className="bg-black text-white rounded-lg h-full py-3 px-4 hover:bg-[#333333] flex items-center"
              >
                <button>Trouver un restaurant</button>
              </Link>
            </div>
            <span className="text-base">
              <Link href={'/sign'} className="underline">
                Connexion
              </Link>{' '}
              pour afficher vos adresses récentes
            </span>
          </div>
        </div>
      </div>
      <div className="flex px-10 gap-20 justify-center pt-20">
        {articles?.map((article) => {
          return (
            <Article
              key={article.id}
              img={article.img}
              title={article.title}
              link={article.link}
              text={article.text}
            />
          )
        })}
      </div>
      <div className="flex flex-col px-10 pt-24">
        <span className="text-4xl font-bold">Villes à proximité</span>
        <div className="pt-8 pb-20">
          <Map />
        </div>
        <div className="flex justify-between">
          <span className="text-4xl font-bold">
            Uber Eats à travers le monde
          </span>
          <Link href={'./allCountry'} className="underline">
            Tous les pays
          </Link>
        </div>
        <div className="grid grid-rows-[repeat(8,1fr)] grid-flow-col gap-5 pt-8">
          {countries?.map((country) => {
            return (
              <span className="text-base" key={country.id}>
                {country.name}
              </span>
            )
          })}
        </div>
        <span className="flex justify-center p-3">
          Découvrez comment Uber Eats référence et classe les offres des
          partenaires.
          <Link href={'/more'} className="underline">
            En savoir plus
          </Link>
        </span>
      </div>
      <Footer />
    </>
  )
}

export default Page
