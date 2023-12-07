import { PropsWithChildren } from "react";
import styles from "./Layout.module.scss";
import Sidebar from "./layout/sidebar/Sidebar";

export default function LayoutClient({ children }: PropsWithChildren<unknown>) {
  return (
    <main className={styles.layout}>
      <Sidebar />
      <section>{children}</section>
    </main>
  );
}
