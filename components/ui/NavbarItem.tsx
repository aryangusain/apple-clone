"use client"

import { useState } from "react";
import NavbarMenu from "./NavbarMenu"

const NavbarItem = ({children, data}: {children: React.ReactNode, data: navbarMenuItemI}) => {
    const [open, setOpen] = useState(false);

    return (
      <div className="bg-white">
          <div onMouseOver={() => setOpen(true)} onMouseOut={() => setOpen(false)} className={`px-2 py-3 text-xs cursor-pointer ${open? " text-text-primary ": "  text-text-light "}`}>
              {children}
          </div>
          <div className="absolute top-[40px] left-0 flex justify-start items-start w-full bg-white z-10">
              <NavbarMenu data={data} open={open} setOpen={setOpen}/>
          </div>
      </div>
  )
}
export default NavbarItem