import styles from "../styles/index.module.scss";
import MainContainer from "../components/MainContainer";

const Index = () => {
  return (
    <MainContainer keywords={"main page"} title="main page">
      <h1 className={styles.title}>Main page</h1>
    </MainContainer>
  );
};
export default Index;
