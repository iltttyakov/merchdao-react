import React, {FC, useEffect} from 'react';
import cls from './Usp.module.scss'

import Button from "../../ui/Button/Button";
import Container from "../../ui/Container/Container";

import label from './merchdao.png'

import wallet from './wallet.png'
import coin from './coin.png'
import mLetter from './m-letter.png'

import image from './usp-image.png'

type UspProps = {}

const Usp: FC<UspProps> = () => {
    useEffect(() => {
        let uspWallet = document.getElementById('usp-parallax-wallet');
        let uspCoin = document.getElementById('usp-parallax-coin');
        let uspLabel = document.getElementById('usp-parallax-label');

        window.addEventListener('mousemove', e => {
            let x = e.clientX / window.innerWidth;
            let y = e.clientY / window.innerHeight;

            uspWallet.style.transform = 'translate(-' + x * 20 + 'px, -' + y * 15 + 'px)';
            uspCoin.style.transform = 'translate(+' + x * 20 + 'px, +' + y * 15 + 'px)';
            uspLabel.style.transform = 'translate(-' + x * 20 + 'px, +' + y * 15 + 'px)';
        })
    }, [])

    return (
        <div className={cls.box}>

            <Container className={cls.container}>
                <div className={cls.text}>

                    <p className={cls.subtitle}>
                        Save your time with Stacks
                    </p>

                    <div className={cls.titleContainer}>
                        <h1 className={cls.title}>
                            Make a dream Invest in NFT
                        </h1>
                        <img id={'usp-parallax-label'} className={cls.label} src={label} width={354} height={221}
                             alt={'Merchdao'}/>
                    </div>

                    <Button className={cls.button} onClick={() => console.log('click')}>
                        Show me trendings
                    </Button>

                </div>

                <div className={[cls.imageContainer, cls.mobile].join(' ')}>
                    <img className={cls.image} src={image} width={566} height={509} alt={'NFT'}/>
                </div>

                <div className={[cls.imageContainer, cls.desktop].join(' ')}>
                    <img className={[cls.picture, cls.mLetter, cls.parallax].join(' ')}
                         src={mLetter} width={649} height={548} alt={''}/>
                    <img id={'usp-parallax-wallet'} className={[cls.picture, cls.wallet, cls.parallax].join(' ')}
                         src={wallet} width={291} height={292} alt={''}/>
                    <img id={'usp-parallax-coin'} className={[cls.picture, cls.coin, cls.parallax].join(' ')}
                         src={coin} width={350} height={350} alt={''}/>
                </div>


            </Container>

        </div>
    );
};

export default Usp;