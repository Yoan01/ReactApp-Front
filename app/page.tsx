"use client"
import { useEffect, useState } from "react"
import { Navbar } from "./components/Navbar"
import styles from "./Homepage.module.css"
import Link from "next/link"
import MenuItem from "@mui/material/MenuItem"
import WatchLaterRoundedIcon from "@mui/icons-material/WatchLaterRounded"
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth"
import FmdGoodRoundedIcon from "@mui/icons-material/FmdGoodRounded"
import { InputAdornment, Select, TextField } from "@mui/material"
import Article from "./components/Article"
import Map from "./components/Map"

const Page = () => {
  const [dataArticles, setDataArticles] = useState([
    {
      id: 1,
      img: "/pro.png",
      tile: "Aidez vos collaborateurs à se restaurer",
      link: "/pro",
      text: "Créez un compte professionnel",
    },
    {
      id: 2,
      img: "/restaurant.png",
      tile: "Les plats de vos restaurants préférés, livrés chez vous",
      link: "/restaurant",
      text: "Ajoutez votre restaurant",
    },
    {
      id: 3,
      img: "/partenaire.png",
      tile: "Livrez avec Uber Eats",
      link: "/partenaire",
      text: "Devenez coursier-partenaire",
    },
  ])
  const [bgColor, setBgColor] = useState("bg-transparent")
  const [optionSelected, setOptionSelected] = useState("Livrer maintenant")
  const [address, setAddress] = useState("")

  useEffect(() => {
    const handleColor = () => {
      let scrollY = window.scrollY

      if (scrollY != 0) {
        setBgColor("bg-white transition duration-300")
      } else {
        setBgColor("bg-transparent transition duration-300")
      }
    }

    window.addEventListener("scroll", handleColor)

    return () => {
      window.removeEventListener("scroll", handleColor)
    }
  }, [])

  const selectOption = (event: any) => {
    setOptionSelected(event.target.value)
  }
  const changeAddress = (event: any) => {
    setAddress(event.target.value)
  }

  return (
    <>
      <Navbar bgColor={bgColor} />
      <div className={`${styles.homepage} h-screen flex items-center`}>
        <div className='px-10 flex flex-col gap-10'>
          <span className='text-[54px] leading-[60px]'>
            Vos plats préférés, directement à<br /> votre porte
          </span>
          <div className='flex flex-col gap-5'>
            <div className='flex items-center gap-2 h-14'>
              <TextField
                className=' bg-white'
                value={address}
                placeholder="Saisissez l'adresse de livraison."
                onChange={changeAddress}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <FmdGoodRoundedIcon style={{ color: "black" }} />
                    </InputAdornment>
                  ),
                  style: {
                    padding: "8px 16px",
                    width: "540px",
                    height: "56px",
                    color: "black",
                  },
                }}
                variant='standard'
              />

              <Select
                id='demo-simple-select-standard'
                className='bg-white flex items-center px-4'
                value={optionSelected}
                onChange={selectOption}
              >
                <MenuItem value={"Livrer maintenant"} className='flex gap-4'>
                  <WatchLaterRoundedIcon /> Livrer maintenant
                </MenuItem>
                <MenuItem
                  value={"Planifier pour plus tard"}
                  className='flex gap-3'
                >
                  <CalendarMonthIcon /> Planifier pour plus tard
                </MenuItem>
              </Select>
              <Link
                href={"/restaurant"}
                className='bg-black text-white rounded-lg h-full py-3 px-4 hover:bg-[#333333] flex items-center'
              >
                <button>Trouver un restaurant</button>
              </Link>
            </div>
            <span className='text-base'>
              <Link href={"/sign"} className='underline'>
                Connexion
              </Link>{" "}
              pour afficher vos adresses récentes
            </span>
          </div>
        </div>
      </div>
      <div className='flex px-10 gap-6 justify-center pt-20'>
        {dataArticles.map((article) => {
          return (
            <Article
              key={article.id}
              img={article.img}
              title={article.tile}
              link={article.link}
              text={article.text}
            />
          )
        })}
      </div>
      <div className='flex flex-col px-10 pt-24'>
        <span className='text-4xl font-bold'>Villes à proximité</span>
        <div className='py-8 '>
          <Map />
        </div>
      </div>
    </>
  )
}

export default Page
