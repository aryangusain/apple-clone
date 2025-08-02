import GalleryCard from "./ui/GalleryCard";

const Gallery = () => {
  const cards = [
    {url: "/gallery_card_1.png", text: "Watch Now" },
    {url: "/gallery_card_2.png", text: "Listen Now" },
    {url: "/gallery_card_3.png", text: "Play Now" },
    {url: "/gallery_card_4.png", text: "Watch Now" },
    {url: "/gallery_card_5.png", text: "Listen Now"},
    {url: "/gallery_card_6.png", text: "Play Now" },
    {url: "/gallery_card_1.png", text: "Watch Now" },
    {url: "/gallery_card_2.png", text: "Listen Now" },
    {url: "/gallery_card_3.png", text: "Play Now" },
    {url: "/gallery_card_4.png", text: "Watch Now" },
    {url: "/gallery_card_5.png", text: "Listen Now"},
    {url: "/gallery_card_6.png", text: "Play Now" },
    {url: "/gallery_card_1.png", text: "Watch Now" },
    {url: "/gallery_card_2.png", text: "Listen Now" },
    {url: "/gallery_card_3.png", text: "Play Now" },
    {url: "/gallery_card_4.png", text: "Watch Now" },
    {url: "/gallery_card_5.png", text: "Listen Now"},
    {url: "/gallery_card_6.png", text: "Play Now" },
  ];

  return (
    <div className="w-full overflow-hidden my-[40px]">
      <div className="flex w-fit gap-[16px] animate-scroll">
        {cards.map((card, index) => {
          return <GalleryCard key={index} text={card.text} url={card.url} />;
        })}
      </div>
    </div>
  );
};

export default Gallery;