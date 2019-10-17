import { Action } from 'redux';

/* Set current time */

export const ACTION_SET_CURRENT_TIME = 'SET_CURRENT_TIME';

export interface ActionSetCurrentTime extends Action<typeof ACTION_SET_CURRENT_TIME> {
  data: {
    currentTime: number;
  };
}

export const isActionSetCurrentTime = (action: Action): action is ActionSetCurrentTime => (
  action.type === ACTION_SET_CURRENT_TIME
);

export const setCurrentTime = (currentTime: number): ActionSetCurrentTime => ({
  type: ACTION_SET_CURRENT_TIME,
  data: {
    currentTime,
  },
});

/* Set input value */

export const ACTION_SET_INPUT_VALUE = 'SET_INPUT_VALUE';

export interface ActionSetInputValue extends Action<typeof ACTION_SET_INPUT_VALUE> {
  data: {
    inputValue: string;
  };
}

export const isActionSetInputValue = (action: Action): action is ActionSetInputValue => (
  action.type === ACTION_SET_INPUT_VALUE
);

export const setInputValue = (inputValue: string): ActionSetInputValue => ({
  type: ACTION_SET_INPUT_VALUE,
  data: {
    inputValue,
  },
});

/* Set order of magnitude */

export const ACTION_SET_ORDER_OF_MAGNITUDE = 'SET_ORDER_OF_MAGNITUDE';

export interface ActionSetOrderOfMagnitude extends Action<typeof ACTION_SET_ORDER_OF_MAGNITUDE> {
  data: {
    oom: number;
  };
}

export const isActionSetOrderOfMagnitude = (action: Action): action is ActionSetOrderOfMagnitude => (
  action.type === ACTION_SET_ORDER_OF_MAGNITUDE
);

export const setOrderOfMagnitude = (oom: number): ActionSetOrderOfMagnitude => ({
  type: ACTION_SET_ORDER_OF_MAGNITUDE,
  data: {
    oom,
  },
});
