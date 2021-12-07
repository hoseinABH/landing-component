import { ACTION_TYPE } from '../types';

const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case ACTION_TYPE.INC:
      return (state += action.payload ?? 1);
    case ACTION_TYPE.DEC:
      return (state -= action.payload ?? 1);
    default:
      return state;
  }
};

export default counterReducer;
