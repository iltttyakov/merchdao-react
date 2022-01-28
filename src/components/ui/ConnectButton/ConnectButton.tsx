import React, {FC} from 'react';
import cls from './ConnectButton.module.scss'

import icon from './icon.svg'
import {CONNECTION_WALLET_PAGE_ROUTE} from "../../routes";
import {Link} from "react-router-dom";

type ConnectButtonProps = {}

const ConnectButton: FC<ConnectButtonProps> = () => {
    return (
        <div className={cls.box}>
            <img className={cls.icon} src={icon} width={20} height={20} alt={'Иконка'}/>
            <span className={cls.text}>
                Connect wallet
            </span>
            <Link to={CONNECTION_WALLET_PAGE_ROUTE} className={cls.link}/>
        </div>
    );
};

export default ConnectButton;