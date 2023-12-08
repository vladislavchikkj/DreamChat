"use client";
import { Loader } from "@/components/layout/ui/loader/Loader";
import { Search } from "lucide-react";
import { Field } from "../../../ui/field/Field";
import { ChatListItem } from "./ChatListItem";

export default function ChatsList() {
  // const {data, isLoading} = useQuery({
  //   queryKey: ["chats"],
  //   queryFn: () => $fetch.get<IChat[]>('/chats', true)
  // })
  const data: any[] = [];
  const isLoading = false;
  return (
    <div>
      <div className="border-t border-b border-border p-layout">
        <Field placeholder="Search chats" Icon={Search} />
      </div>
      <div>
        {isLoading ? (
          <div className="flex p-layout">
            <Loader />
          </div>
        ) : data?.length ? (
          data.map((chat) => <ChatListItem key={chat.id} {...chat} />)
        ) : (
          <p className="p-layout">Chats not found!</p>
        )}
      </div>
      <div></div>
    </div>
  );
}
