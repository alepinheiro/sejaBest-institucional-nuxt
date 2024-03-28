/**
 * Retorna um array com as imagens top of sale na cor predefinida
 * @param color
 * @returns
 */
export const useGetTopOfSales = (color: "black" | "white") => [
  {
    id: "cashMe",
    src: "/images/topOfSales/" + color + "/cashMe.png",
    alt: "Campeão de vendas CashMe - 2022/2023",
  },
  {
    id: "crediblue",
    src: "/images/topOfSales/" + color + "/crediBlue.png",
    alt: "Parceiro Elite CrediBlue",
  },
  {
    id: "daycoval",
    src: "/images/topOfSales/" + color + "/daycoval.png",
    alt: "Campeão de vendas Daycoval - 2023",
  },
  {
    id: "inter",
    src: "/images/topOfSales/" + color + "/inter.png",
    alt: "Top Player imobiliário Inter",
  },
];
