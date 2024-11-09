import { ButtonHTMLAttributes } from "react"
import { NewIndicator } from "../../assets/svg"
import { cn } from "../../utils"
import { Icon } from "../icon/Icon"

type IconButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    hasIndicator?: boolean
    label: string
}

export const IconButton = (props: IconButtonProps) => {
    const { children, label, hasIndicator, className, ...otherProps } = props

    return (
        <button
            {...otherProps}
            className={cn("component-iconbutton", className)}
        >
            <Icon label={label} className="component-iconbutton-icon">
                {hasIndicator && (
                    <NewIndicator className="component-iconbutton-indicator" />
                )}
                {children}
            </Icon>
        </button>
    )
}
