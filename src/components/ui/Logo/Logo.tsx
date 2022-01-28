import React, {FC} from 'react';
import cls from './Logo.module.scss'

import image from '../../../../public/logo.svg'
import {HOME_PAGE_ROUTE} from "../../routes";
import {Link} from "react-router-dom";

type LogoProps = {}

const Logo: FC<LogoProps> = () => {
    return (
        <div className={cls.box}>
            <img className={cls.image} src={image} alt={'Logo'} width={172} height={48}/>
            <Link className={cls.link} to={HOME_PAGE_ROUTE}/>
        </div>
    );
};

export default Logo;