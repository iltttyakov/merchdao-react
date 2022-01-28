import React, {FC, useState} from 'react';
import cls from './ProductCard.module.scss'
import AliceCarousel from 'react-alice-carousel';
import Count from "../Count/Count";
import SoldOut from "../SoldOut";
import {Link} from "react-router-dom";
import Currency from "../Currency/Currency";


import bg from './bg.svg'
import GalleryNavButton from "../GalleryNavButton/GalleryNavButton";
import GalleryDot from "../GalleryDot/GalleryDot";
import {NFT_PAGE_ROUTE} from "../../routes";
import Tooltip from "../Tooltip/Tooltip";


type ProductCardProps = {
    name: string,
    price: number,
    currency: string,
    count: number,
    gallery: Array<string>,
    soldOut?: boolean
    tooltip?: string,
}


const ProductCard: FC<ProductCardProps> = (
    {
        name,
        price,
        currency,
        count,
        gallery,
        soldOut = false,
        tooltip,
    }
) => {
    const [carousel, setCarousel] = useState(undefined)


    const renderDotsItem = ({isActive}: { isActive: boolean }) => {
        return (
            <GalleryDot active={isActive}/>
        )
    };

    const renderGallery = () => {
        let list: Array<JSX.Element> = []

        gallery.forEach((value, index) => {
            list.push(
                <div className={cls.item} key={index}>
                    <img className={cls.image} src={value} width={277} height={260} alt={''}/>
                </div>
            )
        })

        return list
    }

    return (
        <div className={cls.box}>

            <div className={cls.cardBg} style={{backgroundImage: `url(${bg})`}}/>

            <div className={cls.top}>

                {
                    tooltip ?
                        <Tooltip text={tooltip}>
                            <Count className={cls.count}>{count}</Count>
                        </Tooltip>
                        : <Count className={cls.count}>{count}</Count>
                }

                {soldOut ? <SoldOut/> : null}

                <div className={cls.currency}>
                    <Currency name={currency}/>
                </div>

            </div>


            <div className={cls.galleryNav}>
                <GalleryNavButton
                    onClick={() => carousel.slidePrev()}
                    className={[cls.navButton, cls.prev,].join(' ')}
                />

                <AliceCarousel
                    items={renderGallery()}
                    disableButtonsControls
                    ref={(el) => setCarousel(el)}
                    renderDotsItem={renderDotsItem}
                    infinite={true}
                />

                <GalleryNavButton
                    onClick={() => carousel.slideNext()}
                    className={[cls.navButton, cls.next,].join(' ')}
                />
            </div>


            <div className={cls.info}>
                <h4 className={cls.name}>
                    {name}
                </h4>
                <p className={cls.price}>
                    <span className={cls.priceInner}>
                        {price} {currency}
                    </span>
                </p>
            </div>

            <Link to={NFT_PAGE_ROUTE} className={cls.link}/>

        </div>
    );
};

export default ProductCard;