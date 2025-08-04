import { cn } from "@/lib/utils"

const NavbarMenuCategory = ({children, className}: {children: React.ReactNode, className?: string}) => {
  return (
    <div className={cn("text-text-extralight text-xs", className)}>{children}</div>
  )
}
export default NavbarMenuCategory