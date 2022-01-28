import React, {FC} from 'react';
import cls from './ColumnNav.module.scss'


type ColumnNavProps = {
    columns: Array<JSX.Element>
}

const ColumnNav: FC<ColumnNavProps> = ({columns}) => {
    return (
        <ul className={cls.list}>

            {
                Object.keys(columns).map((keyName, i) => {
                    return (
                        <li className={cls.item} key={i}>
                            {columns[i]}
                        </li>
                    )
                })
            }

        </ul>
    );
};

export default ColumnNav;