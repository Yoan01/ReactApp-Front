import Image from "next/image"
import Link from "next/link"

const Article = ({
  img,
  title,
  link,
  text,
}: {
  img: string
  title: string
  link: string
  text: string
}) => {
  return (
    <Link href={link} className='flex flex-col gap-3 w-[500px] '>
      <Image src={img} alt='' width={500} height={205} />
      <span className='font-bold text-3xl'>{title}</span>
      <span className='underline text-base'>{text}</span>
    </Link>
  )
}

export default Article
