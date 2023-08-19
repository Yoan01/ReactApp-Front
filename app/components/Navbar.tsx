export const Navbar = ({ bgColor }: { bgColor: string }) => {
  return (
    <nav className={`p-8 ${bgColor}`}>
      <div className="flex gap-7 items-center">
        <div className="w-5 h-[14px] cursor-pointer relative">
          <span className="bg-black h-[2px] absolute w-full left-0 rounded-xl top-0"></span>
          <span className="bg-black h-[2px]  absolute w-full left-0 rounded-xl top-[6px]"></span>
          <span className="bg-black h-[2px]  absolute w-full left-0 rounded-xl top-3"></span>
        </div>
        <span className="text-2xl">
          Uber <span className="font-bold">Eats</span>
        </span>
      </div>
      <div></div>
    </nav>
  )
}
