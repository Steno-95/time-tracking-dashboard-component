import CardBody from "./CardBody";
import CardIcon from "./CardIcon";

function CardActivity({ content, time }) {
  const icon = content.title.toLowerCase().trim().replace(" ", "-");

  const style = { background: `var(--${icon}-color)` };

  return (
    <article
      className="relative min-h-[10rem] overflow-hidden rounded-xl sm:min-h-[15rem] "
      style={style}
    >
      <CardIcon icon={icon} />
      <CardBody content={content} time={time} />
    </article>
  );
}

export default CardActivity;
