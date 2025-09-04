import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@/@core/ui";
import { Loader2, Plus, ArrowRight } from "lucide-react";

const meta = {
	title: "UI/Button",
	tags: ["autodocs"],
	component: Button,
	args: {
		children: "버튼",
	},
	argTypes: {
		variant: {
			control: { type: "select" },
			options: ["solid", "muted", "outline", "ghost", "link"],
		},
		size: {
			control: { type: "select" },
			options: ["sm", "md", "lg", "icon"],
		},
	},
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: { variant: "solid" },
};

export const Outline: Story = {
	args: { variant: "outline" },
};

export const Ghost: Story = {
	args: { variant: "ghost" },
};

export const Link: Story = {
	args: { variant: "link" },
};
