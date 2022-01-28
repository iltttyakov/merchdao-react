import React, {FC} from 'react';
import cls from './CollectionCard.module.scss'
import roundedCorner from './rounded-corner.svg';

import {Link} from "react-router-dom";
import {COLLECTION_PAGE_ROUTE} from "../../routes";
import SoldOut from "../SoldOut";

const roundedCornerStyle = {
    backgroundImage: "url(" + roundedCorner + ")"
}

type CollectionCardProps = {
    cover: string,
    avatar: string,
    name: string,
    category: string,
    authorName: string,
    description?: string,
    size?: string,
    soldOut?: boolean,
}

const CollectionCard: FC<CollectionCardProps> = (
    {
        cover,
        avatar,
        name,
        category,
        authorName,
        description,
        size = 'full',
        soldOut = false
    }
) => {
    const clsArr = [cls.box]
    const isFull = size === 'full'

    if (isFull) {
        clsArr.push(cls.full)
    } else {
        clsArr.push(cls.small)
    }

    return (
        <div className={clsArr.join(' ')}>

            <div className={cls.top}>
                {
                    soldOut
                        ?
                        <div className={cls.soldOut}>
                            <SoldOut/>
                        </div>
                        : null
                }
                <div className={cls.coverContainer}>
                    <img className={cls.cover} src={cover}/>
                </div>
                <div className={cls.avatarContainer}>
                    <div className={[cls.roundedCorner, cls.left].join(' ')} style={roundedCornerStyle}/>
                    <img className={cls.avatar} src={avatar}/>
                    <div className={[cls.roundedCorner, cls.right].join(' ')} style={roundedCornerStyle}/>
                </div>
            </div>

            <div className={cls.main}>
                <div className={cls.mainInfo}>
                    <div className={cls.title}>
                        <h4 className={cls.name}>
                            {name}
                        </h4>
                        <span className={cls.category}>
                        {category}
                    </span>
                    </div>
                    <p className={cls.author}>
                    <span className={cls.by}>
                        by
                    </span>
                        <span className={cls.authorName}>
                        {authorName}
                    </span>
                    </p>
                </div>

                {
                    isFull
                        ? <div className={cls.description}>

                            <p className={cls.descriptionText}>
                                {description}
                            </p>

                            <div className={cls.viewOverlay}>
                                <div className={cls.view}>
                                    View collection
                                </div>
                            </div>

                        </div>
                        : null
                }

            </div>

            <Link to={COLLECTION_PAGE_ROUTE} className={cls.link}/>

        </div>
    );
};

export default CollectionCard;