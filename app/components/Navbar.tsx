import Link from "next/link"
import PersonIcon from "@mui/icons-material/Person"
import { useState } from "react"
import { Drawer } from "@mui/material"
import AdbIcon from "@mui/icons-material/Adb"
import AppleIcon from "@mui/icons-material/Apple"
import Image from "next/image"

export const Navbar = ({ bgColor }: { bgColor: string }) => {
  const [open, setOpen] = useState(false)

  const toggleDrawer = (isOpen: any) => {
    setOpen(isOpen)
  }

  return (
    <>
      <nav
        className={`px-10 py-6 ${bgColor} fixed w-full flex items-center justify-between`}
      >
        <div className='flex gap-8 items-center'>
          <div
            className='w-5 h-[14px] cursor-pointer relative'
            onClick={() => toggleDrawer(true)}
          >
            <span className='bg-black h-[2px] absolute w-full left-0 rounded-xl top-0'></span>
            <span className='bg-black h-[2px]  absolute w-full left-0 rounded-xl top-[5.8999px]'></span>
            <span className='bg-black h-[2px]  absolute w-full left-0 rounded-xl top-3'></span>
          </div>
          <span className='text-3xl'>
            Uber <span className='font-bold'>Eats</span>
          </span>
        </div>
        <div className='flex gap-4'>
          <Link
            href={"/login"}
            className='bg-white rounded-full font-bold py-3 px-4 hover:bg-[#cccccc] flex items-center gap-2'
          >
            <PersonIcon />
            <button>Connexion</button>
          </Link>
          <Link
            href={"/sign"}
            className='bg-black text-white font-bold rounded-full py-3 px-4 hover:bg-[#333333]'
          >
            <button>Inscription</button>
          </Link>
        </div>
      </nav>
      <Drawer anchor='left' open={open} onClose={() => toggleDrawer(false)}>
        <div className='w-[252px] m-6 flex flex-col justify-between h-full'>
          <div>
            <div className='flex flex-col gap-4 items-center justify-center'>
              <Link
                href={"/sign"}
                className='bg-black text-white rounded-lg py-4 w-full hover:bg-[#333333] flex items-center justify-center'
              >
                <button>Inscription</button>
              </Link>
              <Link
                href={"/login"}
                className='bg-[#eeeeee] text-black rounded-lg  py-4 w-full hover:bg-[#e2e2e2] flex items-center justify-center'
              >
                <button>Connexion</button>
              </Link>
            </div>
            <div className='flex flex-col pt-5 gap-3'>
              <Link href={"/pro"} className='text-sm'>
                Créez un compte professionnel
              </Link>
              <Link href={"/restaurant"} className='text-sm'>
                Ajoutez votre restaurant
              </Link>
              <Link href={"/partenaire"} className='text-sm'>
                Devenez coursier-partenaire
              </Link>
            </div>
          </div>
          <div className=' flex flex-col'>
            <div className='flex gap-3 items-center'>
              <Image
                alt='Uber&nbsp;Eats'
                src='https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/31ee382bd0e6ed84.svg'
                width={56}
                height={56}
              />
              <span className=' text-base text-bold'>
                Plus de fonctionnalités dans l&apos;application.
              </span>
            </div>
            <div className='flex gap-4 items-center justify-center m-6'>
              <Link
                href={"/iphone"}
                className='bg-[#eeeeee] text-black text-sm rounded-full py-2 px-2 hover:bg-[#e2e2e2] flex items-center justify-center gap-2'
              >
                <AppleIcon /> <button>Iphone</button>
              </Link>
              <Link
                href={"/android"}
                className='bg-[#eeeeee] text-black text-sm rounded-full  py-2 px-2 hover:bg-[#e2e2e2] flex items-center justify-center gap-2'
              >
                <AdbIcon /> <button>Android</button>
              </Link>
            </div>
          </div>
        </div>
      </Drawer>
    </>
  )
}
