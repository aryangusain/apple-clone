import NavbarMenuCategory from "./NavbarMenuCategory"
import NavbarMenuItem from "./NavbarMenuItem"

const NavbarSubmenu = ({category, items}: {category: string, items: string[]}) => {
  return (
    <div className="flex flex-col gap-[18px]">
        <NavbarMenuCategory className="text-lg">{category}</NavbarMenuCategory>
        <div className="flex flex-col gap-[8px]">
            {
                items.map((item, index) => {
                    return <NavbarMenuItem className="text-base font-semibold" key={index}>{item}</NavbarMenuItem>
                })
            }
        </div>
    </div>
  )
}
export default NavbarSubmenu