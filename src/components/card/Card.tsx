import { ReactNode } from "react"

const CURRENCY = {
    USD: "$",
} as const
type ObjectValues<T> = T[keyof T]
export type Currency = ObjectValues<typeof CURRENCY>

type ValueCardProps = {
    manualComma?: boolean
    currency?: Currency
    value: string | number
    title: string
    icon: ReactNode
}
export const ValueCard = (props: ValueCardProps) => {
    const {
        manualComma = false,
        currency = CURRENCY.USD,
        value,
        title,
        icon,
    } = props

    const handleNumberFormatting = () => {
        if (value === undefined) return 0

        const commaRemoved = value.toString().replace(/,/g, "")

        if (isNaN(Number(commaRemoved))) return 0

        if (manualComma) {
            return value
        } else {
            return commaRemoved.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")
        }
    }

    return (
        <div className="component-valuecard">
            <div className="component-valuecard-icon">{icon}</div>

            <div className="component-valuecard-info">
                <p className="component-valuecard-title">{title}</p>

                <p className="component-valuecard-value">
                    {`${currency}${handleNumberFormatting()}`}
                </p>
            </div>
        </div>
    )
}
