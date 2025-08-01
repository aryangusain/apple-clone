import Button from "./ui/Button"
import Heading from "./ui/Heading"
import Subheading from "./ui/Subheading"

const Card_2 = () => {
  return (
    <div className="
      row-span-1 col-span-1
      bg-[url('/card_2.jpg')] bg-cover bg-no-repeat bg-center h-[600px]
      flex flex-col justify-end items-center gap-[10px]
      py-[60px]
      text-center
      text-text-secondary
    ">
       <Heading className="-mb-2">Apple Intelligence</Heading>
        <Subheading className="text-xl">Turn a poster into a Calender <br /> event with visual intelligence.</Subheading>
        <div className="flex gap-[10px] mt-2">
            <Button variant="secondary" className="bg-text-secondary border-text-secondary text-text-primary hover:text-text-primary hover:bg-white hover:border-white text-sm px-4">Watch the clip</Button>
            <Button variant="primary" className="text-sm bg-transparent text-text-secondary border-text-secondary hover:text-text-primary hover:bg-text-secondary hover:border-text-secondary">Learn More</Button>
        </div>
    </div>
  )
}
export default Card_2