import React, {FC} from 'react';
import cls from './Footer.module.scss'
import Logo from "../Logo/Logo";
import Subscribe from "../Subscribe/Subscribe";
import SocialList from "../SocialList/SocialList";
import Container from "../Container/Container";
import GroupLinks from "../GroupLinks/GroupLinks";


import merchdao from './merchdao.svg';
import ColumnNav from "../ColumnNav/ColumnNav";


type FooterProps = {}

const Footer: FC<FooterProps> = () => {
    return (
        <div className={cls.box}>
            <Container className={cls.container}>

                <div className={cls.merchdao} style={{backgroundImage: `url(${merchdao})`}}/>

                <div className={cls.inner}>

                    <div className={cls.card}>
                        <div className={cls.top}>

                            <div className={cls.logo}>
                                <Logo/>
                            </div>

                            <Subscribe/>

                        </div>

                        <div className={cls.middle}>

                            <div className={cls.middleLeft}>
                                <p className={cls.slogan}>
                                    The new creative economy
                                </p>
                                <SocialList
                                    items={[
                                        {name: 'telegram', link: '#'},
                                        {name: 'medium', link: '#'},
                                        {name: 'instagram', link: '#'},
                                        {name: 'twitter', link: '#'},
                                        {name: 'linkedin', link: '#'},
                                        {name: 'reddit', link: '#'},
                                        {name: 'facebook', link: '#'},
                                        {name: 'bitcoin-talk', link: '#'},
                                    ]}
                                />
                            </div>

                            <div className={cls.middleRight}>

                                <ColumnNav columns={
                                    [
                                        <GroupLinks title={'Group links'} items={[
                                            {label: 'User agreement', to: '#'},
                                            {label: 'Delivery', to: '#'},
                                            {label: 'Delivery', to: '#'},
                                        ]}/>,
                                        <GroupLinks title={'Group links'} items={[
                                            {label: 'Delivery', to: '#'},
                                            {label: 'Agreements', to: '#'},
                                            {label: 'Agreements', to: '#'},
                                        ]}/>,
                                        <GroupLinks title={'Group links'} items={[
                                            {label: 'Delivery', to: '#'},
                                            {label: 'Agreements', to: '#'},
                                            {label: 'Agreements', to: '#'},
                                        ]}/>,
                                    ]
                                }/>

                            </div>

                        </div>
                    </div>

                    <div className={cls.bottom}>

                        <p className={cls.copyright}>
                            Copyright © 2021 MerchDAO. All rights reserved
                        </p>

                        <p className={cls.authorship}>
                            Handcrafted with love by merchdao team.
                        </p>

                    </div>

                </div>

            </Container>
        </div>
    );
};

export default Footer;