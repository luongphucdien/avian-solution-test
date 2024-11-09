import { ClassValue, clsx } from "clsx/lite"

export const cn = (...classNames: ClassValue[]) => {
    return clsx(...classNames)
}
