import React from 'react';
import Cards from './components/Cards/Cards';
import Charts from './components/Charts/Charts';
import CountryPicker from './components/CountryPicker/CountryPicker';
import styles from './App.module.css';
import {fetchData} from './api';



class App extends React.Component 
{    
    state={
        data:{},
        country:'',
    }
    async componentDidMount()
    {

    const data = await fetchData();
    this.setState({data});
    

    }
    handleCountryChange = async (country)=>
    {
        const data = await fetchData(country);
        this.setState({data:data,country : country});
    }
    render()
    {   const {data,country}=this.state;
        return(
        <div className={styles.container}>
            <img className={styles.image} alt='covid-19'src="https://img.freepik.com/free-vector/coronavirus-bacterial-cells-white-medical-vector-background-with-typography-realistic-covid19-red-colored-viral-cells_156943-195.jpg?size=626&ext=jpg"/>
            <Cards data={data}/>
            <CountryPicker handleCountryChange={this.handleCountryChange}/>
            <Charts data={data} country={country}/>

        </div>
        )
    }
}
export default App;