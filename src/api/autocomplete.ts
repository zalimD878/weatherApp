import axios from "axios";
import { AutocompleteType } from "../types/autocomplete";

export const getAutocomplete = async (
  query: string
): Promise<AutocompleteType[]> => {
  const { data } = await axios.get(
    "https://autocomplete.travelpayouts.com/places2",
    {
      params: {
        term: query,
        types: "city",
        locale: "ru",
      },
    }
  );

  return data;
};
