import { cn } from "@/lib/utils"

const variants = {
    "primary": "bg-[#0071e3] border-1 border-[#0071e3] text-white hover:bg-[#0575e8]",
    "secondary": " bg-white border-1 border-[#0071e3] text-[#0071e3] hover:bg-[#0071e3] hover:text-white",
}

const Button = ({className, children, variant}: {className?: string, children: React.ReactNode, variant: "primary" | "secondary"}) => {
  return (
    <div className={cn("text-[17px] py-2 px-5 cursor-pointer rounded-full", variants[variant], className)}>{children}</div>
  )
}
export default Button