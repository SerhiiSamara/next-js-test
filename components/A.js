import Link from "next/link";
import styles from "../styles/a.module.scss";

// export default function ({ text, href }) {
//   return (
//     <Link href={href} className={styles.link}>
//       {text}
//     </Link>
//   );
// }

const A = ({ text, href }) => {
  return (
    <Link href={href} className={styles.link}>
      {text}
    </Link>
  );
};

export default A;
