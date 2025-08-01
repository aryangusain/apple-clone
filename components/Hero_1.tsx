import Button from "./ui/Button"
import Heading from "./ui/Heading"
import Subheading from "./ui/Subheading"

const Hero = () => {
  return (
    <div className="
        flex flex-col gap-[10px] items-center mt-[40px] pt-[30px] cursor-pointer relative overflow-x-hidden
        bg-[url('/hero_iphone_family__fuz5j2v5xx6y_large.jpg')] bg-bottom bg-cover h-[560px] w-full
    "
    >
        <Heading className="text-[56px] font-medium font-sans -mb-4">iPhone</Heading>
        <Subheading>Meet the iPhone 16 family.</Subheading>
        <div className="flex gap-[15px]">
            <Button variant="primary">Learn more</Button>
            <Button variant="secondary">Shop iPhone</Button>
        </div>
        <div className="mt-4 text-xl font-medium bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-orange-600">
            Built for Apple Intelligence.
        </div>
    </div>
  )
}
export default Hero