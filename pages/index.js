import Link from "next/link";
import styles from "../styles/index.module.scss";
import A from "../components/A";
// import { NavBar, NavigationLink } from "./index.styled";

const Index = () => {
  return (
    <div>
      <nav className={styles.nav}>
        <A href={"/"} text="Main" className={styles.link} />
        <A href={"/users"} text="Users" />
      </nav>
      <h1 className={styles.title}>Main page</h1>
    </div>
  );
};
export default Index;
