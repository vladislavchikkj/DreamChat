import { IChat } from "@/types/chat.types";
import Image from "next/image";

export function ChatListItem({ participants, messages }: IChat) {
  // const { user } = useAuth();
  const user = {
    email: "123",
  };
  const correspondent = participants.find((u) => u.email !== user?.email);
  const lastMessage = messages.at(-1);
  return (
    <div className="p-layout flex items-center">
      <Image
        src={correspondent?.avatar || "/no-avatar.png"}
        alt={correspondent?.email || ""}
        width={40}
        height={40}
        className="mr-4"
      />
      <div className="text-sm">
        <div>
          <span>{correspondent?.name && "guest"}</span>
          <span>08.12.23</span>
        </div>
        <div className="opacity-30">{lastMessage?.text && ""}</div>
      </div>
    </div>
  );
}
