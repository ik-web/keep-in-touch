export const getPlaceholderText = (
  isEmptyField,
  fetchError,
  defaultPlaceholder
) => {
  if (isEmptyField) {
    return `Enter your ${defaultPlaceholder}`;
  }

  if (fetchError) {
    return "Incorrect data";
  }

  const placeholder =
    defaultPlaceholder.charAt(0).toUpperCase() + defaultPlaceholder.slice(1);

  return placeholder;
};
