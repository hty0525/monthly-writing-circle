"use client";

import * as React from "react";
import { cn } from "./utils";

interface DialogContextValue {
	open: boolean;
	setOpen: (open: boolean) => void;
}

const DialogContext = React.createContext<DialogContextValue | null>(null);

export interface DialogProps {
	children: React.ReactNode;
	open?: boolean;
	onOpenChange?: (open: boolean) => void;
}

export function Dialog({ children, open, onOpenChange }: DialogProps) {
	const [uncontrolledOpen, setUncontrolledOpen] = React.useState(false);
	const isControlled = typeof open === "boolean";
	const isOpen = isControlled ? open : uncontrolledOpen;
	const setOpen = (v: boolean) => {
		if (!isControlled) setUncontrolledOpen(v);
		onOpenChange?.(v);
	};

	return (
		<DialogContext.Provider value={{ open: isOpen, setOpen }}>
			{children}
		</DialogContext.Provider>
	);
}

export function useDialog() {
	const ctx = React.useContext(DialogContext);
	if (!ctx) throw new Error("useDialog must be used within <Dialog>");
	return ctx;
}

export function DialogTrigger({
	children,
	asChild,
}: {
	children: React.ReactElement;
	asChild?: boolean;
}) {
	const { setOpen } = useDialog();
	const child = React.Children.only(children);
	const props = {
		onClick: (e: React.MouseEvent) => {
			(child as unknown as React.DOMElement<any, any>).props.onClick?.(e);
			setOpen(true);
		},
	};
	return asChild ? (
		React.cloneElement(child, props)
	) : (
		<button {...props}>{children}</button>
	);
}

export function DialogContent({
	className,
	children,
}: React.HTMLAttributes<HTMLDivElement>) {
	const { open, setOpen } = useDialog();
	if (!open) return null;
	return (
		<div className="fixed inset-0 z-50 grid place-items-center">
			<div
				className="absolute inset-0 bg-black/50"
				onClick={() => setOpen(false)}
			/>
			<div
				role="dialog"
				aria-modal="true"
				className={cn(
					"relative z-50 w-full max-w-lg rounded-lg border bg-background p-6 shadow-lg",
					className
				)}
			>
				{children}
			</div>
		</div>
	);
}

export function DialogHeader({
	className,
	...props
}: React.HTMLAttributes<HTMLDivElement>) {
	return <div className={cn("flex flex-col gap-1", className)} {...props} />;
}

export function DialogTitle({
	className,
	...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
	return <h2 className={cn("text-lg font-semibold", className)} {...props} />;
}

export function DialogDescription({
	className,
	...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
	return (
		<p className={cn("text-sm text-muted-foreground", className)} {...props} />
	);
}

export function DialogFooter({
	className,
	...props
}: React.HTMLAttributes<HTMLDivElement>) {
	return (
		<div className={cn("mt-6 flex justify-end gap-2", className)} {...props} />
	);
}
