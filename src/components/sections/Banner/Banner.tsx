import React, {FC, useEffect} from 'react';
import cls from './Banner.module.scss'
import Container from "../../ui/Container/Container";

import leftImage from './left-image.png';
import rightImage from './right-image.png';
import backgroundImage from './background-image.jpg';
import andLabel from './and-label.png';


type BannerProps = {}

const Banner: FC<BannerProps> = () => {
    useEffect(() => {
        let bannerLeft = document.getElementById('banner-parallax-left');
        let bannerRight = document.getElementById('banner-parallax-right');

        window.addEventListener('mousemove', e => {
            let x = e.clientX / window.innerWidth;
            let y = e.clientY / window.innerHeight;

            bannerLeft.style.transform = 'translate(-' + x * 20 + 'px, -' + y * 15 + 'px)';
            bannerRight.style.transform = 'translate(+' + x * 20 + 'px, +' + y * 15 + 'px)';
        })
    }, [])

    return (
        <div className={cls.box}>

            <Container className={cls.container}>

                <img id={'banner-parallax-left'} className={cls.leftImage} src={leftImage} width={422} height={360}
                     alt={''}/>

                <div className={cls.banner} style={{backgroundImage: `url(${backgroundImage})`}}>
                    <div className={cls.text}>
                        <div className={cls.top}>
                            <span className={cls.title}>Discover</span>
                            <img className={cls.andLabel} src={andLabel} width={85} height={92} alt={'&'}/>
                            <span className={cls.title}>invest</span>
                        </div>
                        <p className={cls.bottom}>
                            The first hybrid DeFi investment platform for GameFi and NFT projects
                        </p>
                    </div>
                </div>

                <img id={'banner-parallax-right'} className={cls.rightImage} src={rightImage} width={172} height={160}
                     alt={''}/>

            </Container>

        </div>
    );
};

export default Banner;