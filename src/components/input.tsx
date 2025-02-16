import { useState } from "react";
import cross from "../assets/svg/text-clean.svg";

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
      <div className="input-cleaner">
        <input
          className="input"
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={handleKeyChange}
          placeholder="Введите ваш город"
        />
        {text && (
          <button className="clean-button" onClick={() => setText("")}>
            <img src={cross} alt="" />
          </button>
        )}
      </div>

      <button className="button" onClick={handleClick} disabled={!text}>
        Поиск
      </button>
    </div>
  );
}
