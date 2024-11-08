import * as RadixAvatar from "@radix-ui/react-avatar"

type AvatarProps = RadixAvatar.AvatarProps
export const Avatar = (props: AvatarProps) => {
    return <RadixAvatar.Root {...props} className="component-avatar" />
}

type AvatarImageProps = RadixAvatar.AvatarImageProps
const Image = (props: AvatarImageProps) => {
    return <RadixAvatar.Image {...props} className="component-avatar-image" />
}
Avatar.Image = Image

type AvatarFallbackProps = RadixAvatar.AvatarFallbackProps
const Fallback = (props: AvatarFallbackProps) => {
    return (
        <RadixAvatar.Fallback
            {...props}
            className="component-avatar-fallback"
        />
    )
}
Avatar.Fallback = Fallback
