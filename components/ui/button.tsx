import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center rounded-xl border border-transparent bg-clip-padding font-medium whitespace-nowrap transition-all duration-200 outline-none select-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-2 aria-invalid:ring-destructive/20 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default:
          "bg-brand text-white hover:bg-brand-darkest shadow-sm",
        outline:
          "border-2 border-accent text-accent bg-transparent hover:bg-bg-surface dark:hover:bg-bg-surface",
        secondary:
          "bg-bg-surface text-brand hover:bg-accent-light dark:bg-bg-surface dark:text-brand dark:hover:bg-accent-light",
        ghost:
          "text-accent hover:text-brand hover:bg-bg-surface dark:hover:bg-bg-surface",
        destructive:
          "bg-destructive/10 text-destructive hover:bg-destructive/20 focus-visible:ring-destructive/40",
        link: "text-brand underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 gap-1.5 px-4 text-sm",
        xs:      "h-7 gap-1 rounded-lg px-2.5 text-xs [&_svg:not([class*='size-'])]:size-3",
        sm:      "h-8 gap-1 rounded-lg px-3 text-sm [&_svg:not([class*='size-'])]:size-3.5",
        lg:      "h-11 gap-2 px-6 text-base",
        icon:    "size-9",
        "icon-sm": "size-8 rounded-lg",
        "icon-lg": "size-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  render,
  nativeButton,
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      render={render}
      // When a render prop is supplied (e.g. <Link>), the root element is not
      // a <button>, so we must tell base-ui not to enforce button semantics.
      nativeButton={nativeButton ?? (render !== undefined ? false : undefined)}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
