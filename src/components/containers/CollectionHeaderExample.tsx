import React, {FC} from 'react';
import CollectionHeader from "../ui/CollectionHeader/CollectionHeader";

import cover from '../../../public/collection-cover.png'
import avatar from '../../../public/collection-avatar.png'


const CollectionHeaderExample: FC = () => {
    return (
        <CollectionHeader
            cover={cover}
            avatar={avatar}
            name={'Daoland’s Explosion'}
            author={'Daoland'}
            itemsCount={755}
            description={'This site is operated by Amalgamated Token Services Inc. through its wholly-owned subsidiary, Pielabs Services, LLC (together, “Pielabs”), which is not a registered broker-dealer.'}
            currency={'poly'}
        />
    );
};

export default CollectionHeaderExample;