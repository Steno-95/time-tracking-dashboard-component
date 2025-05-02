function AppLayout({ children }) {
  return (
    <section className="grid grid-cols-1 mx-auto gap-5 max-w-[20rem] py-10 sm:grid-cols-2 sm:max-w-[35rem] lg:grid-cols-3 lg:max-w-[48rem] xl:grid-cols-4 xl:max-w-[65rem] mb-10">
      {children}
    </section>
  );
}

export default AppLayout;
