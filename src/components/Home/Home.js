import React from 'react'
import Products from '../Products/Products';
import './Home.css';

const Home = () => {
    return (
        <div className="home" >
          
            <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="page banner" />

            {/* Product id, title, price, rating, image */}
            <div className="home__row">
                <Products
                    id="34delinch"
                    title="Dell UltraSharp U3415W 34-Inch Curved LED-Lit Monitor (Older Model)"
                    price={882.89}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/71br6lyzhuL._AC_UY218_.jpg"

                />
                
            </div>
           
            <div className="home__row">
                 <Products
                    id="echodot"
                    title="All-new Echo Dot (4th Gen) | Smart speaker with clock and Alexa"
                    price={79.99}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/61nNGJH14kL._AC_UL320_.jpg"

                />
                <Products
                    id="B0886W3LTR"
                    title='Acer Chromebook 11.6" IPS Screen, ICD N4000, 4GB Ram, 32GB eMMC, Chrome OS, Silver, CB311-9H-C29L'
                    price={299.99}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/91pFQm4adhL._AC_UY218_.jpg"

                />
                <Products
                    id="12321341"
                    title="Introducing Fire TV Stick Lite with Alexa Voice Remote Lite (no TV controls) | HD streaming device "
                    price={49.99}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/51W5ps04edL._AC_UL320_.jpg"

                />
               
            </div>

            <div className="home__row">
                <Products
                    id="TCL 55S425-CA 4K"
                    title="TCL 55S425-CA 4K Ultra HD Smart LED Television (2019), 55"
                    price={399.99}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/71FtlJVHExL._AC_UY218_.jpg"

                />
                <Products
                    id="B07YDKKMXC"
                    title="Wireless Earbuds, ENACFIRE G20 Bluetooth Wireless Headphones CVC 8.0 Noise Cancellation Binaural Calls Built-in Mic IPX7 Waterproof Smart Touch Control Volume Wireless Earphones apt-X Stereo Sound 48H Cycle Playtime Bluetooth 5.0"
                    price={59.99}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/61d+K+T31rL._AC_UY218_.jpg"

                />
            </div>
            
            {/* Product */}

        </div>
    )
}

export default Home;
