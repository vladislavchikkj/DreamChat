"use client";
import { Field } from "@/components/layout/ui/field/Field";
import { ArrowRightToLine, SendHorizonalIcon } from "lucide-react";
import { useState } from "react";

interface IMessageField {
  sendMessage: (message: string) => Promise<void>;
}

export default function MessageField({ sendMessage }: IMessageField) {
  const [message, setMessage] = useState("");

  const onSubmit = () => {
    message && sendMessage(message);
  };

  return (
    <div className="border-t border-border p-layout flex items-center justify-between">
      <Field
        placeholder="Write a message..."
        Icon={ArrowRightToLine}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="w-4/5"
      />
      <button
        onClick={onSubmit}
        disabled={!message}
        className="hover:text-primary transition-colors">
        <SendHorizonalIcon />
      </button>
    </div>
  );
}
