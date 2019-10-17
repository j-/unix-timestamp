import { Reducer } from 'redux';
import { getClosestOOM } from '../closest-oom';
import { isActionSetCurrentTime, isActionSetInputValue, isActionSetOrderOfMagnitude } from './actions';

export interface RootReducerState {
  currentTime: number;
  inputValue: string;
  inputNumber: number;
  outputNumber: number;
  isValid: boolean;
  oom: number;
}

export const DEFAULT_STATE: RootReducerState = {
  currentTime: 0,
  inputValue: '',
  inputNumber: 0,
  outputNumber: 0,
  isValid: false,
  oom: 0,
};

const MAX_DATE_TIME = 8640000000000000;
const MIN_DATE_TIME = -8640000000000000;

const isInputValueValid = (inputValue: string) => (
  inputValue !== '' && isInputNumberValid(Number(inputValue))
);

const isInputNumberValid = (inputNumber: number) => (
  !isNaN(inputNumber)
);

const isOutputNumberValid = (outputNumber: number) => (
  outputNumber >= MIN_DATE_TIME && outputNumber <= MAX_DATE_TIME
);

const reducer: Reducer<RootReducerState> = (state = DEFAULT_STATE, action) => {
  if (isActionSetCurrentTime(action) || isActionSetInputValue(action)) {
    let { currentTime, inputValue } = state;
    
    if (isActionSetCurrentTime(action)) {
      currentTime = action.data.currentTime;
      inputValue = String(currentTime);
    } else if (isActionSetInputValue(action)) {
      inputValue = action.data.inputValue;
    }

    if (!isInputValueValid(inputValue)) {
      return {
        ...state,
        currentTime,
        inputValue,
        isValid: false,
      };
    };

    const inputNumber = Number(inputValue);

    if (inputNumber === 0) {
      return {
        ...state,
        currentTime,
        inputValue,
        inputNumber,
        isValid: true,
        outputNumber: 0,
        oom: 0,
      };
    }

    let oom = getClosestOOM(inputNumber, currentTime);
    if (oom === Infinity || oom === -Infinity) {
      oom = 0;
    }
    
    const outputNumber = inputNumber * Math.pow(10, oom);

    if (!isOutputNumberValid(outputNumber)) {
      return {
        ...state,
        currentTime,
        inputValue,
        isValid: false,
      };
    }

    return {
      ...state,
      currentTime,
      inputValue,
      inputNumber,
      isValid: true,
      outputNumber,
      oom,
    };
  }

  if (isActionSetOrderOfMagnitude(action)) {
    const { oom } = action.data;
    const outputNumber = state.inputNumber * Math.pow(10, action.data.oom);
    
    if (!isOutputNumberValid(outputNumber)) {
      return {
        ...state,
        oom,
        isValid: false,
      };
    }

    return {
      ...state,
      outputNumber,
      oom,
      isValid: isInputValueValid(state.inputValue)
    };
  }
  
  return state;
};

export default reducer;

export const getCurrentTime = (state: RootReducerState) => state.currentTime;
export const getInputValue = (state: RootReducerState) => state.inputValue;
export const getOutputTime = (state: RootReducerState) => new Date(state.outputNumber);
export const isInputValid = (state: RootReducerState) => state.isValid;
export const getOrderOfMagnitude = (state: RootReducerState) => state.oom;
