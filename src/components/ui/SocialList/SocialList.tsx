import React, {FC} from 'react';
import cls from './SocialList.module.scss'
import SocialIcon from "../SocialIcon/SocialIcon";


type SocialProps = {
    items: Array<any>
}

const SocialList: FC<SocialProps> = ({items}) => {
    return (
        <div className={cls.box}>
            <ul className={cls.list}>

                {
                    Object.keys(items).map((keyName, i) => {
                        return (
                            <li className={cls.item} key={i}>
                                <SocialIcon
                                    name={items[i]['name']}
                                    link={items[i]['link']}
                                />
                            </li>
                        )
                    })
                }

            </ul>
        </div>
    );
};

export default SocialList;