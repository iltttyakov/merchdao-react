import React, {FC} from 'react';
import cls from './CollectionCatalog.module.scss'
import Rubric from "../ui/Rubric/Rubric";
import Select from "../ui/Select/Select";
import Catalog from "../ui/Catalog/Catalog";


type CollectionCatalogProps = {}

import cover1 from '../../../public/card-full-cover-1.png'
import cover2 from '../../../public/card-full-cover-2.jpg'
import cover3 from '../../../public/card-full-cover-3.jpg'
import cover4 from '../../../public/card-full-cover-4.jpg'
import cover5 from '../../../public/card-full-cover-5.jpg'
import cover6 from '../../../public/card-full-cover-6.jpg'

import avatar1 from '../../../public/avatar-1.png'
import avatar2 from '../../../public/avatar-2.png'
import avatar3 from '../../../public/avatar-3.png'
import avatar4 from '../../../public/avatar-4.png'
import avatar5 from '../../../public/avatar-5.png'
import CollectionCard from "../ui/CollectionCard/CollectionCard";


const list = [
    {
        cover: cover1,
        avatar: avatar1,
        name: 'Planet collections',
        category: 'DLD',
        authorName: 'Daoland',
        description: 'The 100 Genesis Edition exoplanets are all uniquely designed, 1/1 ultra rare world collectibles t-shirt’s'
    },
    {
        cover: cover2,
        avatar: avatar2,
        name: 'Planet collections',
        category: 'DLD',
        authorName: 'Daoland',
        description: 'The 100 Genesis Edition exoplanets are all uniquely designed, 1/1 ultra rare world collectibles t-shirt’s'
    },
    {
        cover: cover3,
        avatar: avatar3,
        name: 'Planet collections',
        category: 'DLD',
        authorName: 'Daoland',
        description: 'The 100 Genesis Edition exoplanets are all uniquely designed, 1/1 ultra rare world collectibles t-shirt’s'
    },
    {
        cover: cover4,
        avatar: avatar4,
        name: 'Planet collections',
        category: 'DLD',
        authorName: 'Daoland',
        description: 'The 100 Genesis Edition exoplanets are all uniquely designed, 1/1 ultra rare world collectibles t-shirt’s',
        soldOut: true,
    },
    {
        cover: cover5,
        avatar: avatar5,
        name: 'Planet collections',
        category: 'DLD',
        authorName: 'Daoland',
        description: 'The 100 Genesis Edition exoplanets are all uniquely designed, 1/1 ultra rare world collectibles t-shirt’s'
    },
    {
        cover: cover6,
        avatar: avatar3,
        name: 'Planet collections',
        category: 'DLD',
        authorName: 'Daoland',
        description: 'The 100 Genesis Edition exoplanets are all uniquely designed, 1/1 ultra rare world collectibles t-shirt’s'
    },
]

const CollectionCatalogTrending: FC<CollectionCatalogProps> = () => {
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
                description={item['description']}
                size={'full'}
                soldOut={item['soldOut']}
            />
        )
    })

    return (
        <Rubric
            subtitle={'Trending'}
            title={'Collection projects'}
            controls={<Select name={'timeframe'} label={'timeframe'} options={[
                {value: 'this-month', label: 'This month'},
                {value: 'this-year', label: 'This year'},
                {value: 'this-century', label: 'This century'},
            ]}/>}
        >

            <Catalog items={items}/>
        </Rubric>
    );
};

export default CollectionCatalogTrending;