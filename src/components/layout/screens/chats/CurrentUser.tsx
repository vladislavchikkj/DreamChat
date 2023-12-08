import Image from "next/image";

export default function CurrentUser() {
  return (
    <div className="p-layout flex items-center">
      <Image
        src={"/no-avatar.png"}
        alt={""}
        width={45}
        height={45}
        className="mr-4"
      />
      <div className="text-sm">
        <div>Lee</div>
        <div className="opacity-30">Admin</div>
      </div>
    </div>
  );
}
