import React, {FC} from 'react';

import Rubric from "../ui/Rubric/Rubric";
import Carousel from "../ui/Carousel/Carousel";
import CollectionCard from "../ui/CollectionCard/CollectionCard";

import cover1 from '../../../public/card-small-cover-1.jpg'
import cover2 from '../../../public/card-small-cover-2.jpg'
import cover3 from '../../../public/card-small-cover-3.jpg'
import cover4 from '../../../public/card-small-cover-4.jpg'

import avatar from '../../../public/avatar-1.png'


const list = [
    {
        cover: cover1,
        avatar: avatar,
        name: 'Planet collections',
        category: 'DLD',
        authorName: 'Daoland',
    },
    {
        cover: cover2,
        avatar: avatar,
        name: 'Planet collections',
        category: 'DLD',
        authorName: 'Daoland',
    },
    {
        cover: cover3,
        avatar: avatar,
        name: 'Planet collections',
        category: 'DLD',
        authorName: 'Daoland',
    },
    {
        cover: cover4,
        avatar: avatar,
        name: 'Planet collections',
        category: 'DLD',
        authorName: 'Daoland',
    },
    {
        cover: cover1,
        avatar: avatar,
        name: 'Planet collections',
        category: 'DLD',
        authorName: 'Daoland',
    },
    {
        cover: cover2,
        avatar: avatar,
        name: 'Planet collections',
        category: 'DLD',
        authorName: 'Daoland',
    },
]

const CollectionsSmallSlider: FC = () => {
    const items: JSX.Element[] = []

    Object.keys(list).map((keyName, i) => {
        const item = list[i]

        items.push(
            <CollectionCard
                cover={item['cover']}
                avatar={item['avatar']}
                name={item['name']}
                category={item['category']}
                authorName={item['authorName']}
                size={'small'}
                soldOut={true}
            />
        )
    })

    return (
        <Rubric subtitle={'Finished'} title={'Projects'}>

            <Carousel items={items} size={'small'}/>

        </Rubric>
    );
};

export default CollectionsSmallSlider;