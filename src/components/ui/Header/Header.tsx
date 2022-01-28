import React, {FC, useState} from 'react';
import cls from './Header.module.scss'
import Container from "../Container/Container";
import Logo from "../Logo/Logo";
import Burger from "../Burger/Burger";


type HeaderProps = {
    logo: JSX.Element,
    nav: JSX.Element,
    actions: JSX.Element,
}

const Header: FC<HeaderProps> = (
    {
        logo = <Logo/>,
        nav,
        actions,
    }
) => {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <div className={cls.box}>
            <Container className={cls.container}>
                <div className={cls.content}>

                    <div className={cls.mobile}>
                        {
                            logo
                                ? <div className={cls.logo}>
                                    {logo}
                                </div>
                                : null
                        }
                        <div className={cls.burger}>
                            <Burger open={menuOpen} onClick={() => {
                                setMenuOpen(!menuOpen)
                            }}/>
                        </div>
                    </div>


                    {
                        nav
                            ? <nav className={[cls.nav, menuOpen ? cls.open : ''].join(' ')}>
                                {nav}
                            </nav>
                            : null
                    }

                    {
                        actions
                            ? <div className={cls.button}>
                                {actions}
                            </div>
                            : null
                    }


                </div>
            </Container>
        </div>
    );
};

export default Header;