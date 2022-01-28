import React, {FC, useState} from 'react';
import cls from './Carousel.module.scss'
import AliceCarousel from "react-alice-carousel";

import arrow from './arrow.svg'

type CarouselProps = {
    items: Array<JSX.Element>,
    size?: string
}


const Carousel: FC<CarouselProps> = ({items, size = 'big'}) => {
    const [carousel, setCarousel] = useState(null)

    let responsive = {}

    if (size === 'big') {
        responsive = {
            0: {
                items: 1,
            },
            640: {
                items: 2,
                autoWidth: true
            },
            1064: {
                items: 3,
                autoWidth: false
            },
        }
    } else {
        responsive = {
            0: {items: 1},
            640: {items: 2},
            864: {items: 3},
            1064: {items: 4},
        }
    }
    return (
        <div className={cls.box}>

            <div className={[cls.track, size === 'big' ? cls.big : cls.small].join(' ')}>
                <AliceCarousel
                    items={items}
                    disableButtonsControls
                    disableDotsControls
                    ref={(el) => setCarousel(el)}
                    responsive={responsive}
                    infinite={true}
                />
            </div>

            <div className={cls.navigation}>
                <button
                    onClick={() => carousel.slidePrev()}
                    className={[cls.navButton, cls.prev].join(' ')}
                >
                    <img className={cls.arrow} src={arrow} alt={'Arrow'} width={24} height={24}/>
                </button>
                <button
                    onClick={() => carousel.slideNext()}
                    className={[cls.navButton, cls.next].join(' ')}
                >
                    <img className={cls.arrow} src={arrow} alt={'Arrow'} width={24} height={24}/>
                </button>
            </div>

        </div>
    );
};

export default Carousel;