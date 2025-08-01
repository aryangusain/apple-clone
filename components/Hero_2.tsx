import Button from "./ui/Button"
import Heading from "./ui/Heading"
import Subheading from "./ui/Subheading"

const Hero_2 = () => {
  return (
    <div className="
        flex flex-col justify-center gap-[10px] items-center mt-[10px] pt-[30px] cursor-pointer overflow-x-hidden
        bg-[url('/hero_bts_2025__kjxalx8t7ia2_large.jpg')] bg-bottom bg-cover h-[560px] w-full
    "
    >
        <div className="relative">
          <Heading className="text-text-secondary py-4 px-5 rounded-4xl w-[230px] bg-blue-600/90">Buy Mac or iPad <br></br>for college</Heading>
          <img src="/hero_sticker_ipadair__bk6ffplndvte_large_2x.png" className="absolute h-22 top-10 left-52"/>
          <img src="/hero_sticker_mba__b0ht7774wpaq_large_2x.png" className="absolute h-24 -top-9 left-44"/>
        </div>
        <Subheading className=" text-xl font-bold text-text-secondary rounded-4xl px-3 py-1 -mt-1 mb-2 bg-blue-500">with education savings</Subheading>
        <div className="relative">
          <img src="/hero_sticker_genmoji__dixanrcsc2gm_large_2x.png" className="absolute h-12 -top-4 -left-8"/>
          <Heading className="text-text-secondary py-4 px-5 rounded-4xl w-[230px] bg-blue-600/90 mb-4">Choose AirPods or an eligible accessory</Heading>
        </div>
        <Button variant="secondary" className="mb-4">Shop</Button>
    </div>
  )
}
export default Hero_2