import { useState } from "react";
import cross from "../assets/svg/text-clean.svg";
import { getAutocomplete } from "../api/autocomplete";
import OutsideClickHandler from "react-outside-click-handler";
import getSeasonClass from "../utils/seasons";

interface InputProps {
  handleSearch: (text: string) => void;
}

export function Input({ handleSearch }: InputProps) {
  const [text, setText] = useState("");
  const [autocompleteList, setAutocompleteList] = useState<string[]>([]);

  function handleClick() {
    handleSearch(text);
    setAutocompleteList([]);
  }

  function handleKeyChange(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      handleSearch(text);
      setAutocompleteList([]);
    }
  }

  async function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setText(e.target.value);
    const autocompleteData = await getAutocomplete(text);
    const cities = autocompleteData
      .map((c) => c.city_name)
      .filter((c) => c !== undefined);
    setAutocompleteList(cities.map((c) => c.toLowerCase()));
  }

  function handleAutocompleteClick(i: string) {
    setText(i || "");
    handleSearch(i);
    setAutocompleteList([]);
  }

  const season = getSeasonClass();

  return (
    <OutsideClickHandler onOutsideClick={() => handleAutocompleteClick(text)}>
      <div className="input-container">
        <div className="input-wrapper">
          <div className="input-cleaner">
            <input
              className={`input input-${season}`}
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

          <button
            className={`button-${season}`}
            onClick={handleClick}
            disabled={!text}
          >
            Поиск
          </button>
        </div>

        {autocompleteList.length > 0 && (
          <div className="autocoplete">
            <ul className="ul">
              {autocompleteList.map((i) => {
                return (
                  <li className="li" onClick={() => handleAutocompleteClick(i)}>
                    {i}
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </OutsideClickHandler>
  );
}
