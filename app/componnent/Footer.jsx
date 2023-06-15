import Link from "next/link";
import Container from "./Container";

export default function Footer() {
    return (
        <div className="bg-black pb-5 pt-16">
            <Container>
                <div className="flex text-white justify-between gap-5 border-b-2 border-gray-800 py-9">
                    <div>
                        <h3 className="py-5 text-xl font-semibold">Quick Links</h3>
                        <ul className="flex flex-col gap-3">
                            <Link className="text-md font-medium text-gray-400" href={`#`}>Home</Link>
                            <Link className="text-md font-medium text-gray-400" href={`#`}>Review</Link>
                            <Link className="text-md font-medium text-gray-400" href={`#`}>Shop</Link>
                            <Link className="text-md font-medium text-gray-400" href={`#`}>Custom Gallery</Link>
                            <Link className="text-md font-medium text-gray-400" href={`#`}>Blog</Link>
                            <Link className="text-md font-medium text-gray-400" href={`#`}>FAQ</Link>
                        </ul>
                    </div>
                    <div>
                        <h3 className="py-5 text-xl font-semibold"> Others Links</h3>
                        <ul className="flex flex-col gap-3">
                            <Link className="text-md font-medium text-gray-400" href={`#`}>Is Printing-proxies legit?</Link>
                            <Link className="text-md font-medium text-gray-400" href={`#`}>Selling on Etsy?</Link>
                            <Link className="text-md font-medium text-gray-400" href={`#`}>Check My Orders</Link>
                            <Link className="text-md font-medium text-gray-400" href={`#`}>Login</Link>
                            <Link className="text-md font-medium text-gray-400" href={`#`}>Register</Link>
                        </ul>

                    </div>
                    <div>
                        <h3 className="py-5 text-xl font-semibold"> Help Desk</h3>
                        <ul className="flex flex-col gap-3">
                            <Link className="text-md font-medium text-gray-400" href={`#`}>Contact Us</Link>
                            <Link className="text-md font-medium text-gray-400" href={`#`}>Discrod</Link>
                            <Link className="text-md font-medium text-gray-400" href={`#`}>Shipping Help</Link>
                            <Link className="text-md font-medium text-gray-400" href={`#`}>Policy,Terms and Shipping</Link>
                        </ul>
                    </div>
                    <div>
                        <h3 className="py-5 text-xl font-semibold">Social Media</h3>
                        <ul className="flex flex-col gap-3">
                            <Link className="text-md font-medium text-gray-400" href={`#`}>
                                <span>Facebook</span>
                            </Link>
                            <Link className="text-md font-medium text-gray-400" href={`#`}>
                                <span>Instragram</span>
                            </Link>
                            <Link className="text-md font-medium text-gray-400" href={`#`}>
                                <span>Twitter</span>
                            </Link>

                        </ul>
                    </div>
                </div>
                <p className="py-5 text-gray-600 text-lg text-center">© 2022 Copyright - www.mtgproxy.com</p>
            </Container>
        </div>
    )
}
