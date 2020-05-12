export function validateName(name) {
  const regex = RegExp(
    "^[A-Za-z\u{00C0}-\u{00FF}][A-Za-z\u{00C0}-\u{00FF}'-]+([ A-Za-z\u{00C0}-\u{00FF}][A-Za-z\u{00C0}-\u{00FF}'-]+)*$"
  );

  if (!name) return "Name is required";
  else if (!regex.test(name)) return "Name is in invalid format";
  else return true;
}
