import React, {FC} from 'react';
import cls from './SocialIcon.module.scss'
import Icon from "../Icon/Icon";


type SocialIconProps = {
    name: string,
    link: string,
}

const SocialIcon: FC<SocialIconProps> = ({name, link}) => {
    return (
        <div className={cls.box}>
            <Icon className={cls.icon} name={name} size={32}/>
            <a className={cls.link} href={link} target={'_blank'}/>
        </div>
    );
};

export default SocialIcon;