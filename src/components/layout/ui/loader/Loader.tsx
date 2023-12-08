import { Loader2 } from "lucide-react";
import styles from "./Loader.module.scss";
export function Loader() {
  return (
    <div className={styles.loader}>
      <Loader2 />
    </div>
  );
}
