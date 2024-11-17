import { useEffect, useState } from "react";

//vams a definir un slug que va ser tipo string o string con array
export function useGetCategoryProduct(slug: string | string[]) {
  const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/products?populate=*&filters[category][slug][$eq]=${slug}`;
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(url);
        const json = await res.json();
        const formattedData = json.data.map((product: any) => {
          const {
            productName,
            taste,
            origin,
            description,
            slug,
            price,
            images: rawImage,
          } = product;
          const image = `${process.env.NEXT_PUBLIC_BACKEND_URL}/${rawImage[0].url}`;
          return {
            productName,
            taste,
            origin,
            slug,
            image,
            price,
            description,
          };
        });
        setResult(formattedData);
        setLoading(false);
      } catch (error: any) {
        setError(error);
        setLoading(false);
      }
    })();
  }, [url]);

  return { loading, result, error };
}
