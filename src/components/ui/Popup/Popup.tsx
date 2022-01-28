import React, {FC} from 'react';
import cls from './Popup.module.scss'
import Icon from "../Icon/Icon";


type PopupProps = {
    size?: string,
    open?: boolean,
    closeFunc?: () => void
}

const Popup: FC<PopupProps> = (
    {
        children,
        size = 'small',
        open = false,
        closeFunc = () => {
        },
    }
) => {

    return (
        <div
            className={[
                cls.overlay,
                open ? cls.open : '',
                size === 'small' ? cls.small : cls.big
            ].join(' ')}
        >

            <div
                className={cls.closeArea}
                onClick={closeFunc}
            />

            <div className={cls.inner}>

                <button className={cls.closeButton} onClick={closeFunc}>
                    <Icon className={cls.closeIcon} name={'close'} size={36}/>
                </button>

                <div className={cls.card}>
                    {children}
                </div>

            </div>

        </div>
    );
};

export default Popup;