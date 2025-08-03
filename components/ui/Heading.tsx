import { cn } from "@/lib/utils"

const Heading = ({children, className}: {children: React.ReactNode, className?: string}) => {
  return (
    <div className={cn("md:text-[36px] text-[32px]/8 md:font-bold ", className)}>{children}</div>
  )
}
export default Heading