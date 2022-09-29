const phoneIsValid = (value: string): boolean => {
  const cleanValue = value.replace(/\+/g, "").replace(/ /g, "");

  return cleanValue.length > 8 && cleanValue.length < 15 && !!+cleanValue;
};
const emailIsValid = (value: string): boolean => {
  return !!value
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

export { emailIsValid, phoneIsValid };
