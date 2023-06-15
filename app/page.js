import Checkout from './componnent/Checkout'
import Container from './componnent/Container'
import DealofDay from './componnent/DealofDay'
import Discord from './componnent/Discord'
import Hero from './componnent/Hero'
import Order from './componnent/Order'
import PriceingPlane from './componnent/PriceingPlane'
import Review from './componnent/Review'
import Smooth from './componnent/Smooth'

export default function Home() {
  return (
    <main>
      <Hero />
      <div className=' bg-gray-950 '>
        <Container>
          <div className='grid grid-cols-8 items-center gap-5 bg-gray-200 px-5'>
            <Review />
            <DealofDay />
          </div>
        </Container>
      </div>
      <Smooth />
      <PriceingPlane />
      <Order />
      <Checkout />
      <Discord />
    </main>
  )
}
