import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
	title: "Monthly Writing Circle",
	description: "매달 글을 써 보아요. 작은 것부터 시작해서 끝은 커져봅시다?",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
