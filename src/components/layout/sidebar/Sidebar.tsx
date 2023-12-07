"use client";
import cn from "clsx";
import { Sun } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "../../../../node_modules/next/image";
import { MENU } from "./sidebar.data";
import styles from "./Sidebar.module.scss";

export default function Sidebar() {
  const pathname = usePathname();
  return (
    <aside className={styles.sidebar}>
      <Image src="/logo.svg" priority alt="" width={45} height={45} />
      <div>
        {MENU.map((item) => (
          <Link
            href={item.url}
            key={item.url}
            className={cn({
              [styles.active]: pathname === item.url,
            })}>
            <item.icon size={27} />
          </Link>
        ))}
      </div>
      <Sun size={30} />
    </aside>
  );
}
