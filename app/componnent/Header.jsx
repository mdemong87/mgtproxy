import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineShoppingCart } from "react-icons/ai";
import logo from "../../public/logo.png";
import Container from './Container';

export default function Header() {
    return (
        <header className='bg-gray-950 text-white border-gray-900 border-b-2'>
            <Container>
                <div className='flex justify-between w-full items-center'>
                    <div className='logoWrp '>
                        <Image className='logo' src={logo} height={`500`} width={`500`} alt='Logo' />
                    </div>
                    <div className=''>
                        <nav>
                            <ul className='flex gap-2 items-center'>
                                <div className='flex gap-5'>
                                    <Link className='text-lg font-semibold text-gray-200 py-1 px-1 cursor-pointer' href={`#`}>Home</Link>
                                    <Link className='text-lg font-semibold py-1 px-1 cursor-pointer text-gray-200' href={`#`}>Shop</Link>
                                    <Link className='text-lg font-semibold py-1 px-1 cursor-pointer text-gray-200' href={`#`}>Gallery</Link>
                                    <Link className='text-lg font-semibold py-1 px-1 cursor-pointer text-gray-200' href={`#`}>FAQ</Link>
                                    <Link className='text-lg font-semibold py-1 px-1 cursor-pointer text-gray-200' href={`#`}>BLOG</Link>
                                    <Link className='text-lg font-semibold py-1 px-1 cursor-pointer text-gray-200' href={`#`}>SIGN IN</Link>
                                    <Link className='text-lg font-semibold py-1 px-1 cursor-pointer text-gray-200' href={`#`}>JOIN DISCORD</Link>
                                    <Link className='text-lg font-semibold py-1 px-1 cursor-pointer text-gray-200 flex items-center' href={`#`}>
                                        <AiOutlineShoppingCart className='text-gray-200 text-2xl' />
                                    </Link>

                                </div>
                            </ul>
                        </nav>
                    </div>
                </div>
            </Container>
        </header>
    )
}
