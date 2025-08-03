import { cn } from "@/lib/utils"
import FooterNavItem from "./FooterNavItem"

const FooterNavSubmenu = ({items, className}: {items: string[], className?: string}) => {
  return (
    <div className={cn("flex flex-col gap-[10px] md:px-0 px-2", className)}>
        {
            items.map((item, index) => {
                return <FooterNavItem key={index}>{item}</FooterNavItem>
            })
        }
    </div>  
  )
}
export default FooterNavSubmenu