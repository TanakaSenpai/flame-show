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


