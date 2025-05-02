function CardIcon({ icon }) {
  return (
    <figure className="absolute -top-2.5 right-3 z-1">
      <img
        src={`/images/icon-${icon}.svg`}
        className="size-18 sm:size-22"
        alt={`${icon} icons`}
      />
    </figure>
  );
}

export default CardIcon;
