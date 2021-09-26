import React from 'react'

import '../styles/Home.css'; //suena estupido pero recuerda que el css se importa si no como si fuera una funcion
import Product from './Product';

function Home() {
    return (
    <div className="home">
        <div className="home__container">
            <img
            className="home__image"
            src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
            alt=""/>
            <div className="home__row">
                <Product
                    id="1"
                    title="Mouse Logitech G203 Lightsync"
                    price={50.99}
                    image="https://http2.mlstatic.com/D_NQ_NP_968506-MCO43754960908_102020-O.webp"
                    rating={4}
                />
                <Product
                    id="2"
                    title="Samsung A20s"
                    price={360.99}
                    image="https://http2.mlstatic.com/D_NQ_NP_749450-MCO42219070340_062020-O.webp"
                    rating={4}
                />
            </div>

            <div className="home__row">
                <Product
                    id="3"
                    title="Acer Predator Helios 300 Gaming Laptop Pc, 17.3 Full Hd Ips"
                    price={3000.00}
                    image="https://http2.mlstatic.com/D_NQ_NP_709781-MCO41386350854_042020-O.webp"
                    rating={5}
                />
                <Product
                    id="4"
                    title='Honor Band 6 1.47"'
                    price={200.00}
                    image="https://http2.mlstatic.com/D_NQ_NP_710102-MLA45730759011_042021-O.webp"
                    rating={5}
                />
                <Product
                    id="5"
                    title="Jogger"
                    price={14.99}
                    image="https://http2.mlstatic.com/D_NQ_NP_763505-MCO47086194462_082021-O.webp"
                    rating={3}
                />
            </div>

            <div className="home__row">
                <Product
                    id="6"
                    title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor- Super Ultra Wide Dual WQHD 5120 x 1440"
                    price={1094.98}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
                />
            </div>
            <div className="home__row">
                <Product
                    id="7"
                    title="The lean startup"
                    price={29.99}
                    image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
                    rating={5}
                />
                <Product
                    id="8"
                    title="Mouse HyperX Pulsefire Dart"
                    price={85.00}
                    image="https://http2.mlstatic.com/D_NQ_NP_643543-MLA45377029958_032021-O.webp"
                    rating={5}
                />
            </div>

            <div className="home__row">
                <Product
                    id="9"
                    title='Xiaomi Mi Smart Band 6 1.56"'
                    price={150.00}
                    image="https://http2.mlstatic.com/D_NQ_NP_687161-MLA46164931916_052021-O.webp"
                    rating={5}
                />
                <Product
                    id="10"
                    title="Mouse Redragon Cobra Chroma M711"
                    price={35.14}
                    image="https://http2.mlstatic.com/D_NQ_NP_927757-MLA45375926725_032021-O.webp"
                    rating={3}
                />
                <Product
                    id="11"
                    title='LG AI ThinQ 49UN7300PDC LED 4K 49"'
                    price={1500.00}
                    image="https://http2.mlstatic.com/D_NQ_NP_804312-MLA44405465106_122020-O.webp"
                    rating={4}
                />
            </div>

            <div className="home__row">
                <Product
                    id="12"
                    title='OUTFINE Dual Motor Electric Height Adjustable Standing Desk, Home Office, Computer Workstation (Black, 55 ")'
                    price={264.99}
                    image="https://m.media-amazon.com/images/I/61SlwU5iLhL._AC_SL1500_.jpg"
                    rating={5}
                />
            </div>
        </div>
    </div>
    );
};

export default Home;
