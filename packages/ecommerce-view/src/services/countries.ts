type Countries = {
  name: {
    common: string;
  };
  currencies: {
    [key: string]: {
      name: string;
      symbol: string;
    };
  };
  region: string;
  language: {
    [key: string]: string;
  };
};

export async function fetchCountries() {
  const response = await fetch(`${import.meta.env.VITE_COUNTRIES_API}region/america`);
  if (!response.ok) throw new Error("Error when fetching countries: " + response.statusText);
  const data = (await response.json()) as Countries[];
  return data.map((item) => item.name.common);
}
