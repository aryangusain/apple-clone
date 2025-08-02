import { cn } from "@/lib/utils"

const GalleryCard = ({url}: {url: string}) => {
  return (
    <div className={cn(
        `bg-[url(${url})] h-full bg-cover bg-no-repeat bg-center`
    )}>
        
    </div>
  )
}
export default GalleryCard