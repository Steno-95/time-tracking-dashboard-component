function CardBody({ content, time }) {
  if (!content) return <span>{content}</span>;
  if (!time) return <span>{time}</span>;

  const { title, timeframes } = content;

  console.log(time);
  console.log(timeframes[time]);

  const occurence =
    time[0] === "d"
      ? "Yesterday"
      : time[0] === "w"
      ? "Last Week"
      : "Last Month";

  return (
    <div className="grid grid-cols-2 bg-(--card-bg) px-4 py-8 h-fit rounded-t-xl absolute w-full bottom-0 z-2 items-center justify-center hover:bg-(--hover-color) sm:py-5 sm:h-[12rem]">
      <h2 className="text-(--active-text) font-medium">{title}</h2>

      <button className="justify-self-end cursor-pointer">
        <svg
          width="21"
          height="5"
          xmlns="http://www.w3.org/2000/svg"
          className="fill-(--active-text) hover:fill-white hover:scale-110 "
        >
          <path
            d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z"
            fillRule="evenodd"
          />
        </svg>
      </button>
      <p className="text-(--active-text) font-light text-[1.5rem] sm:text-[3rem] sm:col-start-1 sm:col-end-2 ">
        {timeframes[time].current}hrs
      </p>
      <h3 className="justify-self-end text-(--active-text) text-[.9rem]! sm:col-span-2 sm:row-start-3 sm:justify-self-start w-fit">
        {occurence} - {timeframes[time].previous}hrs
      </h3>
    </div>
  );
}

export default CardBody;
