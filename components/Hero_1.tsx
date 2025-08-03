import Button from "./ui/Button"
import Heading from "./ui/Heading"
import Subheading from "./ui/Subheading"

const Hero = () => {
  return (
    <div className="
        flex flex-col gap-[10px] items-center mt-[40px] pt-[30px] cursor-pointer relative overflow-x-hidden
        md:bg-[url('/hero_iphone_family__fuz5j2v5xx6y_large.jpg')] bg-[url('/hero_iphone_family__fuz5j2v5xx6y_small_2x.jpg')]
        bg-bottom bg-cover md:h-[560px] h-[500px] w-full
    "
    >
        <Heading className="md:text-[56px] font-medium font-sans md:mb-2 -mb-2">iPhone</Heading>
        <Subheading>Meet the iPhone 16 family.</Subheading>
        <div className="flex gap-[15px]">
            <Button variant="primary">Learn more</Button>
            <Button variant="secondary">Shop iPhone</Button>
        </div>
        <div className="mt-4 md:text-xl text-sm font-medium bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-orange-600">
            Built for Apple Intelligence.
        </div>
    </div>
  )
}
export default Hero