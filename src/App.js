import React, { Component } from 'react'
import Cards from './Components/Card/Cards';
import {getRepos} from './API/API';
import 'uikit/dist/css/uikit.css';


class App extends Component {
  
  constructor(props){
    super(props);
    this.state ={ 
      isLoading: true,
      page : 1,
      items : []
    }
  }

  componentDidMount(){

    let date = "2019-11-17"
    getRepos(date,this.state.page).then( data => {
      this.setState({
        items :[ ...this.state.items, ...data.items],
        isLoading : false
      })
    });

  }

  render() {
    console.log(this.state.items)
    return (  
        <div className="App">
          { this.state.items.map( (item) => (
            <Cards key = { item.id } repos = { item }/>
          ))
          } 
        </div>
    )
  }
}

export default App;