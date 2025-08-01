import Button from "./ui/Button"
import Heading from "./ui/Heading"
import Subheading from "./ui/Subheading"

const Card_4 = () => {
  return (
    <div className="
      row-span-1 col-span-1
      bg-[url('/card_4.jpg')] bg-cover bg-no-repeat bg-center h-[600px]
      flex flex-col justify-end items-center gap-[10px]
      py-[60px]
      text-center
      text-text-secondary
    ">
       <Heading className="-mb-2">AirPods Pro 2</Heading>
        <Subheading className="text-xl">Now with a Hearing Aid feature.</Subheading>
        <div className="flex gap-[10px] mt-2">
            <Button variant="primary" className="text-sm px-4">Learn More</Button>
            <Button variant="secondary" className="text-sm">Buy</Button>
        </div>
    </div>
  )
}
export default Card_4