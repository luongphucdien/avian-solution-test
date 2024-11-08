import * as RadixIcon from "@radix-ui/react-accessible-icon"
import { HTMLAttributes } from "react"

type IconProps = HTMLAttributes<HTMLSpanElement> & RadixIcon.AccessibleIconProps

export const Icon = (props: IconProps) => {
    const { label, ...otherProps } = props

    return (
        <RadixIcon.Root label={label}>
            <span className="component-icon" {...otherProps} />
        </RadixIcon.Root>
    )
}
