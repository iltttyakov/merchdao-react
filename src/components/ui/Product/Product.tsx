import React, {FC, useState} from 'react';
import cls from './Product.module.scss'
import Count from "../Count/Count";
import Tag from "../Tag/Tag";
import SoldOut from "../SoldOut";
import Button from "../Button/Button";
import Container from "../Container/Container";
import AliceCarousel from "react-alice-carousel";
import GalleryNavButton from "../GalleryNavButton/GalleryNavButton";

import bgPattern from './bg.svg';
import GalleryDot from "../GalleryDot/GalleryDot";
import Currency from "../Currency/Currency";
import RadioList from "../RadioList/RadioList";
import Icon from "../Icon/Icon";
import Popup from "../Popup/Popup";
import Checkout from "../Checkout/Checkout";
import TransactionStatusPopup from "../TransactionStatusPopup/TransactionStatusPopup";
import SizeTable from "../SizeTable/SizeTable";


type ProductProps = {
    gallery: Array<string>,
    count: number,
    name: string,
    authorName: string,
    currency: string,
    soldOut?: boolean
}


const Product: FC<ProductProps> = (
    {
        gallery,
        count,
        name,
        authorName,
        currency,
        soldOut = false
    }
) => {
    const [carousel, setCarousel] = useState(undefined)
    const [checkoutOpen, setCheckoutOpen] = useState(false)
    const [transactionStatusOpen, setTransactionStatusOpen] = useState(false)
    const [sizeTableOpen, setSizeTableOpen] = useState(false)


    const renderDotsItem = ({isActive}: { isActive: boolean }) => {
        return (
            <GalleryDot active={isActive}/>
        )
    };

    const renderGallery = () => {
        let list: Array<JSX.Element> = []

        gallery.forEach((value, index) => {
            list.push(
                <div className={cls.galleryItem} key={index}>
                    <img className={cls.galleryImage} src={value} width={277} height={260} alt={''}/>
                </div>
            )
        })

        return list
    }

    return (
        <>
            <div className={cls.box}>
                <Container className={cls.container}>

                    <div className={cls.main}>

                        <p className={cls.nameMobile}>
                            {name}<br/>
                            {authorName}
                        </p>

                        <div className={cls.card}>

                            <div className={cls.cardPatter} style={{backgroundImage: `url(${bgPattern})`}}/>

                            <div className={cls.cardBgSquare}>
                                <div className={cls.cardBgCircle}/>
                            </div>

                            <div className={cls.cardTop}>
                                <ul className={cls.tags}>
                                    <li className={cls.tag}>
                                        <Count>{count}</Count>
                                    </li>
                                    <li className={cls.tag}>
                                        <Tag>T-shirt</Tag>
                                    </li>
                                    {
                                        soldOut
                                            ? <li className={[cls.tag, cls.mobileNone].join(' ')}>
                                                <SoldOut/>
                                            </li>
                                            : null
                                    }
                                </ul>

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


                            <div className={cls.cardBottom}>
                                <p className={cls.cardName}>
                                    {name}
                                </p>
                                {
                                    soldOut
                                        ? <div className={cls.cardBottomTag}>
                                            <SoldOut/>
                                        </div>
                                        : null
                                }
                            </div>

                        </div>

                        <div className={cls.info}>
                            <h1 className={cls.name}>
                                {name}<br/>
                                {authorName}
                            </h1>

                            <div className={cls.specs}>
                                <p className={cls.priceLabel}>
                                    Price <span className={cls.grey}>(Delivery included)</span>
                                </p>
                                <div className={cls.price}>
                                    <Currency className={cls.currency} name={'poly'} type={'fill'}/>
                                    <p className={cls.priceValue}>
                                        2300 {currency}
                                    </p>
                                </div>
                                <p className={cls.dollars}>$618.36</p>

                                <div className={cls.customizing}>
                                    <p className={cls.customizingLabel}>
                                        Choose Size
                                    </p>
                                    <div className={cls.customizingRow}>
                                        <RadioList name={'size'} items={[
                                            {value: 's', label: 'S'},
                                            {value: 'm', label: 'M'},
                                            {value: 'l', label: 'L'},
                                            {value: 'xl', label: 'XL'},
                                        ]}/>
                                        <div className={cls.verticalSeparator}/>
                                        <button className={cls.openTable} onClick={() => setSizeTableOpen(true)}>
                                            <Icon name={'ruler'} size={16}/>
                                        </button>
                                    </div>
                                </div>

                                <Button className={cls.buyButton} onClick={() => setCheckoutOpen(true)}>
                                    Buy NOW
                                </Button>

                            </div>

                        </div>

                    </div>

                    <div className={cls.desc}>

                        <h2 className={cls.descTitle}>
                            Description
                        </h2>

                        <div className={cls.descBody}>
                            <p>
                                This site is operated by Amalgamated Token Services Inc. through its wholly-owned
                                subsidiary,
                                Pielabs Services, LLC (together, “Pielabs”), which is not a registered broker-dealer.
                                Pielabs
                                does not give investment advice, endorsement, analysis or recommendations with respect
                                to
                                any
                                securities or provide legal or tax advice.
                            </p>
                        </div>

                    </div>

                </Container>
            </div>

            <Popup
                size={'small'}
                open={checkoutOpen}
                closeFunc={() => setCheckoutOpen(false)}
            >
                <Checkout/>
            </Popup>

            <TransactionStatusPopup status={'success'} closeFunc={() => {
                setTransactionStatusOpen(false)
            }} open={transactionStatusOpen}/>

            <Popup
                size={'big'}
                open={sizeTableOpen}
                closeFunc={() => {
                    setSizeTableOpen(false)
                }}
            >
                <SizeTable/>
                <Button
                    className={cls.sizeTableClose}
                    onClick={() => {
                        setSizeTableOpen(false)
                    }}
                    type={'stroke'}
                >
                    Close
                </Button>
            </Popup>
        </>
    );
};

export default Product;