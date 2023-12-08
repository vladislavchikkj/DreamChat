import Chat from "@/components/layout/screens/chats/chat/Chat";
import { NO_INDEX_PAGE } from "@/constants/seo.constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  ...NO_INDEX_PAGE,
};

export default function ChatPage({ params }: { params: { id: string } }) {
  return <Chat id={id} />;
}
