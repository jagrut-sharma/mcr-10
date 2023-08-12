import { ACTIONS } from "../utils/ACTIONS";
import { initialFilterVal } from "../utils/constants";
import { inventoryData } from "../utils/data";

export const initialDataState = {
  inventoryData: [...inventoryData],
  filtersVal: { ...initialFilterVal },
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

    case ACTIONS.APPLY_FILTER: {
      draft.filtersVal[action.payload.category] = action.payload.value;
      break;
    }

    default:
      break;
  }
};
