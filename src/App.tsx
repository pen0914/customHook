import "./styles.css";
import { UserCard } from "./components/UserCard";
import { useAllUsers } from "./hooks/useAllUsers";

export default function App() {
  const { getUsers, userProfiles, loading, error } = useAllUsers();
  const onClickData = () => getUsers();

  return (
    <div className="App">
      <button onClick={onClickData}>データ取得</button>
      <br />
      {error ? (
        <p style={{ color: "red" }}>データ取得に失敗しました。</p>
      ) : loading ? (
        <p>Loading...</p>
      ) : (
        <>
          {userProfiles.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </>
      )}
    </div>
  );
}
