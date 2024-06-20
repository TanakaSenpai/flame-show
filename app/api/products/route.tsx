import { NextRequest, NextResponse } from "next/server";
import { products } from "./productsData";
import schema from "./schema";

export function GET(request: NextRequest) {
  return NextResponse.json(products);
}

export async function POST(request:NextRequest) {
    const body = await request.json();
    const validation = schema.safeParse(body);
    if (!validation.success) 
        return NextResponse.json(validation.error.errors)
    
}
