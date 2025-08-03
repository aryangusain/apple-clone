import FooterNavItem from "./ui/FooterNavItem"
import Note from "./ui/Note"

const FooterLegal = () => {
  return (
    <div className="flex flex-col w-full mt-[20px] md:gap-0 gap-[10px]">
        <Note>More ways to shop: <span className="text-blue-500 underline mx-1"> Find an Apple Store </span> or <span className="text-blue-500 underline mx-1"> other retailer </span> near you. Or call <span className="text-blue-500 underline mx-1"> 1-800-MY-APPLE </span> (1-800-692-7753).</Note>
        <div className="w-full md:border-t border-t-neutral-300 md:my-[20px]"></div>
        <div className="flex flex-col-reverse md:flex-row justify-between md:gap-0 gap-[16px]">
            <div className="flex md:flex-row flex-col gap-[6px] md:items-center items-start">
                <Note>
                    Copyright © 2025 Apple Inc. All rights reserved.
                </Note>
                <div className="flex flex-wrap divide-x gap-x-[9px] gap-y-[5px] divide-text-extralight">
                    <FooterNavItem className="pr-[9px]">Privacy Policy</FooterNavItem>
                    <FooterNavItem className="pr-[9px]">Terms of Use</FooterNavItem>
                    <FooterNavItem className="pr-[9px]">Sales and Refunds</FooterNavItem>
                    <FooterNavItem className="pr-[9px]">Legal</FooterNavItem>
                    <FooterNavItem className="pr-[9px]">Site Map</FooterNavItem>
                </div>
            </div>   
            <FooterNavItem className="text-left">
                United States
            </FooterNavItem>
        </div>
    </div>
  )
}
export default FooterLegal