import React from 'react';
// import logo from './logo.svg';
import Header from './components/Header'
import MemeGenerator from './components/MemeGenerator'
import './App.css';

function App() {
  return (
    <div>
      <Header />

      <MemeGenerator />
    </div>
  )
}

// class App extends Component {
//   constructor () {
//     super()
//     this.state = {
//       meme : [],
//     }
//   }
  //
  // onSearchChange = (event) => {
  //   this.state.searchfield = event.target.value;
  //   // console.log(this.state.searchfield);
  //   // this.setState({ searchfield:event.target.value });
  //
  // }

  // onButtonClick = (event) => {
  //   console.log(this.state.searchfield);
  //   this.setState({ searchfield:this.state.searchfield });
  // }
  //
  // componentDidMount = () => {
  //   fetch('http://jsonplaceholder.typicode.com/users')
  //     .then(response => response.json())
  //     .then(user => this.setState( { robots : user}))
  // }



//   render() {
//
//     const { meme } = this.state;
//     return (
//       <div className=''>
//           <Header />
//           <MemeGenerator searchChange={this.onSearchChange} buttonClick={this.onButtonClick}   />
//       </div>
//     );
//   }
// }

export default App;
