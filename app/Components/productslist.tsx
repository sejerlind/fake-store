import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRightLong } from "react-icons/fa6";

interface Product {
  id: number;
  title: string;
  category: string;
  image: string;
}

interface UserListProps {
  limit: number; // Define the type for the 'limit' prop
}

export default async function productslist({ limit }: UserListProps) {
  

    async function getData() {
      const res = await fetch(`https://fakestoreapi.com/products?limit=${limit}`);

      const data = await res.json();
      return data;
    }
  
    const data: Product[] = await getData();
  
    return (
      <>
      <section className='container mx-auto grid grid-cols-1 grid-rows-5 gap-4 md:grid-cols-3 xl:grid-cols-5'>
        {data.map((product) => (
          <Link href={`/products/${product.id}`} key={product.id} className='flex flex-col justify-between relative items-center rounded-md p-2 h-full shadow transition-shadow group/item hover:shadow-md sm:items-start'>
            <Image src={product.image}
              alt="Picture of the product"
              quality={100}
              width={300}
              height={300}
              style={{
                maxWidth: "100%",
                height: "350px",
                objectFit: "cover",
              }}
              className='mt-4 mb-2 border border-gray-300 rounded-md'
            />
            <p>{product.title}</p>
            <div className='mt-auto'>
              <p className='font-bold'>{product.category} <span className=' absolute transition-all bottom-2 right-5 group-hover/item:right-2'><FaArrowRightLong className='group-hover/item:fill-blue-400'/></span></p>
            </div>
          </Link>
        ))}
      </section>
      </>
    );
  }
  