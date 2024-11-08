import AnalyticsIcon from "../assets/svg/analytics-icon.svg?react"
import DashboardIcon from "../assets/svg/dashboard-icon.svg?react"
import LogoText from "../assets/svg/logo-text.svg?react"
import Logo from "../assets/svg/logo.svg?react"
import MessageIcon from "../assets/svg/message-icon.svg?react"
import NotificationIcon from "../assets/svg/notification-icon.svg?react"
import PersonalIcon from "../assets/svg/personal-icon.svg?react"
import SearchIcon from "../assets/svg/search-icon.svg?react"
import SettingIcon from "../assets/svg/setting-icon.svg?react"
import TransactionIcon from "../assets/svg/transactions-icon.svg?react"
import WalletIcon from "../assets/svg/wallet-icon.svg?react"
import { Avatar } from "../components/avatar"
import { Icon } from "../components/icon"
import { Navigation, NavigationItem } from "../components/navigation"
import { TextField } from "../components/text-field"

export const Page1 = () => {
    const navItems: NavigationItem[] = [
        {
            icon: <DashboardIcon />,
            label: "Dashboard",
        },

        {
            icon: <TransactionIcon />,
            label: "Transactions",
        },

        {
            icon: <WalletIcon />,
            label: "Wallet",
        },

        {
            icon: <AnalyticsIcon />,
            label: "Analytics",
        },

        {
            icon: <PersonalIcon />,
            label: "Personal",
        },

        {
            icon: <MessageIcon />,
            label: "Message",
        },

        {
            icon: <SettingIcon />,
            label: "Setting",
        },
    ]

    return (
        <div className="flex h-[852.62px] w-[1199px] place-self-center overflow-hidden rounded-[15px] bg-[var(--color-surface)]">
            <div className="h-full w-[213.16px] bg-[var(--color-container)]">
                <a href="#" className="flex items-center px-7 py-[23px]">
                    <Icon label="Avian Solutions logo">
                        <span>
                            <Logo />
                        </span>
                    </Icon>

                    <Icon label="Avian Solutions logo text">
                        <span>
                            <LogoText />
                        </span>
                    </Icon>
                </a>

                <div className="py-[31.24px] pl-[33.31px] pr-[41.63px]">
                    <Navigation navItems={navItems} />
                </div>
            </div>

            <div className="grow">
                <div className="flex h-[74.94px] items-center justify-between bg-[var(--color-container)] pl-[24.15px] pr-[27.48px]">
                    <p className="text-[19.98px] font-semibold leading-[29.98px]">
                        Dashboard
                    </p>

                    <div className="flex items-center">
                        <TextField
                            type="text"
                            placeholder="Search..."
                            icon={<SearchIcon />}
                        />

                        <Icon
                            label="Notification icon"
                            className="ml-[23.31px] mr-[19.98px]"
                        >
                            <NotificationIcon />
                        </Icon>

                        <Avatar>
                            <Avatar.Image />
                            <Avatar.Fallback>user</Avatar.Fallback>
                        </Avatar>
                    </div>
                </div>
            </div>
        </div>
    )
}
