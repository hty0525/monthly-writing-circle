import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "@/@core/ui";

const meta = {
	title: "UI/Badge",
	parameters: {
		// Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
		layout: "centered",
	},
	tags: ["autodocs"],
	component: Badge,
} satisfies Meta<typeof Badge>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		variant: "default",
		children: "default",
	},
};

export const Secondary: Story = {
	args: {
		variant: "secondary",
		children: "secondary",
	},
};

export const Outline: Story = {
	args: {
		variant: "outline",
		children: "outline",
	},
};
