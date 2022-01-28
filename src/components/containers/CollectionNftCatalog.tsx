import React, {FC} from 'react';
import Catalog from "../ui/Catalog/Catalog";
import ProductCard from "../ui/ProductCard/ProductCard";

import picture1 from '../../../public/product-card-picture-1.png'
import picture2 from '../../../public/product-card-picture-2.png'
import picture3 from '../../../public/product-card-picture-3.png'
import picture4 from '../../../public/product-card-picture-4.png'
import picture5 from '../../../public/product-card-picture-5.png'
import picture6 from '../../../public/product-card-picture-6.png'
import picture7 from '../../../public/product-card-picture-7.png'
import picture8 from '../../../public/product-card-picture-8.png'
import Pagination from "../ui/Pagination/Pagination";
import Container from "../ui/Container/Container";


const list = [
    {
        name: 'Merchdao #234',
        price: 0.755,
        currency: 'poly',
        count: 100,
        gallery: [picture2, picture5, picture6, picture1],
        soldOut: false,
    },
    {
        name: 'Merchdao #234',
        price: 0.755,
        currency: 'poly',
        count: 100,
        gallery: [picture8, picture3, picture5, picture6],
        soldOut: true,
    },
    {
        name: 'Merchdao #234',
        price: 0.755,
        currency: 'poly',
        count: 100,
        gallery: [picture4, picture2, picture1, picture7],
        soldOut: false,
    },
    {
        name: 'Merchdao #234',
        price: 0.755,
        currency: 'poly',
        count: 100,
        gallery: [picture5, picture1, picture5, picture2],
        soldOut: false,
    },
    {
        name: 'Merchdao #234',
        price: 0.755,
        currency: 'poly',
        count: 100,
        gallery: [picture6, picture2, picture1, picture7],
        soldOut: true,
    },
    {
        name: 'Merchdao #234',
        price: 0.755,
        currency: 'poly',
        count: 100,
        gallery: [picture7, picture1, picture2, picture8],
        soldOut: false,
    },
]


const items: JSX.Element[] = []

Object.keys(list).map((keyName, i) => {
    const item = list[i]

    items.push(
        <ProductCard
            name={item['name']}
            price={item['price']}
            currency={item['currency']}
            count={item['count']}
            gallery={item['gallery']}
            soldOut={item['soldOut']}
        />
    )
})

const CollectionNftCatalog: FC = () => {
    return (
        <Container>
            <Catalog
                items={items}
                navigation={<Pagination/>}
            />
        </Container>
    );
};

export default CollectionNftCatalog;