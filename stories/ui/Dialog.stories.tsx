"use client";
import type { Meta, StoryObj } from "@storybook/react";
import {
	Dialog,
	DialogTrigger,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogDescription,
	DialogFooter,
	Button,
} from "@/@core/ui";

const meta = {
	title: "UI/Dialog",
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Basic: Story = {
	render: () => (
		<Dialog>
			<DialogTrigger asChild>
				<Button variant="outline">모달 열기</Button>
			</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>알림</DialogTitle>
					<DialogDescription>여기에 설명이 들어갑니다.</DialogDescription>
				</DialogHeader>
				<p className="mt-2">모달 내용입니다.</p>
				<DialogFooter>
					<Button>확인</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	),
};
