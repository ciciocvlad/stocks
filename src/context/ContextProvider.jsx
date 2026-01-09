import { useState, useMemo } from "react";
import { FilterContext } from "./FilterContext";

export const ContextProvider = ({ children }) => {
  const [showFilters, setShowFilters] = useState(false);
  const filtersValue = useMemo(
    () => ({ showFilters, setShowFilters }),
    [showFilters],
  );

  return (
    <FilterContext.Provider value={filtersValue}>
      {children}
    </FilterContext.Provider>
  );
};
