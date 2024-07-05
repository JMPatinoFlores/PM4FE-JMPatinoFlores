export const getUserOrders = async (token: string) => {
  const response = await fetch("http://localhost:4000/users/orders", {
    headers: {
      "Content-Type": "application/json",
      Authorization: `${token}`,
    },
  });
  const data = await response.json();
  return data;
};
