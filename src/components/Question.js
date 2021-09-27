import React from 'react'
import SectionHeader from './SectionHeader';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import MenuItem from '@material-ui/core/MenuItem';

const msg = "Select category and ask question from astrologers";
const categories = ["Love", "Career", "Marriage", "More"];


function Question() {
    const [category, setCategory] = React.useState('Select');

    const handleChange = (event) => {
    setCategory(event.target.value);
    };

    const questionForm = 
        <div>
            <h3>Choose a category</h3>
            <TextField
                id="outlined-select-currency"
                select
                label="Select a category"
                value={category}
                onChange={handleChange}
                fullWidth={true}
                >
                {categories.map((option) => (
                    <MenuItem key={option} value={option}>
                    {option}
                    </MenuItem>
                ))}
            </TextField>
            
            <Grid container spacing={2}>
                <Grid item md={5}>
                    <span>$99 including GST</span>
                </Grid>
                <Grid item md={3}>
                    <span>Ideas what to ask</span>
                </Grid>
                <Grid item md={3}>
                    <button>Ask a question</button>
                </Grid>
            </Grid>
        </div>

    return (
        <div>           
            <SectionHeader heading="Ask a question" msg={msg}/>
            <div>{questionForm}</div>
        </div>
    )
}

export default Question;
