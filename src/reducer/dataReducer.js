import { ACTIONS } from "../utils/ACTIONS";
import { inventoryData } from "../utils/data";

export const initialDataState = {
  inventoryData: [...inventoryData],
  filters: {},
};

export const dataReducer = (draft, action) => {
  switch (action.type) {
    case ACTIONS.INITIALIZE_DATA: {
      draft.inventoryData = action.payload;
      localStorage.setItem("inventory", JSON.stringify(action.payload));
      break;
    }

    case ACTIONS.ADD_NEW_PRODUCT: {
      draft.inventoryData.push(action.payload);
      break;
    }

    default:
      break;
  }
};
