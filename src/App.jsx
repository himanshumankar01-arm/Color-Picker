import { useState } from "react";

const COLORS = [
  { name: "Red", bg: "#e5483a", ink: "#ffffff" },
  { name: "Crimson", bg: "#a8203a", ink: "#ffffff" },
  { name: "Orange", bg: "#f08a24", ink: "#16201b" },
  { name: "Amber", bg: "#f5a623", ink: "#16201b" },
  { name: "Yellow", bg: "#f2c81a", ink: "#16201b" },
  { name: "Lime", bg: "#a6d63b", ink: "#16201b" },
  { name: "Green", bg: "#2e9e5b", ink: "#ffffff" },
  { name: "Forest", bg: "#1f5c3a", ink: "#ffffff" },
  { name: "Teal", bg: "#0f7b6c", ink: "#ffffff" },
  { name: "Cyan", bg: "#22b8cf", ink: "#16201b" },
  { name: "Sky", bg: "#4aa8e8", ink: "#16201b" },
  { name: "Blue", bg: "#2848d6", ink: "#ffffff" },
  { name: "Navy", bg: "#16245c", ink: "#ffffff" },
  { name: "Indigo", bg: "#4b3bb5", ink: "#ffffff" },
  { name: "Purple", bg: "#7b4bd8", ink: "#ffffff" },
  { name: "Magenta", bg: "#c2257f", ink: "#ffffff" },
  { name: "Pink", bg: "#ee6aa7", ink: "#16201b" },
  { name: "Brown", bg: "#7a4a2b", ink: "#ffffff" },
  { name: "Gray", bg: "#7d8790", ink: "#ffffff" },
  { name: "Black", bg: "#16201b", ink: "#ffffff" },
  { name: "White", bg: "#f6f4ee", ink: "#16201b" },
];

export default function App() {
  const [index, setIndex] = useState(6);
  const color = COLORS[index];

  // Clicking the panel moves to the next color in the list.
  const next = () => setIndex((index + 1) % COLORS.length);

  return (
    <main className="app">
      <h1>Pick a color</h1>

      <button
        className="panel"
        style={{ background: color.bg, color: color.ink }}
        onClick={next}
        aria-live="polite"
      >
        <span className="panel-name">{color.name}</span>
        <span className="panel-hex">{color.bg}</span>
        <span className="panel-hint">Click to change</span>
      </button>

      <div className="choices">
        {COLORS.map((c, i) => (
          <button
            key={c.name}
            className="choice"
            aria-pressed={i === index}
            onClick={() => setIndex(i)}
          >
            <span className="dot" style={{ background: c.bg }} />
            {c.name}
          </button>
        ))}
      </div>
    </main>
  );
}
