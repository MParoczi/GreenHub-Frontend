export function validateFirstName(name) {
  const regex = RegExp(
    "^[A-Za-z\u{00C0}-\u{00FF}][A-Za-z\u{00C0}-\u{00FF}'-]+([ A-Za-z\u{00C0}-\u{00FF}][A-Za-z\u{00C0}-\u{00FF}'-]+)*$"
  );

  if (!name) return "First name is required";
  else if (!regex.test(name)) return "First name is in invalid format";
  else return true;
}
