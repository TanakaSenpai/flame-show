export const products: {
  id: string;
  name: string;
  imgSrc: string[];
  price: string;
  colors: string[];
  category: string;
  productCode: string;
  inStock: boolean;
}[] = [
  {
    id: "wef",
    name: "New White Shoes",
    imgSrc: ["/images/shoes/1.jpg", "/images/shoes/6.jpg"],
    price: "4000",
    colors: ["White", "Black"],
    category: "formal",
    productCode: "SN4953",
    inStock: true,
  },
  {
    id: "swegtw",
    name: "New White and Black Shoes",
    imgSrc: ["/images/shoes/2.jpg", "/images/shoes/5.jpg"],
    price: "2000",
    colors: ["White", "Black"],
    category: "sneakers",
    productCode: "MS6653",
    inStock: true,
  },
  {
    id: "rstj",
    name: "New White and Blue Shoes",
    imgSrc: [
      "/images/shoes/3.jpg",
      "/images/shoes/1.jpg",
      "/images/shoes/6.jpg",
    ],
    price: "3600",
    colors: ["White", "Black"],
    category: "converse",
    productCode: "JG1832",
    inStock: true,
  },
  {
    id: "haserh",
    name: "New Black and Red Shoes",
    imgSrc: ["/images/shoes/4.jpg"],
    price: "5000",
    colors: ["White", "Black"],
    category: "boots",
    productCode: "TH5398",
    inStock: true,
  },
  {
    id: "stherd",
    name: "New White and Purple Shoes",
    imgSrc: ["/images/shoes/5.jpg"],
    price: "6800",
    colors: ["White", "Black"],
    category: "converse",
    productCode: "HD8372",
    inStock: true,
  },
  {
    id: "ertshe",
    name: "New White and Black Nike Shoes",
    imgSrc: ["/images/shoes/6.jpg"],
    price: "1500",
    colors: ["White", "Black"],
    category: "casual",
    productCode: "FU6738",
    inStock: true,
  },
];
