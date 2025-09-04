"use client";

import * as React from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { cn } from "./utils";

const buttonVariants = tv({
	base: "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/20 disabled:opacity-50 disabled:pointer-events-none gap-2",
	variants: {
		variant: {
			solid: "bg-foreground text-background hover:bg-foreground/90",
			muted: "bg-muted text-foreground hover:bg-muted/80",
			outline:
				"border border-input bg-background hover:bg-muted/50 text-foreground",
			ghost: "hover:bg-muted/60",
			link: "text-primary underline-offset-4 hover:underline",
		},
		size: {
			sm: "h-8 px-3 py-1 text-xs",
			md: "h-9 px-4 py-2",
			lg: "h-10 px-5 py-2.5 text-base",
			icon: "h-9 w-9 p-0",
		},
	},
	defaultVariants: {
		variant: "solid",
		size: "md",
	},
});

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonVariants> {}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	({ className, variant, size, ...props }, ref) => {
		return (
			<button
				ref={ref}
				className={cn(buttonVariants({ variant, size }), className)}
				{...props}
			/>
		);
	}
);
Button.displayName = "Button";

export { buttonVariants };
