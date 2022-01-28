import React, {FC} from 'react';
import cls from './Filter.module.scss'
import Container from "../Container/Container";


type FilterProps = {
    isOpen: boolean,
    items: Array<any>
}

const Filter: FC<FilterProps> = (
    {
        isOpen = false,
        items,
    }
) => {

    return (
        <div className={[cls.box, isOpen ? cls.open : ''].join(' ')}>
            <Container className={cls.container}>

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

            </Container>
        </div>
    );
};

export default Filter;