import Button from "./Button"

const GalleryCard = ({url, text}: {url: string, text: string}) => {
  return (
    <div className="md:h-[230px] h-[140px] md:min-w-[417px] min-w-[240px] cursor-pointer group relative">
        <img src={url} className="h-full w-full -z-10 absolute"/>
        <div className="z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-hover:bg-black/30 flex h-full w-full justify-center items-center">
            <Button className="z-10 bg-white border-white text-black hover:bg-text-secondary w-fit text-sm" variant="primary">{text}</Button>
        </div>
    </div>
  )
}
export default GalleryCard