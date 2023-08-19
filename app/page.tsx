import { Navbar } from './components/Navbar'
import styles from './Navbar.module.css'
import { scroller } from 'react-scroll'

const Page = () => {
  let bgColor: string = 'bg-white'
  console.log(scroller)

  // scroller?.addEventListener('scroll', (event) => {
  //   if (scroller.scrollTop === 0) {
  //     bgColor = 'bg-transparent'
  //   }
  // })
  return (
    <>
      <div className={`homepage ${styles.homepage} h-screen`}>
        <Navbar bgColor={bgColor} />
        <div></div>
      </div>
    </>
  )
}

export default Page
