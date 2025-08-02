import GalleryCard from "./ui/GalleryCard";

const Gallery = () => {
  const cards = ["/gallery_card_1.jpg", "/gallery_card_2.jpg", "gallery_card_3.jpg", "gallery_card_4.jpg", "gallery_card_6.jpg"];

  return (
    <div className="w-full flex">
        {
          cards.map((url, index) => {
            return <GalleryCard key={index} url={url} />
          })
        }
    </div>
  )
}
export default Gallery