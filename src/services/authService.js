const SCRIPT_URL = "YOUR_GOOGLE_SCRIPT_DEPLOYED_URL";

export const signupUser = async (payload) => {
  const formData = new FormData();
  formData.append("action", "signup");
  formData.append("name", payload.name);
  formData.append("email", payload.email);
  formData.append("hashedPassword", payload.hashedPassword);
  return fetch(SCRIPT_URL, { method: "POST", body: formData });
};

export const loginUser = async (email) => {
  const formData = new FormData();
  formData.append("action", "login");
  formData.append("email", email);
  return fetch(SCRIPT_URL, { method: "POST", body: formData });
};

export const updatePassword = async (payload) => {
  const formData = new FormData();
  formData.append("action", "forgot");
  formData.append("email", payload.email);
  formData.append("newHashedPassword", payload.newHashedPassword);
  return fetch(SCRIPT_URL, { method: "POST", body: formData });
};
