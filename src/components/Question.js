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
            <div className="label">Choose a category</div>
            <TextField
                id="outlined-select-currency"
                select
                label=""
                value={category}
                onChange={handleChange}
                fullWidth={true}
                className="selector"
                placeholder="Select from the category"
                >
                {categories.map((option) => (
                    <MenuItem key={option} value={option}>
                    {option}
                    </MenuItem>
                ))}
            </TextField>
            
            <Grid container spacing={1} className="info-grid">
                <Grid item xs={4}>
                    <span>&#8377; 99 </span>
                    <span className="gst">(including GST)</span>
                </Grid>
                <Grid item xs={4} className="ideas">
                    <span>Ideas what to ask</span>
                </Grid>
                <Grid item xs={4}>
                    <button className="btn">Ask a question</button>
                </Grid>
            </Grid>
        </div>

    return (
        <div>           
            <SectionHeader heading="Ask a question" msg={msg}/>
            <div className="form-container">{questionForm}</div>
        </div>
    )
}

export default Question;
