import React, {FC} from 'react';
import cls from './SubHeader.module.scss'
import Container from "../Container/Container";


type SubHeaderProps = {
    left?: JSX.Element,
    center?: JSX.Element,
    right?: JSX.Element,
}

const SubHeader: FC<SubHeaderProps> = (
    {
        left,
        center,
        right,
    }
) => {
    return (
        <div className={cls.box}>
            <Container className={cls.container}>
                <div className={cls.inner}>

                    <div className={cls.left}>
                        {left}
                    </div>


                    {
                        center
                            ? <div className={cls.center}>{center}</div>
                            : null
                    }

                    {
                        right
                            ? <div className={cls.right}>
                                {right}
                            </div>
                            : null
                    }

                </div>
            </Container>
        </div>
    );
};

export default SubHeader;