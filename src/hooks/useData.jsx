import { useEffect, useState } from "react";

function useData() {
  const [content, setContent] = useState([]);

  useEffect(() => {
    async function getData() {
      const res = await fetch("http://time-tracking-dashboard-f-m/data.json");
      if (!res.ok) return console.log("couldn't fetch data");
      const data = await res.json();
      setContent(data);
    }
    getData();
  }, []);

  return content;
}

export default useData;
