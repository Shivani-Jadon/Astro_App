import React from 'react'
import Link from '@material-ui/core/Link';
import SearchIcon from '../assets/logo/search.png';
import FilterIcon from '../assets/logo/filter.png';
import SortIcon from '../assets/logo/sort.png';
import AstrologerList from './AstrologerList';

function Astrologer() {
    const handleSearch = () => {

    }

    const handleFilter = () => {
        
    }

    const handleSort = () => {

    }

    return (
        <div>
            <span>
                Talk to an astrologer
            </span>
            <Link onClick={handleSearch}><img src={SearchIcon} height="24px" /></Link>
            <Link onClick={handleFilter}><img src={FilterIcon} height="24px" /></Link>
            <Link onClick={handleSort}><img src={SortIcon} height="24px" /></Link>

            <AstrologerList />
        </div>
    )
}

export default Astrologer;
