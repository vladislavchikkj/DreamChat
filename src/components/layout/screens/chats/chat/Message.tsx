import { IMessage } from "@/types/chat.types";
import dayjs from "dayjs";
import Image from "next/image";
import { text } from "stream/consumers";

export default function Message(message: IMessage) {
  const user = {
    email: "12",
  }; // example user

  const isSender = user?.email === message.sender.email;
  return (
    <div
      className={`flex ${isSender ? "justify-end" : "justify-start"} mb-2.5`}>
      <div
        className={`relative flex items-center ${
          isSender ? "flex-row-reverse" : ""
        }`}>
        <Image
          src={message.sender.avatar}
          alt="Avatar"
          className="rounded-full"
          width={45}
          height={45}
        />
        <div
          className={`bg-gray-200 p-2 rounded-lg ${
            isSender ? "mr-3" : "ml-3"
          }`}>
          <p className="text-xs text-gray-500 block mt-1">{message.text}</p>
          <span className=" text-xs text-gray-500 block mt-1">
            {dayjs(message.createdAt).format("HH:mm")}
          </span>
        </div>
      </div>
    </div>
  );
}
