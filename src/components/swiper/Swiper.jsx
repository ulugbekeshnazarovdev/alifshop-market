import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import photo1 from '../../assets/images/photo1.png'
import photo2 from '../../assets/images/photo2.png'
import photo3 from '../../assets/images/photo3.jpg'
import photo4 from '../../assets/images/photo4.png'
import photo5 from '../../assets/images/photo5.jpg'
import photo6 from '../../assets/images/photo6.jpg'
import './Swiper.css'
import 'react-responsive-carousel/lib/styles/carousel.min.css';

let carouselData = [photo1, photo2, photo3, photo4, photo5, photo6]

const SwiperCarous = () => {
    return (
        <Carousel autoPlay={true} infiniteLoop={true} interval={1500} >
            {
                carouselData.map((img, index) =>
                    <div className='slide' key={index}>
                        <img src={img} alt="Image1" />
                    </div>
                )
            }


        </Carousel>
    );
};

export default SwiperCarous;
