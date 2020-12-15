import React, { useEffect, useState } from 'react'

import './Countrypicker.css'
import { NativeSelect, FormControl } from '@material-ui/core';
import { countrydata } from '../api';

const Countrypicker = ({ handlechange }) => {
    const [country, setcountry] = useState([])


    useEffect(() => {

        const getcountrydata = async () => {
            const countries = await countrydata();
            setcountry(countries)

        }
        getcountrydata()
        console.log(country)

    }, [])




    return (

        <div className="form_div">



            <FormControl >
                <NativeSelect defaultValue=" " onChange={(e) => handlechange(e.target.value)}  >
                    <option value="">global</option>
                    {country.map((country, i) => (<option key={i} val={country}>{country}</option>))}

                </NativeSelect>


            </FormControl>







        </div>




    )

}

export default Countrypicker