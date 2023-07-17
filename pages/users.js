import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "../styles/users.module.scss";
import A from "../components/A";
// import { Item, List, ItemLink } from "./users.styled";

const Users = ({ users }) => {
  return (
    <div>
      <h1>Список пользователей</h1>
      <ul className={styles.list}>
        {users.map((user) => (
          <li key={user.id}>
            <A
              href={`/users/${user.id}`}
              text={user.name}
              className={styles.link}
            />
          </li>
        ))}
      </ul>
    </div>
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
