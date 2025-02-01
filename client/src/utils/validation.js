export const isValidData = (form) => {
  const { username, email, password,contact } = form;
  const error = {};
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const usernameRegex = /^[a-zA-Z0-9]{5,16}$/;
  if (!emailRegex?.test(email)) {
    error["email"] = "Please enter a valid email";
  }
  if (password.length < 8) {
    error["password"] = "Password must be atleat 8 character";
  }
  if(contact?.length<10){
    error["contact"] = "Mobile Number must be atleast 10 digit"
  }
  if (!usernameRegex.test(username)) {
    error["username"] =
      "Username must be between 6 and 16 characters and can only contain letters, numbers, and underscores.";
  }
  return Object.values(error).length > 0 ? error : null;
};
