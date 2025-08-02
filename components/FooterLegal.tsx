import FooterNavItem from "./ui/FooterNavItem"
import Note from "./ui/Note"

const FooterLegal = () => {
  return (
    <div className="flex flex-col w-full mt-[20px]">
        <Note>More ways to shop: <a className="text-blue-500 underline"> Find an Apple Store </a> or <a className="text-blue-500 underline"> other retailer </a> near you. Or call <a className="text-blue-500 underline"> 1-800-MY-APPLE </a> (1-800-692-7753).</Note>
        <div className="w-full bg-neutral-300 my-[20px]" style={{height: "1px"}}></div>
        <div className="flex flex-col md:flex-row justify-between">
            <div className="flex gap-[20px] items-center">
                <Note>
                    Copyright © 2025 Apple Inc. All rights reserved.
                </Note>
                <div className="flex gap-[2px] divide-x divide-text-extralight">
                    <FooterNavItem className="px-[6px]">Privacy Policy</FooterNavItem>
                    <FooterNavItem className="px-[6px]">Terms of Use</FooterNavItem>
                    <FooterNavItem className="px-[6px]">Sales and Refunds</FooterNavItem>
                    <FooterNavItem className="px-[6px]">Legal</FooterNavItem>
                    <FooterNavItem className="px-[6px]">Site Map</FooterNavItem>
                </div>
            </div>   
            <Note>
                United States
            </Note>
        </div>
    </div>
  )
}
export default FooterLegal