import { ProductProps } from "../types/types";

export const ranges: Record<string, (products: ProductProps[]) => ProductProps[]> = {
  "all": (products) => products,
  "100": (products) => products.filter((product) => product.price <= 100),
  "500": (products) => products.filter((product) => product.price > 100 && product.price <= 500),
  "1000": (products) => products.filter((product) => product.price > 500 && product.price <= 1000),
  "moreThan1000": (products) => products.filter((product) => product.price > 1000),
};
