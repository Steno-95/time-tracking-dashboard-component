function UserCardBody({ onClick, time }) {
  const style = "text-(--active-text)";
  const daily = time === "daily" ? style : "";
  const weekly = time === "weekly" ? style : "";
  const monthly = time === "monthly" ? style : "";
  return (
    <div className="text-[1.1rem] text-(--outfocus-color) flex justify-between py-4 px-8 cursor-pointer sm:flex-col">
      <p
        className={daily + " capitalize p-2"}
        onClick={(e) => onClick(e.target.innerHTML)}
      >
        daily
      </p>
      <p
        className={weekly + " capitalize p-2"}
        onClick={(e) => onClick(e.target.innerHTML)}
      >
        weekly
      </p>
      <p
        className={monthly + " capitalize p-2"}
        onClick={(e) => onClick(e.target.innerHTML)}
      >
        monthly
      </p>
    </div>
  );
}

export default UserCardBody;
