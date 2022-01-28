import React, {FC, useEffect} from 'react';
import cls from './Layout.module.scss'
import Footer from "../Footer/Footer";


type LayoutProps = {
    header: JSX.Element,
    footer: JSX.Element,
}

const Layout: FC<LayoutProps> = (
    {
        header,
        footer,
        children
    }
) => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className={cls.box}>

            <div className={cls.header}>
                {header}
            </div>

            {children}

            <div className={cls.footer}>
                {footer}
            </div>

        </div>
    );
};

export default Layout;