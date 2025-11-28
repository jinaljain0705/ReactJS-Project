import { useState } from "react";
import SectionTitle from "./SectionTitle";

const fruitsData = [
  { name: "Apple", emoji: "🍎" },
  { name: "Coconut", emoji: "🥥" },
  { name: "Strawberry", emoji: "🍓" },
  { name: "Pineapple", emoji: "🍍" },
  { name: "Lemon", emoji: "🍋" },
  { name: "Tamoto", emoji: "🍅" },
];

const List = () => {
  const [search, setSearch] = useState("");

  const filtered = fruitsData.filter((f) =>
    f.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <SectionTitle title="List Filtering" />

      <div className="card">
        <h3>Fruit Market 🍉</h3>

        <input className="input" type="text" placeholder="Search fruits..." value={search} onChange={(e) => setSearch(e.target.value)} />

        <div style={{marginTop:"10px"}}>
          {filtered.map((f, i) => (
            <div key={i} style={{ padding: "5px 0" }}>
              <span>{f.emoji}</span>
              <p>{f.name}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default List;
