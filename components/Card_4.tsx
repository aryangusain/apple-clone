import Button from "./ui/Button"
import Heading from "./ui/Heading"
import Subheading from "./ui/Subheading"

const Card_4 = () => {
  return (
    <div className="
      row-span-1 col-span-1
      md:bg-[url('/card_4.jpg')] bg-[url('/promo_airpods_pro_2_avail__vkitqi3okwie_small_2x.jpg')] bg-cover bg-no-repeat bg-center md:h-[600px] h-[500px]
      flex flex-col justify-end items-center gap-[16px]
      md:py-[60px] py-[40px]
      text-center
      text-text-secondary
    ">
       <Heading className="-mb-2">AirPods Pro 2</Heading>
        <Subheading className="md:text-xl">Now with a Hearing Aid feature.</Subheading>
        <div className="flex gap-[10px]">
            <Button variant="primary" className="text-sm px-4">Learn More</Button>
            <Button variant="secondary" className="text-sm">Buy</Button>
        </div>
    </div>
  )
}
export default Card_4