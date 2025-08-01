import { cn } from "@/lib/utils"

const Subheading = ({children, className}: {children: React.ReactNode, className?: string}) => {
  return (
    <div className={cn("text-[28px]", className)}>{children}</div>
  )
}
export default Subheading