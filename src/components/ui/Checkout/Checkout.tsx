import React, {FC, useState} from 'react';
import cls from './Checkout.module.scss'
import Input from "../Input/Input";
import Button from "../Button/Button";


import nftIcon from '../../../../public/nft-icon.png'
import deliveryIcon from '../../../../public/delivery-icon.png'

type CheckoutProps = {}

const Checkout: FC<CheckoutProps> = () => {
    const [email, setEmail] = useState('')

    return (
        <div className={cls.box}>
            <h2 className={cls.title}>
                Complete chekout
            </h2>

            <p className={cls.listTitle}>
                Item
            </p>

            <ul className={cls.list}>

                <li className={cls.item}>
                    <div className={cls.pictureContainer}>
                        <img className={cls.picture} src={nftIcon} alt={''} width={24} height={25}/>
                    </div>
                    <div className={cls.mainInfo}>
                        <p className={cls.name}>
                            Awesome Donut NFT
                        </p>
                        <p className={cls.authorName}>
                            Daoland
                        </p>
                    </div>
                    <div className={cls.price}>
                        <p className={cls.crypto}>
                            2 180 MRCH
                        </p>
                        <p className={cls.dollars}>
                            $600.00
                        </p>
                    </div>
                </li>

                <li className={cls.item}>
                    <div className={cls.pictureContainer}>
                        <img className={cls.picture} src={deliveryIcon} alt={''} width={28} height={23}/>
                    </div>
                    <div className={cls.mainInfo}>
                        <p className={cls.name}>
                            Awesome Donut NFT
                        </p>
                        <p className={cls.authorName}>
                            Daoland
                        </p>
                    </div>
                    <div className={cls.price}>
                        <p className={cls.crypto}>
                            2 180 MRCH
                        </p>
                        <p className={cls.dollars}>
                            $600.00
                        </p>
                    </div>
                </li>

            </ul>

            <div className={cls.total}>
                <p className={cls.totalLabel}>
                    Total
                </p>
                <p className={cls.totalPrice}>
                    2300 POLY
                </p>
            </div>


            <div className={cls.form}>
                <Input
                    className={cls.email}
                    name={'email'}
                    value={email}
                    onChange={(e) => {
                        setEmail(e.target.value)
                    }}
                    label={'Enter Your Email'}
                    placeholder={'Enter your email (we will contact directly)'}
                />
                <Button className={cls.button} disabled={!email}>
                    Confirm checkout | 2300 MRCH
                </Button>
            </div>


        </div>
    );
};

export default Checkout;