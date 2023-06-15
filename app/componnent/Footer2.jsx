import Container from "./Container";

export default function Footer2() {
    return (
        <div className='bg-gray-950 text-white border-t-2 border-gray-900'>
            <Container>
                <div className=" mx-auto w-fit px-6 py-5">
                    <p className="text-center text-xl font-bold text-gray-300">MTGproxy.com is part of <b className="pColor">PrintingProxies.com’s</b> Network - <b className="pColor">Contact Us</b></p>
                    <p className="text-xl font-bold text-gray-300 text-center">Check our Custom cards <b className="pColor">MTG gallery</b> or our <b className="pColor">Terms</b> & <b className="pColor">Agreements.</b></p>
                </div>
            </Container>
        </div>
    )
}
