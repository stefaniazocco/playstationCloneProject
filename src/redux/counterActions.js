export const INCREMENT = "COUNTER@INCREMENT";
export const DECREMENT = "COUNTER@DECREMENT";
export const MODIFY = "COUNTER@MODIFY";

export const counterIncrement = (name) => {
    return {
      type: INCREMENT,
      payload: {
          name: name,
          quantity: 1,
      },
    };
}

export const counterDecrement = (name) => {
    return {
      type: DECREMENT,
      payload: {
          name: name,
          quantity: 1,
      },
    };
}

export const counterModify = (name, e) => {
    return {
      type: MODIFY,
      payload: {
          name: name,
          quantity: e.target.value,
      },
    };
}

