const COUNTRY_SUBSCRIBER_LENGTHS = {
  ae: [8, 9],
  in: [10],
};

export const getSubscriberPhoneDigits = (phone = "", country = {}) => {
  const digits = String(phone).replace(/\D/g, "");
  const dialCode = String(country?.dialCode || "").replace(/\D/g, "");

  if (!digits) return "";

  return dialCode && digits.startsWith(dialCode)
    ? digits.slice(dialCode.length)
    : digits;
};

export const getExpectedSubscriberLength = (country = {}) => {
  const dialCodeLength = String(country?.dialCode || "").replace(/\D/g, "")
    .length;
  const formatDigitCount = String(country?.format || "").split(".").length - 1;
  const expectedLength = formatDigitCount - dialCodeLength;

  return expectedLength > 0 ? expectedLength : null;
};

export const validatePhoneByCountry = (phone = "", country = {}) => {
  const subscriberDigits = getSubscriberPhoneDigits(phone, country);
  const countryLengths = COUNTRY_SUBSCRIBER_LENGTHS[country?.countryCode];
  const expectedLength = getExpectedSubscriberLength(country);

  if (!subscriberDigits) {
    return "Phone Number is required";
  }

  if (countryLengths && !countryLengths.includes(subscriberDigits.length)) {
    const lengthLabel =
      countryLengths.length === 1
        ? countryLengths[0]
        : countryLengths.join(" or ");

    return `Enter valid phone number`;
  }

  if (countryLengths) {
    return "";
  }

  if (expectedLength && subscriberDigits.length !== expectedLength) {
    return `Enter valid phone number`;
  }

  if (!expectedLength && subscriberDigits.length < 6) {
    return "Enter valid phone number";
  }

  return "";
};
