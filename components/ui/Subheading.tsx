import { cn } from "@/lib/utils"

const Subheading = ({children, className}: {children: React.ReactNode, className?: string}) => {
  return (
    <div className={cn("md:text-[28px] text-[18px]", className)}>{children}</div>
  )
}
export default Subheading