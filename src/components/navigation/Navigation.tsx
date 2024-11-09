import { HTMLAttributes, ReactElement, useState } from "react"

export interface NavigationItem {
    label: string
    icon: ReactElement
    href?: string
    key: string
}

interface NavigationProps extends HTMLAttributes<HTMLElement> {
    navItems: NavigationItem[]
    defaultSelection?: string
}

export const Navigation = (props: NavigationProps) => {
    const { navItems, defaultSelection, ...otherProps } = props

    const [selectedItem, setSelectedItem] = useState(defaultSelection)

    const handleNavItemSelect = (key: string) => {
        setSelectedItem(key)
    }

    return (
        <nav {...otherProps} className="component-navigation">
            {navItems.map((item) => (
                <a
                    key={item.key}
                    href={item.href ?? "#"}
                    onClick={() => handleNavItemSelect(item.key)}
                    data-selected={selectedItem === item.key}
                    className="component-navigation-item"
                >
                    <span className="component-navigation-icon">
                        {item.icon}
                    </span>
                    <span>{item.label}</span>
                </a>
            ))}
        </nav>
    )
}
