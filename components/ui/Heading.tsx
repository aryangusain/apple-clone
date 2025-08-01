import { cn } from "@/lib/utils"

const Heading = ({children, className}: {children: React.ReactNode, className?: string}) => {
  return (
    <div className={cn("text-4xl font-bold", className)}>{children}</div>
  )
}
export default Heading