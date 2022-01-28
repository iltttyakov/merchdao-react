import React, {FC} from 'react';
import cls from './Breadcrumbs.module.scss'
import {Link} from "react-router-dom";
import Icon from "../Icon/Icon";


type BreadcrumbsProps = {
    items: Array<{
        label: string,
        to?: string,
    }>
    showMobile?: boolean
}

const Breadcrumbs: FC<BreadcrumbsProps> = (
    {
        items,
        showMobile = true
    }
) => {
    const renderItems = () => {
        const itemsLastIndex = items.length - 1

        return Object.keys(items).map((keyName, i) => {
            const item = items[i]
            return (
                i === itemsLastIndex
                    ? <li className={cls.item}>
                    <span className={[cls.link, cls.current].join(' ')}>
                        {item['label']}
                    </span>
                    </li>
                    : <li className={cls.item}>
                        <Link to={item['to']} className={cls.link}>
                            {item['label']}
                        </Link>
                        <Icon className={cls.arrow} name={'small-arrow-right'} size={24}/>
                    </li>
            )
        })
    }

    return (
        <div className={[cls.box, showMobile ? cls.showMobile : cls.hideMobile].join(' ')}>
            <ul className={cls.list}>
                {renderItems()}
            </ul>
        </div>
    );
};

export default Breadcrumbs;