export function validateName(name) {
  const regex = RegExp(
    "^[A-Za-z\u{00C0}-\u{00FF}][A-Za-z\u{00C0}-\u{00FF}'-]+([ A-Za-z\u{00C0}-\u{00FF}][A-Za-z\u{00C0}-\u{00FF}'-]+)*$"
  );

  if (!name) return "Name is required";
  else if (!regex.test(name)) return "Name is in invalid format";
  else return true;
}

export function validateEmail(email) {
  // eslint-disable-next-line no-useless-escape
  const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (!email) return "Email address is required";
  else if (!regex.test(email)) return "Email address is in invalid format";
  else return true;
}

export function validatePassword(password) {
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  if (!password) return "Password is required";
  else if (!regex.test(password)) return "Password is in invalid format";
  else return true;
}

export function confirmPassword(password, confirmedPassword) {
  if (!confirmedPassword) return "Please confirm your password";
  else if (password !== confirmedPassword)
    return "The two passwords are not matching";
  return true;
}

export function validateBirthDate(birthDate) {
  if (!birthDate) return "Birth date is required";
  else if (
    new Date(new Date().setFullYear(new Date().getFullYear() - 14)) < birthDate
  )
    return "You have to be 14 years old at least";
  else return true;
}

export function validateCountry(country, countries) {
  if (!country) return "Home country is required";
  else if (!countries.map(country => country.name).includes(country))
    return `There is no country such as ${country}`;
  else return true;
}
