import { cn } from "@/lib/cn";
import { Slot } from "@radix-ui/react-slot";
import { cva, VariantProps } from "class-variance-authority";
import * as React from "react";

const buttonVariants = cva(
  "inline-flex justify-center item-center rounded-md text-base font-medium transition-all cursor-pointer disabled:pointer-events-none disabled:opacity-50 shrink-0 focus:outline-bone focus:ring-slat-300",
  {
    variants: {
      variant: {
        default:
          "bg-token-button-primary-default hover:bg-token-button-primary-hover px-4 py-2",
        secondary:
          "border-token-border-secondary-default border-2 hover:bg-token-button-primary-subtle px-4 py-2",
        link: "underline-offset-4 hover:underline",
      },
      defaultVariants: {
        variant: "default",
      },
    },
  }
);

const Button = ({
  className,
  variant = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) => {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      className={cn(buttonVariants({ variant, className }))}
      {...props}
    />
  );
};

export default Button;
