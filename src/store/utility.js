export const updateObject = (prevState, updatedProperties) => {
  return {
    ...prevState,
    ...updatedProperties,
  };
};
