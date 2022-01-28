import React, {FC} from 'react';
import cls from './Catalog.module.scss'
import Container from "../Container/Container";


type CatalogProps = {
    items: Array<JSX.Element>,
    navigation?: JSX.Element
}

const Catalog: FC<CatalogProps> = (
    {
        items,
        navigation
    }
) => {
    return (
        <div className={cls.box}>

            <ul className={cls.list}>

                {
                    Object.keys(items).map((keyName, i) => {
                        return (
                            <li className={cls.item} key={i}>
                                {items[i]}
                            </li>
                        )
                    })
                }

            </ul>

            <div className={cls.navigation}>
                {navigation ? navigation : null}
            </div>

        </div>
    );
};

export default Catalog;