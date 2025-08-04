import { cn } from "@/lib/utils"

const NavbarMenuItem = ({children, className}: {children: React.ReactNode, className?: string}) => {
  return (
    <div className={cn("text-[13px] text-text-primary font-medium", className)}>{children}</div>
  )
}
export default NavbarMenuItem