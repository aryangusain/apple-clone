import Image from "next/image"
import NavbarItem from "./ui/NavbarItem"
import { IconBriefcase2, IconSearch } from "@tabler/icons-react"

const Navbar = () => {
    const navbarItems: string[] = ["Store", "Mac", "iPad", "iPhone", "Watch", "Vision", "AirPods", "TV & Home", "Entertainment", "Accessories", "Support"]
    const navbarMenuItems: navbarMenuItemsI = {
        "Store": {
            categories: ["Shop", "Quick Links", "Shop Special Stores"],
            subheadings: [],
            menuItems: {
                "Shop": ["Shop the Latest", "Mac", "iPad", "iPhone", "Apple Watch", "Apple Vision", "Accessories"],
                "Quick Links": ["Find a Store", "Order Status", "Apple Trade In", "Financing", "Personal Setup", "College Student Offer"],
                "Shop Special Stores": ["Certified Refurbished", "Education", "Business", "Veterans and Military", "Government"],
            }
        },
        "Mac": {
            categories: ["Shop", "Shop Mac", "More from Mac"],
            subheadings: ["Compare Mac", "Switch from PC to Mac"],
            menuItems: {
                "Shop": ["Explore All Mac", "Macbook Air", "Macbook Pro", "iMac", "Mac mini", "Mac Studio", "Mac Pro"],
                "Shop Mac": ["Shop Mac", "Help me Choose", "Mac Accessories", "Apple Trade In", "Financing", "College Student Offer"],
                "More from Mac": ["Mac Support", "AppleCare", "macOS Tahoe 26 Preview", "Apple Intelligence", "Apps by Apple", "Continuity", "iCloud+", "Mac for Business", "Education"],
            }
        },
        "iPad": {
            categories: ["Shop", "Shop iPad", "More from iPad"],
            subheadings: ["Compare iPad", "Why iPad"],
            menuItems: {
                "Shop": ["Explore All iPad", "iPadbook Pro", "iPad Air", "iPad", "iPad mini", "Apple Pencil", "Keyboards"],
                "Shop iPad": ["Shop iPad", "iPad Accessories", "Apple Trade In", "Financing", "College Student Offer"],
                "More from iPad": ["iPad Support", "AppleCare", "iPadOS 26 Preview", "Apple Intelligence", "Apps by Apple", "iCloud+", "Education"],
            }
        },
        "iPhone": {
            categories: ["Shop", "Shop iPhone", "More from iPhone"],
            subheadings: ["Compare iPhone", "Switch from Android"],
            menuItems: {
                "Shop": ["Explore All iPhone", "iPhone 16 Pro", "iPhone 16", "iPhone 16e", "iPhone 15"],
                "Shop iPhone": ["Shop iPhone", "iPhone Accessories", "Apple Trade In", "Carrier Deals at Apple", "Financing"],
                "More from iPhone": ["iPhone Support", "AppleCare", "iOS 26 Preview", "Apple Intelligence", "Apps by Apple", "iPhone Privacy", "iCloud+", "Wallet, Pay, Card", "Siri"],
            }
        }, 
        "Watch": {
            categories: ["Shop", "Shop Watch", "More from Watch"],
            subheadings: ["Compare Watch", "Why Apple Watch"],
            menuItems: {
                "Shop": ["Explore All Apple Watch", "Apple Watch Series 10", "Apple Watch Ultra 2", "Apple Watch SE", "Apple Watch Nike", "Apple Watch Hermes"],
                "Shop Watch": ["Shop Watch", "Apple Watch Accessories", "Apple Watch Bands", "Apple Watch Accessories", "Apple Trade In", "Financing"],
                "More from Watch": ["Apple Watch Support", "AppleCare", "watchOS 26 Preview", "Apple Watch For Your Kids", "Apps by Apple", "Apple Fitness+"],
            }
        },
        "Vision": {
            categories: ["Shop", "Shop Vision", "More from Vision"],
            subheadings: ["Tech Specs"],
            menuItems: {
                "Shop": ["Explore Apple Vision Pro"],
                "Shop Vision": ["Shop Apple Vision Pro", "Apple Vision Pro Accessories", "Book a Demo", "Financing"],
                "More from Vision": ["Apple Vision Pro Support", "AppleCare", "visionOS 26 Preview"],
            }
        },
        "AirPods": {
            categories: ["Shop", "Shop AirPods", "More from AirPods"],
            subheadings: ["Compare AirPods"],
            menuItems: {
                "Shop": ["Explore All AirPods", "AirPods 4", "AirPods Pro 2", "AirPods Max"],
                "Shop AirPods": ["Shop AirPods", "AirPods Accessories"],
                "More from AirPods": ["AirPods Support", "AppleCare", "Hearing Health", "Apple Music"],
            }
        },
        "TV & Home": {
            categories: ["Shop", "Shop TV & Home", "More from TV & Home"],
            subheadings: ["Compare TV & Home", "Switch from Android"],
            menuItems: {
                "Shop": ["Explore TV & Home", "Apple TV 4K", "HomePod", "HomePod mini"],
                "Shop TV & Home": ["Shop Apple TV 4K", "Shop HomePod", "Shop HomePod mini", "Shop Siri Remote", "TV & Home Accessories"],
                "More from TV & Home": ["Apple TV Support", "HomePod Support", "AppleCare for Apple TV", "AppleCare for HomePod", "Apple TV App", "Apple TV+", "Home app", "Apple Music", "Siri", "Airplay"],
            }
        },
        "Entertainment": {
            categories: ["Shop", "Support"],
            subheadings: ["Compare iPhone", "Switch from Android"],
            menuItems: {
                "Shop": ["Explore Entertainment", "Apple One", "Apple TV+", "Apple Music", "Apple Arcade", "Apple Fitness+", "Apple News+", "Apple Podcasts", "Apple Books", "App Store"],
                "Support": ["Apple TV+ Support", "Apple Music Support"],
            }
        },
        "Accessories": {
            categories: ["Shop", "Explore Accessories"],
            subheadings: [],
            menuItems: {
                "Shop": ["Shop All Accessories", "Mac", "iPad", "iPhone", "Apple Watch", "Apple Vision Pro", "AirPods", "TV & Home"],
                "Explore Accessories": ["Made by Apple", "Beats by Dr. Dre", "AirTag", "Assistive Technologies"],
            }
        },
        "Support": {
            categories: ["Shop", "Get Help", "Helpful Topics"],
            subheadings: ["Explore Support"],
            menuItems: {
                "Shop": ["iPhone", "Mac", "iPad", "Watch", "Apple Vision Pro", "AirPods", "Music", "TV"],
                "Get Help": ["Community", "Check Coverage", "Repair"],
                "Helpful Topics": ["Get AppleCare", "Apple Account and Password", "Billing & Subscription", "Accessibility"],
            }
        }
    }

    return (
        <div className="fixed w-full max-w-[2560px] bg-white z-10">
            {/* For large screens */}
            <div className="flex justify-center items-center gap-[20px] relative">
                <Image src="/logo.png" width={20} height={20} alt="logo" className="cursor-pointer"/>
                {/* {
                    navbarItems.map((item, index) => {
                        return <NavbarItem key={index} data={navbarMenuItems[item]}>{item}</NavbarItem>
                    })
                } */}
                <IconSearch className="h-10 py-3 px-0 cursor-pointer text-text-muted"/>
                <IconBriefcase2 className="h-10 py-3 px-0 cursor-pointer text-text-muted"/>
            </div>

            {/* For medium and small screens */}
        </div>
    )
}
export default Navbar