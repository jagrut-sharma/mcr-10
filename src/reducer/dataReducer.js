import { ACTIONS } from "../utils/ACTIONS";
import { inventoryData } from "../utils/data";

export const initialDataState = {
  inventoryData: [...inventoryData],
};

export const dataReducer = (draft, action) => {
  switch (action.type) {
    case ACTIONS.TEST:
      break;

    default:
      break;
  }
};
