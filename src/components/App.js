import React from 'react';
import Header from './Header.js';
import ContestPreview from './ContestPreview';
import axios from 'axios';
//import data from '../testData.json';

class App extends React.Component {
/*    constructor(props){
      super(props);
      this.state={
          'pageHeader': 42
      }};*/

    state={
       pageHeader: "Naming Contests",
       contests: []
    };

    componentDidMount(){
        axios.get('/api/contests')
        .then(response => {
            this.setState({
                contests: response.data.contests
            });
        })
        .catch(console.error)
    }
 
    componentWillUnmount(){
      console.log('Component Will Unmount');
    }

    render(){
        return(
           <div className="App">
               <Header message="Naming Contests"/>
               
               <div>
                   {this.state.contests.map(contest =>
                    <ContestPreview {...contest} />
                )}
                    <ContestPreview {...this.state.contests[0]} />
                </div>
           </div>
        );
    }
}

/*const App = (props) => {
    return(
       <div className="App">
       <Header message="Naming Contests"/>
       <div>
        ...
       </div>
       </div>
    );
};*/

export default App;
