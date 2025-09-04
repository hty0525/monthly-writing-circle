"use client";
import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, Button } from "@/@core/ui";

const meta = {
  title: "UI/Dialog (Controlled)",
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Controlled: Story = {
  render: () => {
    const [open, setOpen] = React.useState(false);
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <div className="flex gap-2">
          <Button onClick={() => setOpen(true)}>외부에서 열기</Button>
          <DialogTrigger asChild>
            <Button variant="outline">트리거로 열기</Button>
          </DialogTrigger>
        </div>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>컨트롤드 모달</DialogTitle>
            <DialogDescription>외부 상태로 열고 닫습니다.</DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button onClick={() => setOpen(false)}>닫기</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    );
  },
};


