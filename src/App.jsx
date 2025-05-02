import { useState } from "react";
import CardActivity from "./components/Card/CardActivity";
import UserCard from "./components/userCard/UserCard";
import AppLayout from "./ui/AppLayout";
import Footer from "./ui/Footer";
import useData from "./hooks/useData";

function App() {
  const [timeDisplayed, setTimeDisplayed] = useState("weekly");

  const content = useData();

  function handleClick(value) {
    console.log(value);
    if (!value) return;
    setTimeDisplayed(value);
  }

  if (!content.length) return <span>Loading...</span>;

  return (
    <main className="min-h-screen bg-(--main-bg) relative flex items-center ">
      <AppLayout>
        <UserCard onClick={handleClick} time={timeDisplayed} />
        {content &&
          content.map((item) => (
            <CardActivity
              content={item}
              time={timeDisplayed}
              key={item.title}
            />
          ))}
      </AppLayout>
      <Footer />
    </main>
  );
}

export default App;
