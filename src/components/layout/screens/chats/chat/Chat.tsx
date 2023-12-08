import MessageField from "./MessageField";

export default function Chat({ id }: { id: string }) {
  // const data = {
  //   messages: [{ id: "string", text: "string", createdAt: "string" }],
  // };
  return (
    <div className="w-8/12 border-r border-border h-full">
      {/* {data?.messages.map((message) => (
        <Message key={message.id} message={message} />
      ))} */}
      {/* @ts-ignore */}
      <MessageField />
    </div>
  );
}
