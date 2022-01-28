import React, {FC} from 'react';
import cls from './Menu.module.scss'
import './Menu.scss'
import {NavLink} from "react-router-dom";

import triangle from './triangle.svg'

type MenuProps = {
    items: Array<{
        to?: string,
        label: string
    }>,
}

const style = `
    .active .menu__activeLabel {
        display: block;
    }
`


const Menu: FC<MenuProps> = ({items}) => {
    return (
        <>
            <style>{style}</style>

            <ul className={cls.list}>
                {
                    Object.keys(items).map((keyName, i) => (
                        <li className={cls.item} key={i}>
                            <NavLink
                                to={items[i]['to']}
                                className={cls.link}
                            >
                                {items[i]['label']}
                                <div
                                    style={{backgroundImage: `url('${triangle}')`}}
                                    className={[cls.activeLabel, 'menu__activeLabel'].join(' ')}
                                />
                            </NavLink>
                        </li>
                    ))
                }
            </ul>
        </>
    );
};

export default Menu;