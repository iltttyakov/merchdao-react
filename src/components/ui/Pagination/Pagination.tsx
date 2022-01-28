import React, {FC} from 'react';
import cls from './Pagination.module.scss'
import {Link} from "react-router-dom";


type PaginationProps = {

}

const Pagination: FC<PaginationProps> = () => {
    return (
        <div className={cls.box}>
            <ul className={cls.list}>
                <li className={cls.item}>
                    <span className={[cls.link, cls.current].join(' ')}>
                        <span>1</span>
                    </span>
                </li>
                <li className={cls.item}>
                    <Link className={cls.link} to={'/'}>
                        <span>2</span>
                    </Link>
                </li>
                <li className={cls.item}>
                    <Link className={cls.link} to={'/'}>
                        <span>3</span>
                    </Link>
                </li>
                <li className={cls.item}>
                    <Link className={cls.link} to={'/'}>
                        <span>4</span>
                    </Link>
                </li>
                <li className={cls.item}>
                    <Link className={cls.link} to={'/'}>
                        <span>5</span>
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Pagination;