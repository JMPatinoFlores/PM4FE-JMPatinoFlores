export const getUserOrders = async (token: string) => {
  const response = await fetch(
    "https://pm4fe-jmpatinoflores.onrender.com/users/orders",
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `${token}`,
      },
    }
  );
  const data = await response.json();
  return data;
};
