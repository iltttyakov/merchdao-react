import React, {FC, useState} from 'react';
import cls from './ConnectWallet.module.scss'
import Container from "../../ui/Container/Container";


import metamaskIcon from './icons/metamask.svg'
import walletConnectIcon from './icons/wallet-connect.svg'
import coinbaseWalletIcon from './icons/coinbase-wallet.svg'
import formaticIcon from './icons/formatic.svg'

import qrCode from './qr-code.png'
import bgImage from './bg-image.png'
import {Link} from "react-router-dom";
import Icon from "../../ui/Icon/Icon";


type ConnectWalletProps = {}

const items = [
    {
        name: 'Metamask',
        icon: metamaskIcon,
        iconSize: [30, 32],
        qrCode: qrCode,
    },
    {
        name: 'Wallet Connect',
        icon: walletConnectIcon,
        iconSize: [47, 29],
        qrCode: qrCode,
    },
    {
        name: 'Coinbase Wallet',
        icon: coinbaseWalletIcon,
        iconSize: [42, 42],
        qrCode: qrCode,
    },
    {
        name: 'Formatic',
        icon: formaticIcon,
        iconSize: [30, 30],
        qrCode: qrCode,
    },
]

const ConnectWallet: FC<ConnectWalletProps> = () => {
    const [activeWalletIndex, setActiveWalletIndex] = useState(null)

    return (
        <div className={cls.box}>

            <Container className={cls.container}>

                <div className={cls.content}>

                    <ul className={cls.list}>
                        {Object.keys(items).map((keyName, i) => {
                            const item = items[i]
                            return (
                                <li className={[
                                    cls.item,
                                    i === activeWalletIndex ? cls.active : ''
                                ].join(' ')}
                                    key={i}
                                    onClick={() => setActiveWalletIndex(i)}
                                >
                                    <div className={cls.iconContainer}>
                                        <div className={cls.iconInner}>
                                            <img
                                                className={cls.icon}
                                                src={item['icon']}
                                                width={item['iconSize'][0]}
                                                height={item['iconSize'][1]}
                                                alt={item['name']}
                                            />
                                        </div>
                                    </div>
                                    <p className={cls.name}>
                                        {item['name']}
                                    </p>
                                    <Icon name={'arrow-right'} size={24} className={cls.arrow}/>
                                    <a href={'#'} className={cls.link}/>
                                </li>
                            )
                        })}
                    </ul>

                    <ul className={[cls.qrList, activeWalletIndex !== null ? cls.active : ''].join(' ')}>

                        {Object.keys(items).map((keyName, i) => {
                            const item = items[i]
                            return (
                                <li className={[
                                    cls.qrItem,
                                    i === activeWalletIndex ? cls.active : ''
                                ].join(' ')}
                                    key={i}
                                    onClick={() => setActiveWalletIndex(i)}
                                >
                                    <img
                                        className={cls.qrImage}
                                        src={item['qrCode']}
                                        width={237}
                                        height={237}
                                        alt={'QR-code'}
                                    />
                                </li>
                            )
                        })}
                    </ul>

                </div>

                <img className={cls.bgImage} src={bgImage} width={696} height={574} alt={''}/>

                <div className={cls.footer}>
                    <p className={cls.agreements}>
                        By unlocking Your wallet You agree to our <a href="#">Terms of Service</a>, <a
                        href="#">Privacy</a> and <a href="#">Cookie Policy.</a>
                    </p>
                    <p className={cls.disclaimer}>
                        Disclaimer: Wallets are provided by External Providers and by selecting you agree to Terms of
                        those Providers. Your access to the wallet might be reliant on the External Provider being
                        operational.
                    </p>
                </div>

            </Container>

        </div>
    );
};

export default ConnectWallet;