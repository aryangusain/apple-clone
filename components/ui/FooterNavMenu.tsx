"use client"

import { IconChevronDown, IconChevronUp } from "@tabler/icons-react"
import FooterNavHeading from "./FooterNavHeading"
import FooterNavSubmenu from "./FooterNavSubmenu"
import { useState } from "react";
import { cn } from "@/lib/utils";

const FooterNavMenu = ({heading, items}: {heading: string, items: string[]}) => {
    const [open, setOpen] = useState(false);

    return (
        <div className="flex flex-col gap-[10px] md:mb-[22px] md:py-[4px] py-[2px] w-full md:border-b-0 border-b border-b-neutral-300 mb-[10px]">
            <div onClick={() => setOpen((prev) => !prev)} className="flex justify-between items-center w-full">
                <FooterNavHeading>{heading}</FooterNavHeading>
                <IconChevronDown className={cn("md:hidden h-[16px] text-text-primary", open && "hidden")}/>
                <IconChevronUp className={cn("md:hidden h-[16px] text-text-primary", !open && "hidden")}/>
            </div>
            
            <FooterNavSubmenu
                items={items}
                className={cn(
                    "transition-all md:duration-0 duration-500 ease-linear overflow-hidden",
                    "md:flex md:max-h-full",
                    open ? "max-h-[500px]" : "max-h-0"
                )}
            />

        </div>
    )
}
export default FooterNavMenu