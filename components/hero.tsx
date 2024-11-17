import { Coffee, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="flex flex-col max-w-3xl mx-auto mb-12 gap-12 px-8">
      <article className="flex flex-col items-center justify-center gap-10 md:flex-row">
        <div className="text-lg text-pretty order-2 md:order-1 leading-normal">
          <p>
            Bienvenidos 👋 Disfruta el mejor{" "}
            <strong className="bg-coffe text-white px-1 py-0.5">Café</strong>
            diseñado para potenciar tu productividad.
            <strong className="bg-coffe text-white px-1 py-0.5">
              Café para Developers
            </strong>{" "}
            Sabemos lo que necesitas para mantenerte enfocado durante largas
            horas de código: un café de alta calidad, con un sabor inigualable y
            la dosis perfecta de energía.
          </p>
          <section className="flex gap-4 flex-row flex-wrap my-4">
            <div className="flex gap-4 items-center">
              <Link
                href="/cart"
                className="inline-flex items-center justify-center px-2 py-1 text-xs font-semibold text-center text-black bg-white transition border border-[#7bbcea] rounded-lg md:px-4 md:py-2 gap-2 hover:bg-[#d1ecff] md:text-sm"
              >
                <ShoppingCart color="#7bbcea" />
                Tienda
              </Link>
              <Link
                href="/cart"
                className="inline-flex items-center justify-center px-2 py-1 text-xs font-semibold text-center text-black bg-white transition border border-[#85776e] rounded-lg md:px-4 md:py-2 gap-2 hover:bg-[#d8ccc4] md:text-sm"
              >
                <Coffee color="#85776e" />
                Cafés
              </Link>
            </div>
          </section>
        </div>
        <Image
          width={200}
          height={200}
          src="/coffi.jpg"
          alt="Coffe Developers"
          className="order-1 object-cover w-52 h-full p-1 bg-coffe md:order-2 rotate-3 lg:p-2 aspect-square rounded-2xl dark:bg-coffe/70 object-center"
        />
      </article>
    </section>
  );
};

export default Hero;
