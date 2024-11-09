import {
    AnalyticsIcon,
    BalanceIcon,
    DashboardIcon,
    ExpensesIcon,
    IncomeIcon,
    Logo,
    LogoText,
    MessageIcon,
    NotificationIcon,
    PersonalIcon,
    SavingsIcon,
    SearchIcon,
    SettingIcon,
    TransactionIcon,
    WalletIcon,
} from "../assets/svg"
import { Avatar } from "../components/avatar"
import { ValueCard } from "../components/card"
import { Icon } from "../components/icon"
import { IconButton } from "../components/icon-button"
import { Navigation, NavigationItem } from "../components/navigation"
import { TextField } from "../components/text-field"

export const Page1 = () => {
    const navItems: NavigationItem[] = [
        {
            icon: <DashboardIcon />,
            label: "Dashboard",
            key: "dashboard",
        },

        {
            icon: <TransactionIcon />,
            label: "Transactions",
            key: "transaction",
        },

        {
            icon: <WalletIcon />,
            label: "Wallet",
            key: "wallet",
        },

        {
            icon: <AnalyticsIcon />,
            label: "Analytics",
            key: "analytics",
        },

        {
            icon: <PersonalIcon />,
            label: "Personal",
            key: "personal",
        },

        {
            icon: <MessageIcon />,
            label: "Message",
            key: "message",
        },

        {
            icon: <SettingIcon />,
            label: "Setting",
            key: "setting",
        },
    ]

    return (
        <div className="flex h-[852.62px] w-[1199px] place-self-center overflow-hidden rounded-[15px] bg-[var(--color-surface)]">
            <div className="h-full w-[213.16px] bg-[var(--color-container)]">
                <a
                    href="#"
                    className="flex items-center gap-[5.8px] px-7 py-[23px]"
                >
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

                <div className="py-[31.24px]">
                    <Navigation
                        navItems={navItems}
                        defaultSelection="dashboard"
                    />
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

                        <IconButton
                            label="Notification"
                            hasIndicator
                            className="ml-[23.31px] mr-[19.98px]"
                        >
                            <NotificationIcon />
                        </IconButton>

                        <Avatar>
                            <Avatar.Image src="https://s3-alpha-sig.figma.com/img/05ee/48aa/de7b6e9524212508334e50ea61c70030?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jrDAl9eS3ibZiXHCUWqeLtv-NWZVXizz8kIVdoaGEHad0GsV0eZ57D9vZxt9L8YwXLihgsUssDLxRVPTB55H9FWJDx-8UoeRgY59LXPxm5dUndgar-Q6WSlJGWI0BKWxHvL94jXNnjOLGKfTg8y~8FDZoUobkviQ~hIROpPTq~WIa~MJ8J2H7jhO09amkxVze4Z2ey4JhIP636tjsdszMLlt9TrOrKuVCe8O8pH96iZGtdl~pw6nfaId5dbHUJy24SPtrBeGjYkLXgkh6fWd1TQhpaUKuNdz9iVkTnv7K3aKMGn83EKChy0LdU-ldsv2xHRxRL7ALtS5Pra7yKkQAg__" />
                            <Avatar.Fallback>U</Avatar.Fallback>
                        </Avatar>
                    </div>
                </div>

                <div className="grid grid-cols-4 gap-[24.98px] py-[33.31px] pl-[24.98px] pr-[26.64px]">
                    <ValueCard>
                        <ValueCard.Title>Balance</ValueCard.Title>
                        <ValueCard.Value>41210</ValueCard.Value>
                        <ValueCard.Icon>
                            <BalanceIcon />
                        </ValueCard.Icon>
                    </ValueCard>

                    <ValueCard>
                        <ValueCard.Title>Income</ValueCard.Title>
                        <ValueCard.Value>41210</ValueCard.Value>
                        <ValueCard.Icon>
                            <IncomeIcon />
                        </ValueCard.Icon>
                    </ValueCard>

                    <ValueCard>
                        <ValueCard.Title>Expenses</ValueCard.Title>
                        <ValueCard.Value>41210</ValueCard.Value>
                        <ValueCard.Icon>
                            <ExpensesIcon />
                        </ValueCard.Icon>
                    </ValueCard>

                    <ValueCard>
                        <ValueCard.Title>Savings</ValueCard.Title>
                        <ValueCard.Value>41210</ValueCard.Value>
                        <ValueCard.Icon>
                            <SavingsIcon />
                        </ValueCard.Icon>
                    </ValueCard>
                </div>
            </div>
        </div>
    )
}
