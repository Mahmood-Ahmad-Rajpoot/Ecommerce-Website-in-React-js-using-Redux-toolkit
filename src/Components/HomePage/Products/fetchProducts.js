import { useState, useEffect,memo } from "react";
const url = `https://dummyjson.com/products`;

// **********************************
const fetchProducts = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [err, setErr] = useState(false);
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await fetch(url);
        if (res.ok === false) {
          setErr(true);
          setIsLoading(false);
           throw Error;
        }
        const product = await res.json();
        setProduct(product.products);
      } catch (error) {
        setErr(true);
      }
      setIsLoading(false);
    };
    getProducts();
  }, []);


  return { isLoading, err, product };
};
export default fetchProducts;
