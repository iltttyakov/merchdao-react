import React, {FC, useState} from 'react';
import SubHeader from "../ui/SubHeader/SubHeader";
import Select from "../ui/Select/Select";
import Tabs from "../ui/Tabs/Tabs";
import Filter from "../ui/Filter/Filter";
import Button from "../ui/Button/Button";


type CollectionSubHeaderProps = {}

const sortSelect = <Select name={'soring'} options={[
    {value: 'value-1', label: 'Recently added'},
    {value: 'value-1', label: 'Select item 1'},
    {value: 'value-2', label: 'Select item 2'},
    {value: 'value-3', label: 'Select item 3'},
    {value: 'value-4', label: 'Select item 4'},
    {value: 'value-5', label: 'Select item 5'},
]}/>

const navTabs = <Tabs name={'navigation'} options={[
    {value: 'all-items', label: 'All items'},
    {value: 'art', label: 'Art'},
    {value: 't-shirt', label: 'T-Shirt'},
    {value: 'nft-card', label: 'NFT CollectionCard'},
    {value: 'socs', label: 'Socs'}
]}/>

const networkOptions = [
    {value: 'value-1', label: 'All'},
    {value: 'value-1', label: 'Select item 1'},
    {value: 'value-2', label: 'Select item 2'},
    {value: 'value-3', label: 'Select item 3'},
    {value: 'value-4', label: 'Select item 4'},
    {value: 'value-5', label: 'Select item 5'},
]

const projectOptions = [
    {value: 'value-1', label: 'Daoland'},
    {value: 'value-1', label: 'Select item 1'},
    {value: 'value-2', label: 'Select item 2'},
    {value: 'value-3', label: 'Select item 3'},
    {value: 'value-4', label: 'Select item 4'},
    {value: 'value-5', label: 'Select item 5'},
]

const lauchOptions = [
    {value: 'value-1', label: 'Lauched'},
    {value: 'value-1', label: 'Select item 1'},
    {value: 'value-2', label: 'Select item 2'},
    {value: 'value-3', label: 'Select item 3'},
    {value: 'value-4', label: 'Select item 4'},
    {value: 'value-5', label: 'Select item 5'},
]

const filterItems = [
    <Select name={'network'} options={networkOptions} label={'Network'}/>,
    <Select name={'project'} options={projectOptions} label={'Project'}/>,
    <Select name={''} options={lauchOptions} label={'lauch'}/>
]

const CatalogSubHeader: FC<CollectionSubHeaderProps> = () => {
    const [filterIsOpen, setFilterIsOpen] = useState(false)

    return (
        <>
            <SubHeader
                left={sortSelect}
                center={navTabs}
                right={
                    <Button onClick={() => {
                        setFilterIsOpen(!filterIsOpen)
                    }}>
                        Filter
                    </Button>
                }
            />
            <Filter
                isOpen={filterIsOpen}
                items={filterItems}
            />
        </>
    );
};

export default CatalogSubHeader;