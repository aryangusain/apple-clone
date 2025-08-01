import Button from "./ui/Button"
import Heading from "./ui/Heading"
import Subheading from "./ui/Subheading"

const Card_5 = () => {
  return (
     <div className="
      row-span-1 col-span-1
      bg-[url('/card_5.jpg')] bg-cover bg-no-repeat bg-center h-[600px]
      flex flex-col justify-start items-center gap-[10px]
      py-[60px]
      text-center
    ">
      <div className="flex">
        <img src='/logo.png' className="size-9 -mr-1"/>
       <Heading className="-mb-2">Trade In</Heading>
      </div>
        <Subheading className="text-xl">Get a $160-$600 in credit when you<br />trade in iPhone 12 or higher.</Subheading>
        <Button variant="primary" className="text-sm">Get your estimate</Button>
    </div>
  )
}
export default Card_5