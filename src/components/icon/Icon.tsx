import * as RadixIcon from "@radix-ui/react-accessible-icon"
import { HTMLAttributes } from "react"
import { cn } from "../../utils"

type IconProps = HTMLAttributes<HTMLSpanElement> & RadixIcon.AccessibleIconProps

export const Icon = (props: IconProps) => {
    const { label, className, ...otherProps } = props

    return (
        <RadixIcon.Root label={label}>
            <span className={cn("component-icon", className)} {...otherProps} />
        </RadixIcon.Root>
    )
}
