export function prepareOption(option, labelKey) {
  if (typeof option === "string") {
    return {
      label: option,
      value: option,
    };
  } else {
    return {
      label: option[labelKey],
      value: option,
    };
  }
}
