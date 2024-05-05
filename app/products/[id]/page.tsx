import { notFound } from "next/navigation"
import Image from 'next/image';
import CartButton from "@/app/Components/CartButton";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

async function getProduct(id: number): Promise<Product> {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  if (!res.ok) {
    throw new Error('Product not found'); // Throw error instead of using notFound
  }
  return res.json();
}

interface ProductDetailsProps {
  params: {
    id: string;
  };
}

export default async function ProductDetails({ params }: ProductDetailsProps) {
  try {
    const product = await getProduct(parseInt(params.id));

    return (
      <main className="container mx-auto m min-h-screen flex justify-center items-center">
      <div className="Card">
        <div className="p-4 rounded-md flex items-center flex-wrap justify-center md:flex-nowrap">
          <Image src={product.image} width={300} height={300} alt="Picture of the product" className="rounded-md bg-gray-300"/>
          <div className="p-10">
            <h3 className="text-xl font-semibold">{product.title}</h3>
            <p className="text-gray-600">Price: ${product.price}</p>
            <p className="text-gray-600">{product.description}</p>
            <p className="text-gray-600">Category: {product.category}</p>
            <div className="mt-4">
              < CartButton />
              </div>

          </div>
        </div>
      </div>
    </main>
    );
  } catch (error) {
    notFound();
    return null;
  }
}
