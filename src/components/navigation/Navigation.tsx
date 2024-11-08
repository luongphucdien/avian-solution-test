import { HTMLAttributes, ReactElement } from "react"
import { Icon } from "../icon"

export interface NavigationItem {
    label: string
    icon: ReactElement
    href?: string
}

interface NavigationProps extends HTMLAttributes<HTMLElement> {
    navItems: NavigationItem[]
}

export const Navigation = (props: NavigationProps) => {
    const { navItems, ...otherProps } = props

    return (
        <nav {...otherProps} className="component-navigation">
            {navItems.map((item) => (
                <a key={item.label} href={item.href}>
                    <Icon label={`${item.label} icon`}>{item.icon}</Icon>
                    <span>{item.label}</span>
                </a>
            ))}
        </nav>
    )
}
