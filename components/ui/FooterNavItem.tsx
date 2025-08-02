import { cn } from "@/lib/utils"

const FooterNavItem = ({children, className}: {children: React.ReactNode, className?: string}) => {
  return (
    <div className={cn("text-xs text-text-light font-extralight cursor-pointer", className)}>{children}</div>
  )
}
export default FooterNavItem