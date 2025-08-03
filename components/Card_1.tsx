import Button from "./ui/Button"
import Heading from "./ui/Heading"
import Subheading from "./ui/Subheading"

const Card_1 = () => {
  return (
    <div className="
      row-span-1 col-span-1
      md:bg-[url('/card_1.jpg')] bg-[url('/promo_ipadpro_avail__s271j89g8kii_small_2x.jpg')] bg-cover bg-no-repeat bg-center md:h-[600px] h-[500px]
      flex flex-col justify-between items-center
      md:py-[60px] py-[40px]
    "
    >
      <div className="flex flex-col gap-[16px] items-center text-text-secondary">
        <Heading className="-mb-2">iPad Pro</Heading>
        <Subheading className="md:text-xl">Unbelievably thin. Incredibly powerful.</Subheading>
        <div className="flex gap-[10px]">
            <Button variant="primary" className="text-sm px-4">Learn More</Button>
            <Button variant="secondary" className="bg-transparent text-sm">Buy</Button>
        </div>
      </div> 
      <div className="font-medium bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-orange-600">
        Built for Apple Intelligence.
      </div>
    </div>
  )
}
export default Card_1