import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

const CarouselProduct = (props: any) => {
  const { images } = props;

  return (
    <div className="sm:px-16 px-20">
      <Carousel>
        <CarouselContent>
          {images.map((image: any, index: number) => (
            <CarouselItem key={index}>
              <img
                src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/${image.url}`}
                alt={image.alt}
                className="rounded-lg"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default CarouselProduct;
