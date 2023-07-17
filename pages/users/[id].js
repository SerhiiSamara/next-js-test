import { useRouter } from "next/router";

export default function ({ user }) {
  const { query } = useRouter();
  return (
    <div>
      <h1>User with id {query.id}</h1>
      <div> Name user - {user.name}</div>
    </div>
  );
}

export async function getServerSideProps({ params }) {
  console.log("params.id:", params.id);
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.id}`
  );
  const user = await response.json();
  console.log("user:", user);
  return {
    props: { user },
  };
}
