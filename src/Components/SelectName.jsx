import React, {useState} from "react";
import { TextField, MenuItem } from '@mui/material';
import '../style.sass';

export default function SelectName(props) {

    const dataSelect = [
        {id: 1, name: 'Igor'},
        {id: 2, name: 'Lena'},
        {id: 3, name: 'Oleg'},
        {id: 4, name: 'Vsevold'}
    ]

    const [selectCategory, setSelectCategory] = useState('');

    const onChange = (data) => {
        setSelectCategory(data.target.value)
    }

    return (
        <TextField  select label='Выберите что-нибудь...'  value={selectCategory} style={{width: '260px' , height: '50px'}} variant='filled' onChange={onChange} >
            {dataSelect.map((category, i) =>
                <MenuItem 
                    sx={[ 
                    category.id !== selectCategory && {  
                        '&:hover': {
                            color: 'white',
                            backgroundColor: '#3D28E1'
                        },
                    },
                    category.id === selectCategory && {
                        color: '#3D28E1'
                        }
                    ]} key={i} value={category.id} 
                >
                    <span className='ui__select'>
                        {category.name}
                    </span>
                </MenuItem>
            )}
        </TextField>  
    )
}