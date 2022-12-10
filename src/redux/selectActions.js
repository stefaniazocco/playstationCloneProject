export const CHANGESIZE = "SIZE@CHANGESIZE";

export const chooseSize = (name, option) => {
    return {
      type: CHANGESIZE,
      payload: {
          name: name,
          size: option.value,
      },
    };
  }
