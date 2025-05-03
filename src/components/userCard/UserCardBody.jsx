import Button from "../../ui/Button";

function UserCardBody({ onClick, time }) {
  const style = "text-(--active-text)";
  const daily = time === "daily" ? style : "";
  const weekly = time === "weekly" ? style : "";
  const monthly = time === "monthly" ? style : "";
  return (
    <ul className="text-[1.1rem] text-(--outfocus-color) flex justify-between py-4 px-8 sm:flex-col">
      <Button
        content={"daily"}
        onClick={(e) => onClick(e.target.innerHTML)}
        style={daily}
      />
      <Button
        content={"weekly"}
        onClick={(e) => onClick(e.target.innerHTML)}
        style={weekly}
      />
      <Button
        content={"monthly"}
        onClick={(e) => onClick(e.target.innerHTML)}
        style={monthly}
      />
    </ul>
  );
}

export default UserCardBody;
