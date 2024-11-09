import {
    Children,
    HTMLAttributes,
    isValidElement,
    ReactNode,
    useCallback,
    useState,
} from "react"

const CURRENCY = {
    USD: "$",
} as const
type ObjectValues<T> = T[keyof T]
export type Currency = ObjectValues<typeof CURRENCY>

type ValueCardProps = HTMLAttributes<HTMLDivElement>
export const ValueCard = (props: ValueCardProps) => {
    const { children, ...otherProps } = props

    const [components, setComponents] = useState<{
        Icon: ReactNode | null
        Title: ReactNode | null
        Value: ReactNode | null
    }>({
        Icon: null,
        Title: null,
        Value: null,
    })

    const handleOrganizeComponents = useCallback(() => {
        Children.forEach(children, (child) => {
            if (isValidElement(child) && typeof child.type === "function") {
                const name = child.type.name
                setComponents((c) => ({ ...c, [name]: child }))
            }
        })
    }, [])

    return (
        <div
            {...otherProps}
            className="component-valuecard"
            ref={handleOrganizeComponents}
        >
            {components.Icon}
            <div className="component-valuecard-info">
                {components.Title}
                {components.Value}
            </div>
        </div>
    )
}

type TitleProps = HTMLAttributes<HTMLParagraphElement>
const Title = (props: TitleProps) => {
    return <p {...props} className="component-valuecard-title" />
}
ValueCard.Title = Title

type ValueProps = HTMLAttributes<HTMLParagraphElement> & {
    currency?: Currency
    manualComma?: boolean
}
const Value = (props: ValueProps) => {
    const {
        currency = CURRENCY.USD,
        children,
        manualComma = false,
        ...otherProps
    } = props

    const handleNumberFormatting = (value: ReactNode) => {
        if (typeof value !== "string") return 0

        const commaRemoved = value.replace(/,/g, "")

        if (isNaN(Number(commaRemoved))) return 0

        if (manualComma) {
            return value
        } else {
            return commaRemoved.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")
        }
    }

    return (
        <p {...otherProps} className="component-valuecard-value">
            {`${currency}${handleNumberFormatting(children)}`}
        </p>
    )
}
ValueCard.Value = Value

type IconProps = HTMLAttributes<HTMLDivElement>
const Icon = (props: IconProps) => {
    return <div {...props} className="component-valuecard-icon" />
}
ValueCard.Icon = Icon
