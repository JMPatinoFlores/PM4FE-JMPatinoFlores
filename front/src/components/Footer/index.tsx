import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 w-full">
      <div className="container mx-auto text-center">
        <h2 className="text-xl font-bold mb-1 mt-5">Trendytreasures.com</h2>
        <div>
          <h3>Siguenos en nuestras redes sociales.</h3>
          <div className="flex justify-center space-x-4 my-2">
            <Link href={"https://www.facebook.com/jessiowe"}>
              <button>
                <Image
                  src="/facebook.png"
                  alt="FacebookIcon"
                  width={24}
                  height={24}
                />
              </button>
            </Link>
            <Link href={"https://x.com/m0ncheri_"}>
              <button>
                <Image
                  src="/twitterx.png"
                  alt="twitterIcon"
                  width={24}
                  height={24}
                />
              </button>
            </Link>
            <Link href={"https://www.tiktok.com/@jessiowe1"}>
              <button>
                <Image
                  src="/tiktok.png"
                  alt="FacebookIcon"
                  width={24}
                  height={24}
                />
              </button>
            </Link>
          </div>
          <p className="text-gray-400 text-sm mb-1">
            ©2024 | Hecho con ♥ por JessiOwe
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
