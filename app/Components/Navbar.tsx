import Link from 'next/link';
import Cart from './Cart';

export default function Navbar() {
  return (
    <nav className='flex items-center justify-between px-10 py-10 shadow'>
      <h1 className='font-bold'><Link href="/">CelestialCart</Link></h1>
      <span className="flex gap-5 items-center">
        <Link className='font-bold' href="/">Home</Link>
        <Link className='font-bold' href="/products">Shop</Link>
        < Cart />
      </span>
    </nav>
  );
}
