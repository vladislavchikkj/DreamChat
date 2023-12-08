import Chat from "@/components/layout/screens/chats/chat/Chat";
import ChatsList from "@/components/layout/screens/chats/list/ChatsList";
import CurrentUser from "@/components/layout/screens/chats/CurrentUser";

export default function ChatsPage() {
  return (
    <div
      className="grid h-full"
      style={{
        gridTemplateColumns: ".7fr 3fr",
      }}>
      <div className="border-r border-border">
        <CurrentUser />
        <ChatsList />
      </div>
      <div>
        <Chat />
      </div>
    </div>
  );
}
