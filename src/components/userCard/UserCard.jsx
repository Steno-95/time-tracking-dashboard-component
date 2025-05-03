import UserCardBody from "./UserCardBody";
import UserCardHeader from "./UserCardHeader";

function UserCard({ onClick, time }) {
  return (
    <article className="w-full bg-(--card-bg) rounded-xl row-span-2">
      <UserCardHeader image={"jeremy"} username={"Jeremy Robson"} />
      <UserCardBody onClick={onClick} time={time} />
    </article>
  );
}

export default UserCard;
