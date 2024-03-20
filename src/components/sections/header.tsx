import hamburgerSvg from "../../assets/hamburger.svg"

export const Header = () => {
  return (
    <header className="flex flex-row justify-between items-center py-8 px-5 md:px-10 lg:px-24">
      <a href="#">
        <h1 className="font-montserrat text-[24px] md:text-[32px] font-extrabold">
          Crework
          <span className="m-0 text-[#FAAF3E] text-[30px] md:text-[40px] font-montserrat">
            .
          </span>
        </h1>
      </a>

      <div className="fixed -z-10 md:z-auto pt-10 pb-8 md:pb-0 md:pt-0 left-0 w-full md:w-fit bg-[#1B1919] md:bg-transparent md:static flex md:flex-row items-center flex-col  gap-4 md:scale-y-100 transition-all duration-500 origin-top opacity-0 md:opacity-100 -top-[20rem]">
        <ul className="flex text-[#BDBCBC] gap-12 font-inter text-[20px]">
          <li>30 Days of PM</li>
          <li>Newsletter</li>
          <li>Builders Cohort</li>
        </ul>
      </div>
      <div className="md:hidden flex items-center justify-end w-full">
        <img src={hamburgerSvg} alt="" />
      </div>
    </header>
  )
}
