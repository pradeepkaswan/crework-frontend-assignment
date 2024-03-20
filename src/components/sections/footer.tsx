import dribbbleSvg from "../../assets/dribbble.svg"
import behanceSvg from "../../assets/behance.svg"
import linkedinSvg from "../../assets/linkedin.svg"
import facebookSvg from "../../assets/facebook.svg"
import { CopyrightSvg } from "../../assets/copyright"

export const Footer = () => {
  return (
    <div className="py-[32px]  px-[54px]  bg-[#181616]">
      <div className="flex flex-col md:flex-row md:justify-between items-center gap-8 md:py-8 md:px-5">
        <a href="#">
          <h1 className="font-montserrat text-[18px] md:text-[32px] font-extrabold">
            Crework
            <span className="m-0 text-[#FAAF3E] text-[18px] md:text-[40px] font-montserrat">
              .
            </span>
          </h1>
        </a>
        <ul className="flex font-poppins font-normal text-[14px] md:text-[20px] text-[#C6C5C5] gap-[72px]">
          <div className="flex flex-col gap-6">
            <li className="md:hidden">About Us</li>
            <li className="hidden md:block">Newsletter</li>
            <li className="md:hidden">Out Graduates</li>
            <li className="hidden md:block">Builders Cohort</li>
          </div>
          <div className="flex flex-col gap-6">
            <li>Curriculum</li>
            <li>Refund Policy</li>
          </div>
        </ul>
        <div className="flex gap-4 mb-8">
          <img src={dribbbleSvg} height={20} width={20} alt="dribbble" />
          <img src={behanceSvg} height={20} width={20} alt="behance" />
          <img src={linkedinSvg} height={20} width={20} alt="linkedin" />
          <img src={facebookSvg} height={20} width={20} alt="facebook" />
        </div>
      </div>
      <div className="flex items-center flex-col">
        <div className="w-[320px] md:w-[546px] h-0.5  bg-gradient-to-r from-[#FFFFFF] to-[#211F1F] mb-8"></div>
        <p className="hidden font-inter font-semibold text-[14px] text-[#ADADAD] md:flex flex-row gap-2">
          Copyright <CopyrightSvg /> 2024 Crework
        </p>
        <p className="md:hidden font-inter font-semibold text-[14px] text-[#ADADAD] leading-6">
          2021 Crework, 2023
        </p>
      </div>
    </div>
  )
}
