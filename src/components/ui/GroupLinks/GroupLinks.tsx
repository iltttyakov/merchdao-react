import React, {FC} from 'react';
import cls from './GroupLinks.module.scss'
import {Link} from "react-router-dom";


type ColumnMenuProps = {
    title: string,
    items: Array<any>
}

const GroupLinks: FC<ColumnMenuProps> = ({title, items}) => {
    return (
        <div className={cls.box}>
            <h4 className={cls.title}>{title}</h4>
            <ul className={cls.list}>

                {Object.keys(items).map((keyName, i) => {
                    return (
                        <li className={cls.item} key={i}>
                            <Link to={'#'} className={cls.link}>
                                {items[i]['label']}
                            </Link>
                        </li>
                    )
                })}

            </ul>
        </div>
    );
};

export default GroupLinks;