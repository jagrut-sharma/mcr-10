import { createContext, useContext, useEffect, useState } from "react";
import { useImmerReducer } from "use-immer";
import { dataReducer, initialDataState } from "../reducer/dataReducer";
import { inventoryData } from "../utils/data";
import { ACTIONS } from "../utils/ACTIONS";

const DataContext = createContext({
  dataState: {},
  dataDispatch: () => {},
  inventory: [],
  setInventory: () => {},
});

export const DataProvider = ({ children }) => {
  const [inventory, setInventory] = useState(
    localStorage.getItem("inventory")
      ? JSON.parse(localStorage.getItem("inventory"))
      : inventoryData
  );
  const [dataState, dataDispatch] = useImmerReducer(
    dataReducer,
    initialDataState
  );

  useEffect(() => {
    dataDispatch({
      type: ACTIONS.INITIALIZE_DATA,
      payload: inventory,
    });
  }, []);

  const dataContext = {
    dataState,
    dataDispatch,
    inventory,
    setInventory,
  };

  return (
    <DataContext.Provider value={dataContext}>{children}</DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
