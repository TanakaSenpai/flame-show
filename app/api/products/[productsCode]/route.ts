import { NextRequest, NextResponse } from "next/server";
import { products } from "../productsData";

export function GET(
  request: NextRequest,
  { params }: { params: { productsCode: string } }
) {
    const product = products.find((obj) => obj.productCode === params.productsCode);

    if (!product)
        return NextResponse.json({error: "Product not found"})

    return NextResponse.json(product);
}
<<<<<<< HEAD


=======
>>>>>>> 7a0c35c341b9225822b62419054a5179395b07d2
