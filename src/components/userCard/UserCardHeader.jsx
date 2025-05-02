function UserCardHeader({ image, username }) {
  return (
    <header className="bg-(--user-color) rounded-xl flex items-center p-6 gap-4 sm:flex-col sm:items-start sm:gap-6 md:gap-10 md:pb-15">
      <figure className="size-15 rounded-full border-3 border-(--active-text) sm:size-18 md:size-20">
        <img src={`/images/image-${image}.png`} alt={`${username} photo`} />
      </figure>
      <div className="md:space-y-3">
        <h4 className="text-(--active-text) font-light sm:text-[1rem]!">
          Report for
        </h4>
        <h1 className="text-(--active-text) font-light sm:text-[2rem]! md:text-[2.5rem]! md:leading-10">
          {username}
        </h1>
      </div>
    </header>
  );
}

export default UserCardHeader;
