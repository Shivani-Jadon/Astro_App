import React, { useEffect, useState } from 'react'
import Link from '@material-ui/core/Link';
import SearchIcon from '../assets/logo/search.png';
import FilterIcon from '../assets/logo/filter.png';
import SortIcon from '../assets/logo/sort.png';
import AstrologerList from './AstrologerList';
import AstrologerService from '../services/astrologer-service';

// The component 
function Astrologer() {
    const [displaySearch, toggleSearch] = useState(true);
    const [keyword, setKeyword] = useState('');
    const [astrologerList, updateList] = useState([]);

    useEffect(() => {
        const service = new AstrologerService();
        updateList(service.getAstrologers());
    }, [])

    const handleSearch = () => {
        toggleSearch(!displaySearch);
    }

    // onclick language filter will be shown
    const handleFilter = () => {
        
    }

    // fetching filtered list from service
    const getFilteredList = (language) => {
        const service = new AstrologerService();
        updateList(service.filterLanguage(language));
    }

    // onclick sort menu will be shown
    const handleSort = () => {
        
    }

    // fetching sorted list from service
    const getSortedList = (choice) => {
        const service = new AstrologerService();
        switch(choice){
            case 1 : updateList(service.sortExperienceAsc());
                    break;
            case 2 : updateList(service.sortExperienceDesc());
                    break;
            case 3 : updateList(service.sortPriceAsc());
                    break;
            case 4 : updateList(service.sortPriceDesc());
                    break;
            default : updateList(service.getAstrologers());
                    break;

        }
    }

    const changeInput = (event) => {
        setKeyword(event.target.value);
    }

    const searchList = () => {
        const service = new AstrologerService();
        updateList(service.searchAstrologers(keyword));
    }
    
    // searchBar element 
    const searchBar = () => {
        <div>
            <input type="text" placeholder="Search" value={keyword} onChange={changeInput}></input>
            <button onClick={searchList}>Search</button>
        </div>
    }

    return (
        <div>
            <span>
                Talk to an astrologer
            </span>
            {displaySearch && searchBar}
            
            <Link onClick={handleSearch}><img src={SearchIcon} height="24px" /></Link>
            <Link onClick={handleFilter}><img src={FilterIcon} height="24px" /></Link>
            <Link onClick={handleSort}><img src={SortIcon} height="24px" /></Link>

            {
               astrologerList.map(astrologer => {
                <AstrologerList astrologer={astrologer}/>
               }) 
            }

        </div>
    )
}

export default Astrologer;
