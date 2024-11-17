"use client";

import { useGetCategoryProduct } from "@/api/getCategoryProduct";
import { Separator } from "@/components/ui/separator";
import { ResponseType } from "@/types/response";
import { useParams } from "next/navigation";
import FiltersControlsCategory from "./components/filters-control-category";
import { useState } from "react";
import SkeletonSchema from "@/components/skeletonSchema";
import ProductCard from "./components/product-card";

export default function page() {
  const params = useParams();
  const { categorySlug } = params;

  const { result, loading }: ResponseType = useGetCategoryProduct(categorySlug);
  const [filterOrigin, setFilterOrigin] = useState("");

  const filteredProducts =
    result !== null &&
    !loading &&
    (filterOrigin === ""
      ? result
      : result.filter((product: any) => product.origin === filterOrigin));

  return (
    <div className="max-w-7xl py-4 mx-auto sm:py-16 sm:px-24">
      {result !== null && !loading && result.length !== 0 && (
        <h1 className="text-3xl font-medium">Café {categorySlug}</h1>
      )}
      <Separator />

      <div className="sm:flex sm:justify-between">
        <FiltersControlsCategory setFilterOrigin={setFilterOrigin} />
        <div className="grid gap-5 mt-8 sm:grid-cols-2 md:grid-cols-3 md:gap-10">
          {/* vamos a hacer un loading con nuestro skeleton */}
          {loading && <SkeletonSchema grid={3} />}
          {/* Cuando esto sea difernete vamos a cargar nuestro product card */}

          {filteredProducts !== null &&
            !loading &&
            filteredProducts.map((product: any) => (
              <ProductCard key={product.id} product={product} />
            ))}

          {/* cuando coloquemos un filtro que no exista no vamos a mostrar nada */}
          {filteredProducts !== null &&
            !loading &&
            filteredProducts.length === 0 && (
              <p>No hay productos con este filtro.</p>
            )}
        </div>
      </div>
    </div>
  );
}
