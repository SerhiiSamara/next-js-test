import { useRouter } from "next/router";
import styles from "../../styles/[id].module.scss";

export default function ({ user }) {
  const { query } = useRouter();
  return (
    <div className={styles.wrapp}>
      <h1>User with id {query.id}</h1>
      <div> Name user - {user.name}</div>
    </div>
  );
}

export async function getServerSideProps({ params }) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.id}`
  );
  const user = await response.json();
  return {
    props: { user },
  };
}
