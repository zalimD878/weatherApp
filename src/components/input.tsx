import { useState } from "react";
import cross from "../assets/svg/text-clean.svg";
import { getAutocomplete } from "../api/autocomplete";
import { AutocompleteType } from "../types/autocomplete";

interface InputProps {
  handleSearch: (text: string) => void;
}

export function Input({ handleSearch }: InputProps) {
  const [text, setText] = useState("");
  const [autocompleteList, setAutocompleteList] = useState<AutocompleteType[]>(
    []
  );

  function handleClick() {
    handleSearch(text);
  }

  function handleKeyChange(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") handleSearch(text);
  }

  async function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setText(e.target.value);
    const autocompleteData = await getAutocomplete(text);
    setAutocompleteList(autocompleteData);
  }

  return (
    <div>
      <div className="input-wrapper">
        <div className="input-cleaner">
          <input
            className="input"
            type="text"
            value={text}
            onChange={handleChange}
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

      <div>
        <ul>
          {autocompleteList.map((i) => {
            return <li>{i.city_name}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}
