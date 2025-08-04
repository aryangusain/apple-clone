"use client"

import { useState } from "react";
import NavbarMenu from "./NavbarMenu"
import { cn } from "@/lib/utils";

const NavbarItem = ({children, data}: {children: React.ReactNode, data: navbarMenuItemI}) => {
    const [open, setOpen] = useState(false);
    const [submenuOpen, setSubmenuOpen] = useState(false);

    return (
        <div>
            {/* large screens */}
            <div className="bg-white md:block hidden md:p-0">
                <div onMouseOver={() => setOpen(true)} onMouseOut={() => setOpen(false)} onClick={() => setSubmenuOpen(true)} className={`lg:px-[16px] md:px-[10px] md:py-3 md:text-xs cursor-pointer text-[28px] px-[40px] py-[2px] ${open? "md:text-text-primary ": "md:text-text-light "}`}>
                    {children}
                </div>
                <div className="absolute top-[40px] left-0 flex justify-start items-start w-full bg-white z-40">
                    <NavbarMenu data={data} open={open} setOpen={setOpen} setSubmenuOpen={setSubmenuOpen}/>
                </div>    
            </div>

            {/* small and medium screens */}
            <div className="md:hidden bg-white md:p-0">
                <div onMouseOver={() => setOpen(true)} onMouseOut={() => setOpen(false)} onClick={() => setSubmenuOpen(true)} className={`lg:px-[16px] md:px-[10px] md:py-3 md:text-xs cursor-pointer text-[28px] px-[40px] py-[2px] ${open? "md:text-text-primary ": "md:text-text-light "}`}>
                    {children}
                </div>
                {   
                    submenuOpen && 
                    <div className={cn("absolute top-[40px] left-0 flex justify-start items-start w-full bg-white")}>
                        <NavbarMenu data={data} open={open} setOpen={setOpen} setSubmenuOpen={setSubmenuOpen}/>
                    </div>    
                }
            </div>
        </div>
  )
}
export default NavbarItem