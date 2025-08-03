import { cn } from "@/lib/utils"

const FooterNavHeading = ({children, className}: {children: React.ReactNode, className?: string}) => {
  return (
    <div className={cn("text-xs cursor-pointer md:font-semibold font-normal", className)}>{children}</div>
  )
}
export default FooterNavHeading