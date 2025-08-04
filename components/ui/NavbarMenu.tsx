"use client"

import { cn } from "@/lib/utils";
import NavbarMenuCategory from "./NavbarMenuCategory";
import NavbarMenuHeading from "./NavbarMenuHeading";
import NavbarMenuSubheading from "./NavbarMenuSubheading";
import NavbarSubmenu from "./NavbarSubmenu";
import { IconChevronLeft } from "@tabler/icons-react";

const NavbarMenu = ({data, open, setOpen, setSubmenuOpen}: {data: navbarMenuItemI, open: boolean, setOpen: React.Dispatch<React.SetStateAction<boolean>>, setSubmenuOpen: React.Dispatch<React.SetStateAction<boolean>>}) => {
    
    return (
        <div className="w-full z-40">
            {/* Large Screen */}
            <div onMouseOver={() => setOpen(true)} onMouseOut={() => setOpen(false)} className={cn("w-full md:flex hidden md:justify-center md:overflow-hidden transition-all duration-300 ", open ? "opacity-100 max-h-[500px]": "opacity-0 max-h-0")}>
                <div className="py-[40px] lg:w-[870px] w-[710px] flex justify-start items-start gap-[60px] duration-300 transition-all">
                    <div className="flex flex-col gap-[8px]">
                        <NavbarMenuCategory>{data.categories[0]}</NavbarMenuCategory>
                        <div className="flex flex-col gap-[16px]">
                            <div>
                                {
                                    data.menuItems[data.categories[0]].map((item, index) => {
                                        return <NavbarMenuHeading key={index}>{item}</NavbarMenuHeading>
                                    })
                                }
                            </div>
                            <div className="flex flex-col gap-[8px]">
                                {
                                    data.subheadings.map((item, index) => {
                                        return <NavbarMenuSubheading key={index}>{item}</NavbarMenuSubheading>
                                    })
                                }   
                            </div>
                        </div>
                    </div>   
                    {
                        data.categories.slice(1).map((item, index) => {
                            return <NavbarSubmenu key={index} category={item} items={data.menuItems[item]} />
                        })
                    }
                </div>
            </div>

            {/* Small and Medium screens */}
            <div className={cn("md:hidden absolute top-0 left-0 overflow-y-scroll w-full h-screen z-40 bg-white")}>
                <div className="fixed top-0 left-0 w-full flex items-center bg-white z-50">
                    <IconChevronLeft onClick={() => setSubmenuOpen(false)} className="size-12 py-3 px-1"/>
                </div>

                <div className="pt-[40px] pb-[80px] px-[40px] flex flex-col justify-start items-start gap-[20px] duration-300 transition-all">
                    <div className={cn("flex flex-col gap-[8px]")}>
                        <NavbarMenuCategory className="text-lg">{data.categories[0]}</NavbarMenuCategory>
                        <div className="flex flex-col gap-[16px]">
                            <div>
                                {
                                    data.menuItems[data.categories[0]].map((item, index) => {
                                        return <NavbarMenuHeading key={index}>{item}</NavbarMenuHeading>
                                    })
                                }
                            </div>
                            <div className="flex flex-col gap-[8px]">
                                {
                                    data.subheadings.map((item, index) => {
                                        return <NavbarMenuSubheading key={index}>{item}</NavbarMenuSubheading>
                                    })
                                }   
                            </div>
                        </div>
                    </div>  
                    <div className="flex flex-wrap gap-[40px]">
                        {
                            data.categories.slice(1).map((item, index) => {
                                return <NavbarSubmenu key={index} category={item} items={data.menuItems[item]} />
                            })
                        }
                    </div> 
                </div>
            </div>
        </div>
    )
}

export default NavbarMenu