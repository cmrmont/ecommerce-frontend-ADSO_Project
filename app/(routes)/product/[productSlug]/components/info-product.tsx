import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useCart } from "@/hooks/use-cart";
import { useLovedProducts } from "@/hooks/use-loved-products";

import { formatPrice } from "@/lib/formatPrice";

import { Heart } from "lucide-react";

const InfoProduct = (props: any) => {
  const { product } = props;
  const { addItem } = useCart();
  const { addLovedItem } = useLovedProducts();
  console.log(addItem);
  return (
    <div className="px-6">
      <div className="justify-between mb-3 sm:flex">
        <h1 className="text-2xl font-bold">{product.productName}</h1>
      </div>
      <Separator className="my-4" />
      <p>{product.description.substring(0, 500)}...</p>
      <Separator className="my-4" />
      <p className="my-4 text-2xl">{formatPrice(product.price)}</p>
      <div className="flex items-center gap-5">
        <Button className="w-full " onClick={() => addItem(product)}>
          Comprar{" "}
        </Button>
        <Heart
          width={30}
          strokeWidth={1}
          className="transition duration-300 cursor-pointer hover:fill-black"
          onClick={() => addLovedItem(product)}
        />
      </div>
    </div>
  );
};

export default InfoProduct;
