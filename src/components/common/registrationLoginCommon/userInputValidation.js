import formatToBasicDate from "../../../utils/dateFormatter";

function validateName(name) {
  const regex = RegExp(
    "^[A-Za-z\u{00C0}-\u{00FF}][A-Za-z\u{00C0}-\u{00FF}'-]+([ A-Za-z\u{00C0}-\u{00FF}][A-Za-z\u{00C0}-\u{00FF}'-]+)*$"
  );

  if (!name) return "Name is required";
  else if (!regex.test(name)) return "Name is in invalid format";
  else return true;
}

function validateEmail(email) {
  // eslint-disable-next-line no-useless-escape
  const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (!email) return "Email address is required";
  else if (!regex.test(email)) return "Email address is in invalid format";
  else return true;
}

function validatePassword(password) {
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  if (!password) return "Password is required";
  else if (!regex.test(password)) return "Password is in invalid format";
  else return true;
}

function confirmPassword(password, confirmedPassword) {
  if (!confirmedPassword) return "Please confirm your password";
  else if (password !== confirmedPassword)
    return "The two passwords are not matching";
  return true;
}

function validateBirthDate(birthDate) {
  const regex = /^\d{4}\.\d{2}\.\d{2}$/;

  if (!birthDate) return "Birth date is required";

  let formattedDate = formatToBasicDate(birthDate);

  if (!regex.test(formattedDate)) return "";

  if (
    new Date(new Date().setFullYear(new Date().getFullYear() - 14)) < birthDate
  )
    return "You have to be 14 years old at least";
  else return true;
}

function validateCountry(country, countries) {
  if (!country) return "Home country is required";
  else if (!countries.map(country => country.name).includes(country))
    return `There is no country such as ${country}`;
  else return true;
}

function validateGenres(genres) {
  if (!genres || genres.length === 0)
    return "Favorite music genres are required";
  else return true;
}

export function registrationFormIsValid(user, countries, setErrors) {
  const {
    firstName,
    lastName,
    email,
    password,
    confirmedPassword,
    birthDate,
    country,
    genres
  } = user;
  const errors = {};

  const firstNameIsValid = validateName(firstName);
  const lastNameIsValid = validateName(lastName);
  const emailIsValid = validateEmail(email);
  const passwordIsValid = validatePassword(password);
  const passwordIsConfirmed = confirmPassword(password, confirmedPassword);
  const birthDateIsValid = validateBirthDate(birthDate);
  const countryIsValid = validateCountry(country, countries);
  const genresAreValid = validateGenres(genres);

  if (firstNameIsValid !== true) errors.firstName = firstNameIsValid;
  if (lastNameIsValid !== true) errors.lastName = lastNameIsValid;
  if (emailIsValid !== true) errors.email = emailIsValid;
  if (passwordIsValid !== true) errors.password = passwordIsValid;
  if (passwordIsConfirmed !== true)
    errors.confirmedPassword = passwordIsConfirmed;
  if (birthDateIsValid !== true) errors.birthDate = birthDateIsValid;
  if (countryIsValid !== true) errors.country = countryIsValid;
  if (genresAreValid !== true) errors.genres = genresAreValid;

  setErrors(errors);

  return Object.keys(errors).length === 0;
}

export function loginFormIsValid(user, setErrors) {
  const { email, password } = user;
  const errors = {};

  const emailIsValid = validateEmail(email);
  const passwordIsValid = validatePassword(password);

  if (emailIsValid !== true) errors.email = emailIsValid;
  if (passwordIsValid !== true) errors.password = passwordIsValid;

  setErrors(errors);

  return Object.keys(errors).length === 0;
}
