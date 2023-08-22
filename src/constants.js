const registerInputs = [
  { id: 1, name: "name", placeholder: "Логін" },
  { id: 2, name: "email", placeholder: "Адреса електронної пошти" },
  { id: 3, name: "password", placeholder: "Пароль" },
];
const loginInputs = [
  { id: 1, name: "email", placeholder: "Адреса електронної пошти" },
  { id: 2, name: "password", placeholder: "Пароль" },
];
const loginInitialState = {
  email: "",
  password: "",
};
const registerInitialState = {
  name: "",
  email: "",
  password: "",
};

export { registerInputs, loginInputs, loginInitialState, registerInitialState };
