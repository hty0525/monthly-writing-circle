import * as React from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { cn } from "./utils";

const badge = tv({
	base: "inline-flex items-center rounded-md border px-2 py-0.5 text-xs font-medium transition-colors",
	variants: {
		variant: {
			default: "border-transparent bg-foreground text-background",
			secondary: "border-transparent bg-muted text-foreground",
			outline: "text-foreground",
			destructive: "border-transparent bg-red-600 text-white dark:bg-red-500",
		},
	},
	defaultVariants: {
		variant: "default",
	},
});

export interface BadgeProps
	extends React.HTMLAttributes<HTMLDivElement>,
		VariantProps<typeof badge> {}

export const Badge = ({ className, variant, ...props }: BadgeProps) => {
	return <div className={cn(badge({ variant }), className)} {...props} />;
};
