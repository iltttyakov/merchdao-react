import React, {FC} from 'react';
import cls from './Rubric.module.scss'
import Container from "../Container/Container";
import Title from "../Title/Title";


type RubricProps = {
    subtitle: string,
    title: string,
    controls?: JSX.Element,
}

const Rubric: FC<RubricProps> = (
    {
        subtitle,
        title,
        children,
        controls
    }
) => {
    return (
        <div className={cls.box}>

            <Container className={cls.container}>

                <div className={cls.header}>

                    <div className={cls.headerLeft}>
                        <p className={cls.subtitle}>
                            {subtitle}
                        </p>
                        <Title className={cls.title}>
                            {title}
                        </Title>
                    </div>

                    {
                        controls
                            ? <div className={cls.controls}>
                                {controls}
                            </div>
                            : null
                    }

                </div>

                <div className={cls.content}>

                    {children}

                </div>

            </Container>

        </div>
    );
};

export default Rubric;