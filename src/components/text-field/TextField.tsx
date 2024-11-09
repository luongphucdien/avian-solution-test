import { InputHTMLAttributes, ReactElement, useRef } from "react"

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
    icon?: ReactElement
}

export const TextField = (props: TextFieldProps) => {
    const { icon, ...otherProps } = props

    const inputRef = useRef<HTMLInputElement>(null)

    const handleIconOnclick = () => {
        if (inputRef.current) {
            inputRef.current.focus()
        }
    }

    return (
        <div className="component-textfield">
            <input
                {...otherProps}
                className="component-textfield-input"
                ref={inputRef}
            />
            {icon && (
                <div
                    className="component-textfield-icon"
                    onClick={handleIconOnclick}
                >
                    {icon}
                </div>
            )}
        </div>
    )
}
