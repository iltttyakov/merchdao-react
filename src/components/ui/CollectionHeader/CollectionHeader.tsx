import React, {FC} from 'react';
import cls from './CollectionHeader.module.scss'
import Container from "../Container/Container";
import Share from "../Share/Share";
import Currency from "../Currency/Currency";


type CollectionHeaderProps = {
    cover: string,
    avatar: string,
    name: string,
    author: string,
    itemsCount: number,
    description: string,
    currency: string
}

const CollectionHeader: FC<CollectionHeaderProps> = (
    {
        cover,
        avatar,
        name,
        author,
        itemsCount,
        description,
        currency
    }
) => {
    return (
        <div className={cls.box}>

            <Container className={cls.container}>

                <div className={cls.top}>

                    <div className={cls.share}>
                        <Share/>
                    </div>

                    <div className={cls.currency}>
                        <Currency name={currency}/>
                    </div>

                    <div className={cls.coverContainer}>
                        <img className={cls.cover} src={cover} width={1032} height={180} alt={''}/>
                    </div>

                    <div className={cls.avatarContainer}>
                        <img className={cls.avatar} src={avatar} width={116} height={116} alt={''}/>
                    </div>

                </div>

                <div className={cls.main}>

                    <h1 className={cls.name}>
                        {name}
                    </h1>

                    <div className={cls.row}>

                        <p className={cls.author}>
                            <span className={cls.by}>By </span>
                            <span className={cls.authorName}>
                                {author}
                            </span>
                        </p>

                        <div className={cls.count}>
                            <span className={cls.countLabel}>
                                items
                            </span>
                            <span className={cls.countValue}>
                                {itemsCount}
                            </span>
                        </div>

                    </div>

                    <div className={cls.desc}>
                        <p>{description}</p>
                    </div>

                </div>

            </Container>

        </div>
    );
};

export default CollectionHeader;