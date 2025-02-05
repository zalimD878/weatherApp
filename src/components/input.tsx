import { useState } from "react";

interface InputProps {
  grade: number;
  handleSearch: (text: string) => void;
}

export function Input({ grade, handleSearch }: InputProps) {
  const [text, setText] = useState("");

  function handleClick() {
    console.log(grade);

    handleSearch(text);
  }

  return (
    <div className="input-wrapper">
      <input
        className="input"
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Введите ваш город"
      />
      <button className="button" onClick={handleClick}>
        Поиск
      </button>
    </div>
  );
}
