import React from 'react'
import './App.css';
import Cards from './Cards/Cards';
import Charts from './Charts/Charts'
import Countrypicker from './countrypicker/Countrypicker'
import {fetchdata,countrydata} from './api'

class App extends React.Component {

  

  state={
    data:{},
    Country:''
    
  }



async componentDidMount()
{
  const data=await fetchdata();
  this.setState({data});
//console.log(data)
}

handlechange= async (Country)=>
{
  const data=await fetchdata(Country)


console.log(Country)
  
  
  this.setState({data:data,Country:Country})
}


/*fectchcountry=async ()=>{

  const Country=await countrydata()
  this.setState({Country:Country})


}*/





  //console.log(data);
 //const dailydata={data:{Global}};
  render ()
  {
    const{data,Country}=this.state;

    return(
    <div className="App">
      <div className="cards">
        
      <Cards data={data}/>
      <Countrypicker handlechange={this.handlechange}/>
      <Charts data={data} Country={Country}/>
    
     
        
      </div>
     
    </div>

    )}
    
  
 
}

export default App;
