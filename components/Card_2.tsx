import Button from "./ui/Button"
import Heading from "./ui/Heading"
import Subheading from "./ui/Subheading"

const Card_2 = () => {
  return (
    <div className="
      row-span-1 col-span-1
      md:bg-[url('/card_2.jpg')] bg-[url('/promo_apple_intelligence_visual_intelligence__fz9rjall8kii_small_2x.jpg')] bg-cover bg-no-repeat bg-center md:h-[600px] h-[500px]
      flex flex-col justify-end items-center gap-[16px]
      md:py-[60px] py-[40px]
      text-center
      text-text-secondary
    ">
       <Heading className="-mb-2">Apple Intelligence</Heading>
        <Subheading className="md:text-xl">Turn a poster into a Calender <br /> event with visual intelligence.</Subheading>
        <div className="flex gap-[10px]">
            <Button variant="secondary" className="bg-text-secondary border-text-secondary text-text-primary hover:text-text-primary hover:bg-white hover:border-white text-sm px-4">Watch the clip</Button>
            <Button variant="primary" className="text-sm bg-transparent text-text-secondary border-text-secondary hover:text-text-primary hover:bg-text-secondary hover:border-text-secondary">Learn More</Button>
        </div>
    </div>
  )
}
export default Card_2