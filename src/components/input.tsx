import { useState } from "react";

interface InputProps {
  handleSearch: (text: string) => void;
}

export function Input({ handleSearch }: InputProps) {
  const [text, setText] = useState("");

  function handleClick() {
    handleSearch(text);
  }

  function handleKeyChange(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") handleSearch(text);
  }

  return (
    <div className="input-wrapper">
      <input
        className="input"
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={handleKeyChange}
        placeholder="Введите ваш город"
      />
      <button className="button" onClick={handleClick}>
        Поиск
      </button>
    </div>
  );
}
