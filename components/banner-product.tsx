import Link from "next/link";
import { buttonVariants } from "./ui/button";

const BannerProduct = () => {
  return (
    <>
      <div className="mt-4 text-center">
        <p>Experiencia unica para developers</p>
        <h4 className="mt-2 text-5xl font-extrabold uppercase">CafeDev</h4>
        <p className="my-2 text-lg">
          Despierta tus sentidos. El mejor café para desarrolladores
        </p>
        <Link href="#" className={buttonVariants()}>
          Comprar
        </Link>
      </div>
      <div className="h-[350px] lg:h-[600px] bg-[url('/Banner-Cafe.jpg')] bg-center mt-5" />
    </>
  );
};

export default BannerProduct;
