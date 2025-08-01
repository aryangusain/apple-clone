import Button from "./ui/Button"
import Heading from "./ui/Heading"
import Subheading from "./ui/Subheading"

const Card_6 = () => {
  return (
    <div className="
      row-span-1 col-span-1
      bg-[url('/card_6.jpg')] bg-cover bg-no-repeat bg-center h-[600px]
      flex flex-col justify-start items-center gap-[10px]
      py-[60px]
      text-center
    ">
      <div className="flex">
        <img src='/logo.png' className="size-9 -mr-1"/>
       <Heading className="-mb-2">Card</Heading>
      </div>
        <Subheading className="text-xl">Get upto 3% Daily Cash back<br />with every purchase.</Subheading>
        <div className="flex gap-[10px]">
          <Button variant="primary" className="text-sm">Learn more</Button>
          <Button variant="secondary" className="text-sm">Apply now</Button>
        </div>
    </div>
  )
}
export default Card_6