function Button({ children, onClick }) {
  return (
    <button
      className="text-(--white) bg-(--blue) text-[.9rem] text-center w-full py-2 rounded-md hover:bg-gradient-to-r from-rose-500 to-orange-500 hover:shadow-[0_10px_10px] hover:shadow-red-300/45 cursor-pointer mt-3 lg:text-[1.1rem] lg:py-4"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
