import RegisterUser from "@/components/RegisterForm";

function registerPage() {
  return (
    <div className="items-center">
      <h1 className="text-center text-white font-sembold text-2xl">
        ¡Únete a la comunidad y obtén grandes beneficios!
      </h1>
      <RegisterUser />
    </div>
  );
}

export default registerPage;
