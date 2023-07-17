import Head from "next/head";
import styles from "../styles/MainContainer.module.scss";
import A from "./A";

const MainContainer = ({ children, keywords, title }) => {
  return (
    <>
      <Head>
        <meta keywords={"samara, next.js" + keywords}></meta>
        <title>{title}</title>
      </Head>
      <nav className={styles.nav}>
        <A href={"/"} text="Main" className={styles.link} />
        <A href={"/users"} text="Users" />
      </nav>
      <div>{children}</div>
    </>
  );
};

export default MainContainer;
