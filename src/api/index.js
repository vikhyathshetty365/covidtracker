import axios from 'axios';

const url=' https://covid19.mathdro.id/api';

export const fetchdata= async (country)=>{

let changeurl=url

if(country)
{
    changeurl=`${url}/countries/${country}`
}
   
    try{
     const {data:{confirmed,recovered,deaths}}=await axios.get(changeurl);

     return {confirmed,recovered,deaths}

    /*const{data}=fetch

    const{Global}=data
   
    const{NewConfirmed,NewDeaths,NewRecovered,TotalConfirmed,TotalDeaths,TotalRecovered}=Global*/

    
    //return{NewConfirmed,NewDeaths,NewRecovered,TotalConfirmed,TotalDeaths,TotalRecovered}
    

       }

       
        

    
    catch(e)
    {
        console.log(e);
    }
}


export const countrystats=async (country)=>
{
    

try{
    let changeurl=`${url}/countries/${country}`
    console.log(country)
   const fetchdata=await axios.get(changeurl)
   const{data:{confirmed,deaths,recovered}}=fetchdata
return {confirmed,deaths,recovered}

}
catch(e)
{
    console.log(e)
}




}

export const countrydata=async ()=>{
try
{
    const{data:{countries}}=await axios.get(`${url}/countries`);
    
return countries.map((country)=>country.name)
    

    

   
}





catch(e)
{
    console.log(e)
}
   
}
    
export const getdailydata=async()=>
{
try{
    const data=await axios.get('https://api.covidtracking.com/v1/us/daily.json')
   // console.log(data)
    const sub=data.data

    return sub
   
}
catch(e)
{
    console.log(e)
}


}


