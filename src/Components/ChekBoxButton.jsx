import React from "react";
import '../style.sass';
import { Checkbox, FormGroup, FormControlLabel } from "@mui/material";

export default function ChekBoxButton() {

    return (
        
        <div className="ui__buttonWrap__item">   
            
            <FormGroup>
                <FormControlLabel disabled control={
                    <Checkbox  
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
                    <Checkbox  
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
                    <Checkbox  
                        sx={{
                            color: '#3E29E3',
                            '&.Mui-checked': {
                                color: '#3E29E3',
                            },
                        }}
                            size="medium" defaultChecked 
                        />} 
                        label="Click me!" 
                />
            </FormGroup>
        </div>
    )
}