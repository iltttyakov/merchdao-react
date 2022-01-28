import React, {FC, useState} from 'react';
import cls from './Share.module.scss'
import Icon from "../Icon/Icon";
import { useDetectClickOutside } from 'react-detect-click-outside';


type ShareProps = {}

const Share: FC<ShareProps> = () => {
    const [openDropDown, setOpenDropDown] = useState(false)


    const closeDropDown = () => {
        setOpenDropDown(false)
    }
    const ref = useDetectClickOutside({onTriggered: closeDropDown})

    return (
        <div className={cls.box} ref={ref}>
            <ul className={cls.list}>

                <li className={cls.item}>
                    <Icon className={cls.icon} name={'twitter-round'} size={20}/>
                    <a className={cls.link} href={'#'}/>
                </li>

                <li className={cls.item}>
                    <Icon className={cls.icon} name={'social-round'} size={20}/>
                    <a className={cls.link} href={'#'}/>
                </li>

                <li className={cls.item}>
                    <Icon className={cls.icon} name={'facebook-round'} size={20}/>
                    <a className={cls.link} href={'#'}/>
                </li>

                <li className={cls.item} onClick={() => setOpenDropDown(!openDropDown)}>
                    <Icon className={cls.icon} name={'more-round'} size={20}/>
                </li>

            </ul>

            <ul className={[cls.dropDown, openDropDown ? cls.open : ''].join(' ')}>
                <li className={cls.dropDownItem}>
                    <Icon className={cls.dropDownIcon} name={'telegram-round'} size={24}/>
                    <span className={cls.dropDownText}>Telegram</span>
                    <a className={cls.link} href={'#'}/>
                </li>
                <li className={cls.dropDownItem}>
                    <Icon className={cls.dropDownIcon} name={'medium'} size={24}/>
                    <span className={cls.dropDownText}>Medium</span>
                    <a className={cls.link} href={'#'}/>
                </li>
                <li className={cls.dropDownItem}>
                    <Icon className={cls.dropDownIcon} name={'linkedin'} size={24}/>
                    <span className={cls.dropDownText}>Linkedin</span>
                    <a className={cls.link} href={'#'}/>
                </li>
                <li className={cls.dropDownItem}>
                    <Icon className={cls.dropDownIcon} name={'discord'} size={24}/>
                    <span className={cls.dropDownText}>Discord</span>
                    <a className={cls.link} href={'#'}/>
                </li>
            </ul>

        </div>
    );
};

export default Share;