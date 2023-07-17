import styles from "../styles/users.module.scss";
import MainContainer from "../components/MainContainer";
import A from "../components/A";

const Users = ({ users }) => {
  return (
    <MainContainer keywords={"users list"} title="Users list">
      <h1 className={styles.title}>Users list</h1>
      <ul className={styles.list}>
        {users.map((user) => (
          <li key={user.id}>
            <A
              href={`/users/${user.id}`}
              text={user.name}
              className={styles.linkColor}
            />
          </li>
        ))}
      </ul>
    </MainContainer>
  );
};

export default Users;

export async function getStaticProps() {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const users = await response.json();
  return {
    props: { users },
  };
}
