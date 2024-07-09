import LoginUser from "@/components/LoginForm/page";

function loginPage() {
  return (
    <div className="items-center">
      <h1 className="text-white text-2xl text-center font-semibold">
        ¡Nos alegra que estés aquí!
      </h1>
      <LoginUser />;
    </div>
  );
}

export default loginPage;
