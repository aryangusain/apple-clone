"use client"
import { cn } from "@/lib/utils";
import NavbarMenuCategory from "./NavbarMenuCategory";
import NavbarMenuHeading from "./NavbarMenuHeading";
import NavbarMenuSubheading from "./NavbarMenuSubheading";
import NavbarSubmenu from "./NavbarSubmenu";

const NavbarMenu = ({data, open, setOpen}: {data: navbarMenuItemI, open: boolean, setOpen: React.Dispatch<React.SetStateAction<boolean>>}) => {

    return (
        <div onMouseOver={() => setOpen(true)} onMouseOut={() => setOpen(false)} className={cn("w-full flex justify-center overflow-hidden transition-all duration-300", open? "opacity-100 h-auto": "opacity-0 h-0")}>
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
    )
}

export default NavbarMenu