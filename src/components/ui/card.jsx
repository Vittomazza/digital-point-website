import * as React from "react"
import { cn } from "@/lib/utils"

const Card = React.forwardRef(({ className, variant = "default", ...props }, ref) => {
  const variants = {
    default: "rounded-xl border bg-card text-card-foreground shadow",
    glass: "rounded-xl glass",
    "glass-light": "rounded-xl glass-light",
    "glass-dark": "rounded-xl glass-dark",
    "glass-sm": "rounded-xl glass-sm"
  }

  return (
    <div
      ref={ref}
      className={cn(variants[variant] || variants.default, className)}
      {...props} />
  )
})
Card.displayName = "Card"

export { Card }