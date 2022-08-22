import React from "react";
import '../style.sass';
import {Radio, FormGroup, FormControlLabel} from '@mui/material';

export default function RadioButton() {

    const [selectedValue, setSelectedValue] = React.useState('a');

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };

    const controlProps = (item) => ({
        checked: selectedValue === item,
        onChange: handleChange,
        value: item,
        name: 'color-radio-button-demo',
        inputProps: { 'aria-label': item },
    });

    return ( 
            <div className="ui__buttonWrap__item">    
            
                <FormGroup>
                    <FormControlLabel disabled control={
                        <Radio  
                            {   ...controlProps('b')}
                            sx={{
                                color: '#3E29E3',
                                '&.Mui-checked': {
                                    color: '#3E29E3',
                                },
                            }}
                                size="medium" 
                        />} 
                        label="Disabled" 
                    />
                    <FormControlLabel control={
                        <Radio  
                            {   ...controlProps('c')}
                            sx={{
                                color: '#3E29E3',
                                '&.Mui-checked': {
                                    color: '#3E29E3',
                                },
                            }}
                                size="medium" 
                            />} 
                        label="Click me!" 
                    />
                    <FormControlLabel control={
                        <Radio 
                        {   ...controlProps('a')} 
                            sx={{
                                color: '#3E29E3',
                                '&.Mui-checked': {
                                    color: '#3E29E3',
                                },
                            }}
                                size="medium"  
                            />} 
                            label="Click me!" 
                    />
                </FormGroup>
            </div>
    )
}