import { InputHTMLAttributes, ReactElement } from "react"

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
    icon?: ReactElement
}

export const TextField = (props: TextFieldProps) => {
    const { icon, ...otherProps } = props

    return (
        <div className="component-textfield">
            <input {...otherProps} className="component-textfield-input" />
            {icon && <span className="component-textfield-icon">{icon}</span>}
        </div>
    )
}
