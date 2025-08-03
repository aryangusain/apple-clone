import { IconChevronDown } from "@tabler/icons-react";
import FooterNavHeading from "./ui/FooterNavHeading"
import FooterNavItem from "./ui/FooterNavItem"
import FooterNavMenu from "./ui/FooterNavMenu";

const FooterNav = () => {
    const nav = [
        {
            heading: 'Shop and Learn',
            items: ['Store', 'Mac', 'iPad', 'iPhone', 'Watch', 'Vision', 'AirPods', 'TV & Home', 'AirTag', 'Accessories', 'Gift Cards']
        },
        {
            heading: 'Apple Wallet',
            items: ['Wallet', 'Apple Card', 'Apple Pay', 'Apple Cash']
        },
        {
            heading: 'Account',
            items: ['Manage Your Apple Account', 'Apple Store Account', 'iCloud.com']
        },
        {
            heading: 'Entertainment',
            items: ['Apple One', 'Apple TV+', 'Apple Music', 'Apple Arcade', 'Apple Fitness+', 'Apple News+', 'Apple Podcasts', 'Apple Books', 'App Store']
        },
        {
            heading: 'Apple Store',
            items: ['Find a Store', 'Genius Bar', 'Today at Apple', 'Group Reservations', 'Apple Camp', 'Apple Store App', 'Certified Refurbished', 'Apple Trade In', 'Financing', 'Carrier Deals at Apple', 'Order Status', 'Shopping Help']
        },
        {
            heading: 'For Business',
            items: ['Apple and Business', 'Shop for Business']
        },
        {
            heading: 'For Education',
            items: ['Apple and Education', 'Shop for K-12', 'Shop for College']
        },
        {
            heading: 'For Healthcare',
            items: ['Apple and Healthcare']
        },
        {
            heading: 'For Government',
            items: ['Apple and Government', 'Shop for Veterans and Military', 'Shop for State and Local Employees', 'Shop for Federal Employees']
        },
        {
            heading: 'Apple Values',
            items: ['Accessibility', 'Education', 'Environment', 'Inclusion and Diversity', 'Privacy', 'Racial Equity and Justice', 'Supply Chain Innovation']
        },
        {
            heading: 'About Apple',
            items: ['Newsroom', 'Apple Leadership', 'Career Opportunities', 'Investors', 'Ethics & Compliance', 'Events', 'Contact Apple']
        },
    ];

    return (
        <div className="w-full"> 
            {/* Large Screen */}      
            <div className="flex md:flex-row flex-col flex-nowrap w-full">
                <div className="flex flex-col text-left items-start justify-start flex-1 pr-[10px]">
                    {
                        nav.slice(0, 2).map(({heading, items}, index) => {
                            return (
                                <FooterNavMenu key={index} heading={heading} items={items} />
                            )
                        })
                    }
                </div>
                <div className="flex flex-col text-left items-start justify-start flex-1 pr-[10px]">
                    {
                        nav.slice(2, 4).map(({heading, items}, index) => {
                            return (
                                <FooterNavMenu key={index} heading={heading} items={items} />
                            )
                        })
                    }
                </div>
                <div className="flex flex-col text-left items-start justify-start flex-1 pr-[10px]">
                    {
                        nav.slice(4, 5).map(({heading, items}, index) => {
                            return (
                                <FooterNavMenu key={index} heading={heading} items={items} />
                            )
                        })
                    }
                </div>
                <div className="flex flex-col text-left items-start justify-start flex-1 pr-[10px]">
                    {
                        nav.slice(5, 9).map(({heading, items}, index) => {
                            return (
                                <FooterNavMenu key={index} heading={heading} items={items} />
                            )
                        })
                    }
                </div>
                <div className="flex flex-col text-left items-start justify-start flex-1 pr-[10px]">
                    {
                        nav.slice(9).map(({heading, items}, index) => {
                            return (
                                <FooterNavMenu key={index} heading={heading} items={items} />
                            )
                        })
                    }
                </div>
            </div>

            {/* Medium and Small Screen */}
            <div className="flex md:hidden">
                {
                    
                }
            </div>
        </div>
    )
}
export default FooterNav