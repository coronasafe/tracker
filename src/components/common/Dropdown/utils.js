export function prepareOption(option, labelKey) {
  if (typeof option === "string") {
    return {
      label: option,
      value: option,
    };
  } else if ((option.label || option[labelKey]) && option.value) {
    return option;
  } else {
    return {
      label: option[labelKey],
      value: option,
    };
  }
}
