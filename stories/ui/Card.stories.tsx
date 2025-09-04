import type { Meta, StoryObj } from "@storybook/react";
import {
	Card,
	CardHeader,
	CardTitle,
	CardDescription,
	CardContent,
	CardFooter,
	Button,
} from "@/@core/ui";

const meta = {
	title: "UI/Card",
	component: Card,
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
	render: () => (
		<Card className="w-[420px]">
			<CardHeader>
				<CardTitle>카드 타이틀</CardTitle>
				<CardDescription>설명 텍스트가 들어갑니다.</CardDescription>
			</CardHeader>
			<CardContent>
				<p>본문 내용입니다.</p>
			</CardContent>
			<CardFooter>
				<Button>확인</Button>
			</CardFooter>
		</Card>
	),
};
