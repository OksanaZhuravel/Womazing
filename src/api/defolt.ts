import { CategoryProps, CouponsData, ProductProps } from "../types/types"

export const defaultCategories: CategoryProps[] = [
  { id: 6, name: "Футболки" },
  { id: 1, name: "Свитшоты" },
  { id: 2, name: "Толстовки" },
  { id: 4, name: "Купальники" },
]
export const defaultProducts: ProductProps[] = [
  {
    id: 1,
    title: "Футболка BOUTIQUE",
    description:
      "Футболка женская - это стильная и модная одежда, идеально подходящая для летнего сезона. Она выполнена из качественного хлопка, что делает ее удобной и приятной на ощупь. Белый цвет футболки придаёт ей особую свежесть и легкость. Также она отличается длинным кроем, что делает эту футболку подходящей для тех, кто предпочитает удлиненную одежду.",
    price: 50,
    discord: 45,
    quantity: 1,
    categories: ["Футболки"],
    images: [`/assets/img/catalog/03.webp`],
    sizes: ["S", "XL"],
    colors: [
      { name: "Графитно-черный", value: "#1C1C1C" },
      { name: "Бежевый", value: "#F5F5DC" },
    ],
    news: false,
  },
  {
    id: 2,
    title: "Футболка OSO&OSO",
    description:
      "Мода в свободном стиле набирает обороты. Молодежная одежда в стиле oversize имеет свободный крой. Базовая модная футболка с округлой горловиной держит форму и со временем не растянется. ",
    price: 85,
    discord: null,
    quantity: 1,
    categories: ["Футболки"],
    images: [`/assets/img/catalog/1.webp`],
    sizes: ["XS", "L"],
    colors: [
      { name: "Графитно-черный", value: "#1C1C1C" },
      { name: "Бежевый", value: "#F5F5DC" },
    ],
    news: false,
  },
  {
    id: 3,
    title: "Футболка BOUTIQUE TREE",
    description:
      "Футболка женская - это стильная и модная одежда, идеально подходящая для летнего сезона. Она выполнена из качественного хлопка, что делает ее удобной и приятной на ощупь. Белый цвет футболки придаёт ей особую свежесть и легкость. Также она отличается длинным кроем, что делает эту футболку подходящей для тех, кто предпочитает удлиненную одежду.",
    price: 55,
    discord: 41,
    quantity: 1,
    categories: ["Футболки"],
    images: [`/assets/img/catalog/2.webp`],
    sizes: ["XS", "L"],
    colors: [
      { name: "Графитно-черный", value: "#1C1C1C" },
      { name: "Бежевый", value: "#F5F5DC" },
    ],
    news: false,
  },
]
export const defaultCoupon: CouponsData[] = [
  {
    item: "12345",
    sale: 50,
  },
]
