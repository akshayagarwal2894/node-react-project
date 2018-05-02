import React from 'react';
import Header from './Header.js';

class App extends React.Component {
/*    constructor(props){
      super(props);
      this.state={
          'pageHeader': 42
      }};*/

    state={
       pageHeader: "Naming Contests"
    };

    componentDidMount(){
      console.log('Did Mount');
//      debugger;
    }
 
    componentWillUnmount(){
      console.log('Component Will Unmount');
//      debugger;
    }

    render(){
        return(
           <div className="App">
               <Header message="Naming Contests"/>
               <div>
                    {this.state.pageHeader}
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
