import { createContext, useContext, useState } from "react";

const CurrencyContext = createContext();

export const useCurrency = () => useContext(CurrencyContext);

export const CurrencyProvider = ({ children }) => {
  const [currency, setCurrency] = useState("CAD");
  const rates = {
    CAD: 1,
    USD: 0.75, // Example rate
    EUR: 0.68  // Example rate
  };

  const convert = (amount) => (amount * rates[currency]).toFixed(2);

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency, convert }}>
      {children}
    </CurrencyContext.Provider>
  );
};
