import featuredIMage from "../../public/featured.webp";
import featuredIMage2 from "../../public/featured2.webp";
import featuredIMage1 from "../../public/featured3.webp";
import Container from "./Container";
import SingleFeatured from "./SingleFeatured";

export default function Featured() {
    return (
        <div className="bBg text-white py-8">
            <Container>
                <div className='flex flex-col gap-8'>
                    <SingleFeatured heading={'ARE YOU SELLING ETSY?'} img={featuredIMage1} dis={'We ‘ve got you covered!'} />

                    <SingleFeatured heading={'UPGRADE YOUR PROXIES ?'} img={featuredIMage2} dis={'Unique holographic 0.7 micron sticker. Get a sheet of 20 stickers for only 10$ and enhance the visual quality of any proxy you own!'} />

                    <SingleFeatured heading={'PROXY GIFT CARD'} img={featuredIMage} dis={'Let your friends experience what is like to create a deck with cards far beyond their usual reach! A great gift with your custom message on it'} />
                </div>
            </Container>
        </div>
    )
}
