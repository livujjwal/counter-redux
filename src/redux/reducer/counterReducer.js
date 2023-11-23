import { DECREMENT, INCREMENT, RESET } from "../action/actionsTypes";

const initialValue = 0;

const counterReducer = (state = initialValue, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    case RESET:
      return initialValue;
    default:
      return state;
  }
};

export default counterReducer;
