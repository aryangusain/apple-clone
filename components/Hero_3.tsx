import Button from "./ui/Button"
import Subheading from "./ui/Subheading"

const Hero_3 = () => {
  return (
    <div className="
        flex flex-col gap-[10px] items-center justify-end mt-[10px] py-[40px] cursor-pointer  overflow-x-hidden
        bg-[url('/hero_tv_plus_chief_of_war__dhcgftylhlsi_large.jpg')] bg-bottom bg-cover md:h-[600px] h-[500px] w-full
    "
    >
      <img src="/hero_atv_logo__chcg0akyn1g2_large_2x.png" className="md:h-[52px] h-[32px] md:-mb-20 -mb-12"/>
      <img src="/hero_logo_cow__dy2b1u7r13ee_large_2x.png" className="md:h-[240px] h-[140px] md:-mb-20 -mb-12"/>
      <Subheading className="text-text-secondary">A new series starring Jason Mamoa.</Subheading>
      <Button variant="primary" className="bg-text-secondary text-text-primary border-text-secondary hover:bg-white">Stream now</Button>
    </div>
  )
}
export default Hero_3