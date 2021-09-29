import React, { useEffect, useState } from 'react'
import Link from '@material-ui/core/Link';
import SearchIcon from '../assets/logo/search.png';
import FilterIcon from '../assets/logo/filter.png';
import SortIcon from '../assets/logo/sort.png';
import AstrologerList from './AstrologerList';
import AstrologerService from '../services/astrologer-service';
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@material-ui/core';

// The component 
function Astrologer() {
    const [displayFilter, toggleFilter] = useState(false);
    const [displaySearch, toggleSearch] = useState(false);
    const [displaySort, toggleSort] = useState(false);
    const [keyword, setKeyword] = useState('');
    const [astrologerList, updateList] = useState([]);

    useEffect(() => {
        const service = new AstrologerService();
        updateList(service.getAstrologers());
    }, [])

    // this method will toggle the state of search
    const handleSearch = () => {
        toggleSearch(!displaySearch);
    }

    // onclick language filter will be shown
    const handleFilter = () => {
        toggleFilter(!displayFilter)
    }

    // onclick sort menu will be shown
    const handleSort = () => {
        toggleSort(!displaySort);
    }

    // fetching sorted list from service
    const getSortedList = (event) => {
        let choice = event.target.value;
        console.log("sort clicked " + choice);
        const service = new AstrologerService();
        
        switch(choice){
            case '1' : updateList(service.sortExperienceAsc());
                    break;
            case '2' : updateList(service.sortExperienceDesc());
                    break;
            case '3' : updateList(service.sortPriceAsc());
                    break;
            case '4' : updateList(service.sortPriceDesc());
                    break;
            default : updateList(service.getAstrologers());
                    break;
        }
    }

     // fetching filtered list from service
    const getFilteredList = (event) => {
        let language = event.target.value;
        const service = new AstrologerService();
        updateList(service.filterLanguage(language));
    }

    // fetch the search result
    const searchList = () => {
        const service = new AstrologerService();
        updateList(service.searchAstrologers(keyword));
    }
    
    
    const changeInput = (event) => {
        setKeyword(event.target.value);
    }


    
    // searchBar element 
    const searchBar = 
        <div>
            <input type="text" placeholder="Search" value={keyword} onChange={changeInput}></input>
            <button onClick={searchList}>Search</button>
            <button onClick={handleSearch}>x</button>
        </div>

    // sort menu
    const sortElement = 
    <FormControl component="fieldset" onClick={() => getFilteredList}>
        <FormLabel component="legend">Sort</FormLabel>
        <RadioGroup
        aria-label="sort"
        name="radio-buttons-group"
        >
        <FormControlLabel value="1" onClick={(event) => getSortedList(event)} control={<Radio />} label="Experience low to high" />
        <FormControlLabel value="2" onClick={(event) => getSortedList(event)} control={<Radio />} label="Experience high to low" />
        <FormControlLabel value="3" onClick={(event) => getSortedList(event)} control={<Radio />} label="Price low to high" />
        <FormControlLabel value="4" onClick={(event) => getSortedList(event)} control={<Radio />} label="Price high to low" />
        </RadioGroup>
    </FormControl>


    // filter menu
    const filterElement = <FormControl component="fieldset" onClick={() => getFilteredList}>
        <FormLabel component="legend">Language Filter</FormLabel>
        <RadioGroup
        aria-label="language filter"
        name="radio-buttons-group"
        >
        <FormControlLabel value="hindi" onClick={(event) => getFilteredList(event)} control={<Radio />} label="Hindi" />
        <FormControlLabel value="english" onClick={(event) => getFilteredList(event)} control={<Radio />} label="English" />
        <FormControlLabel value="tamil" onClick={(event) => getFilteredList(event)} control={<Radio />} label="Tamil" />
        <FormControlLabel value="marathi" onClick={(event) => getFilteredList(event)} control={<Radio />} label="Marathi" />
        </RadioGroup>
    </FormControl>




    return (
        <div style={{marginTop: 20, marginBottom: 70}}>
            <span>
                Talk to an astrologer
            </span>

            <Link onClick={handleSearch}><img src={SearchIcon} height="24px" /></Link>
            <Link onClick={handleFilter}><img src={FilterIcon} height="24px" /></Link>
            <Link onClick={handleSort}><img src={SortIcon} height="24px" /></Link>

            {displaySearch && searchBar}
            {displaySort && sortElement}
            {displayFilter && filterElement}
            

            {
               astrologerList.map(astrologer => (
                <AstrologerList astrologer={astrologer}/>
               )) 
            }

        </div>
    )
}

export default Astrologer;
