import React, {FC} from 'react';
import Product from "../ui/Product/Product";

import picture1 from '../../../public/product-picture.png'
import picture2 from '../../../public/product-card-picture-1.png'
import picture3 from '../../../public/product-card-picture-2.png'
import picture4 from '../../../public/product-card-picture-3.png'
import Popup from "../ui/Popup/Popup";

const productData = {
    gallery: [picture1,picture2,picture3,picture4,],
    count: 100,
    name: 'Awesome Donut NFT',
    authorName: 'Daoland',
    currency: 'poly',
    soldOut: true
}

const NftExample: FC = () => {
    return (
        <Product {...productData}/>
    );
};

export default NftExample;