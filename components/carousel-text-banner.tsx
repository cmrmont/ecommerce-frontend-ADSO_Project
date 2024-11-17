import { useRouter } from "next/navigation";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import { Card, CardContent } from "./ui/card";
import Autoplay from "embla-carousel-autoplay";

export const dataCarousel = [
  {
    id: 1,
    title: "Envío en 24/48 h",
    description:
      "Como cliente VIP, tus envios en 24/48 horas. Obtén más información y únete",
    link: "#!",
  },
  {
    id: 2,
    title: "Consigue hasta un -25% en compras superiores a 20.000COP",
    description:
      "−20 % al gastar 10.000 COP o −25 % al gastar 20.000 COP. Usa el código CAFEDEV.",
    link: "#",
  },
  {
    id: 3,
    title: "Devoluciones y entregas gratuitas",
    description:
      "Como cliente, tienes envíos y devoluciones gratis en un plazo de 30 días en todos los pedidos. Obtén más información y únete",
    link: "#",
  },
  {
    id: 4,
    title: "Comprar novedades",
    description: "Todas las novedades al 50% de descuento",
    link: "#",
  },
];

const CarouselTextBanner = () => {
  const router = useRouter();
  return (
    <div className="bg-gray-100 dark:bg-primary">
      <Carousel
        className=""
        plugins={[
          Autoplay({
            delay: 2500,
          }),
        ]}
      >
        <CarouselContent>
          {dataCarousel.map(({ id, title, link, description }) => (
            <CarouselItem
              key={id}
              onClick={() => router.push(link)}
              className="cursor-pointer"
            >
              <div>
                <Card className="shadow-none border-none bg-transparent">
                  <CardContent className="flex flex-col justify-center p-2 items-center text-center">
                    <p className="sm:text-lg text-wrap dark:text-secondary">
                      {title}
                    </p>
                    <p className="sm:text-xs text-wrap dark:text-secondary">
                      {description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default CarouselTextBanner;
