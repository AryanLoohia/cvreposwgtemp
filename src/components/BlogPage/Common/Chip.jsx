import React from 'react'
import './ChipStyles.css'

const Chip = ({label}) => 
    <p className='chip-wrap'>
         {label}
    </p>;

export default Chip