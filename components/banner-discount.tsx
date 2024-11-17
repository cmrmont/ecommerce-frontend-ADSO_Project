import Link from "next/link";
import { buttonVariants } from "./ui/button";

const BannerDiscount = () => {
  return (
    <div className="text-center">
      <h2 className="uppercese font-black text-2xl text-primary">
        Consigue hasta un 25%
      </h2>
      <h3 className="mt-3 font-semibold">
        -20% al gastar 10.000COP o -25% al gastar 20.000COP. Usa el código de
        CAFEDEV
      </h3>
      <div className="max-w-md mx-auto sm:flex justify-center gap-8 mt-5">
        <Link href="#" className={buttonVariants()}>
          Comprar
        </Link>
        <Link href="#" className={buttonVariants({ variant: "outline" })}>
          Mas información
        </Link>
      </div>
    </div>
  );
};

export default BannerDiscount;
