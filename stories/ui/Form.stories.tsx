import type { Meta, StoryObj } from "@storybook/react";
import { Input, Textarea, Select, Label } from "@/@core/ui";

const meta = {
	title: "UI/Form",
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Inputs: Story = {
	render: () => (
		<div className="grid gap-4 w-full max-w-md">
			<div className="grid gap-2">
				<Label htmlFor="name">이름</Label>
				<Input id="name" placeholder="이름을 입력하세요" />
			</div>
			<div className="grid gap-2">
				<Label htmlFor="bio">소개</Label>
				<Textarea id="bio" placeholder="간단한 소개를 적어주세요" />
			</div>
			<div className="grid gap-2">
				<Label htmlFor="role">역할</Label>
				<Select id="role" defaultValue="writer">
					<option value="writer">Writer</option>
					<option value="editor">Editor</option>
					<option value="admin">Admin</option>
				</Select>
			</div>
		</div>
	),
};
