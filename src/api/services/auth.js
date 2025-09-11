import api from "../api";

// Register user
export const registerUser = async (formData) => {
  console.log(formData);
  const { data } = await api.post("/auth/register", formData);
  return data;
};

// Login user
export const loginUser = async (formData) => {
  const { data } = await api.post("/auth/login", formData);
  return data;
};

// Get profile (if needed)
export const getProfile = async () => {
  const { data } = await api.get("/auth/profile");
  return data;
};
