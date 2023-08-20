"use client"
import { useEffect, useState } from "react"
import { Navbar } from "./components/Navbar"
import styles from "./Navbar.module.css"
import Link from "next/link"
import TextField from "@mui/material/TextField"
import MenuItem from "@mui/material/MenuItem"
import Button from "@mui/material/Button"
import { createTheme, ThemeProvider } from "@mui/material/styles"
import WatchLaterRoundedIcon from "@mui/icons-material/WatchLaterRounded"

const Page = () => {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#000000", // Couleur noire
      },
    },
  })

  const [bgColor, setBgColor] = useState("bg-transparent")
  const [options, setOptions] = useState([
    "Livrer maintenant",
    "Planifier pour plus tard",
  ])
  const [optionSelected, setOptionSelected] = useState("Livrer maintenant")

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

  return (
    <>
      <Navbar bgColor={bgColor} />
      <div className={`${styles.homepage} h-screen flex items-center`}>
        <div>
          <span>Vos plats préférés, directement à votre porte</span>
          <div className='flex gap-5'>
            <TextField
              id='outlined-select-currency'
              select
              value={optionSelected}
              onChange={selectOption}
            >
              <MenuItem value={"Livrer maintenant"}>Livrer maintenant</MenuItem>
              <MenuItem value={"Planifier pour plus tard"}>
                Planifier pour plus tard
              </MenuItem>
            </TextField>
            <Link
              href={"/restaurant"}
              className='bg-black text-white rounded-lg py-3 px-4 hover:bg-[#333333] flex items-center'
            >
              <button>Trouver un restaurant</button>
            </Link>
          </div>
          <span>
            <Link href={"/sign"}>Sign In</Link> for your recent addresses
          </span>
        </div>
      </div>
    </>
  )
}

export default Page
