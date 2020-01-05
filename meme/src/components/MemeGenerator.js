import React, { Component } from 'react';



class MemeGenerator extends Component {
 constructor () {
   super()
   this.state = {
      top_text : "",
      bottom_text: "",
      images: "http://i.imgflip.com/1bij.jpg",
      allMemeImgs: []
   }
 }


 componentDidMount = () => {
   fetch('https://api.imgflip.com/get_memes')
     .then(response => response.json())
     .then(response => {
       const {memes} = response.data
       // console.log({memes});
       this.setState({ allMemeImgs : memes})
     })
 }

 handleChange = (event) => {
   // console.log(event.target.value);
   this.setState({top_text: event.target.value});
 }
 handleChange2 = (event) => {
   // console.log(event.target.value);
   this.setState({bottom_text: event.target.value});
 }

 handleSubmit = (event) => {
   // console.log('A name was submitted: ');
   event.preventDefault();
   console.log("connnnnnnnard");
   const imgIndex = Math.floor(Math.random() * this.state.allMemeImgs.length);
   // console.log(this.state.allMemeImgs[imgIndex].url);
   this.setState({images: this.state.allMemeImgs[imgIndex].url});
 }

 render() {



   return (
     <div className='flex'>
       <form className='meme-form'>
         <input type="text" placeholder="Write something funny"  onChange={this.handleChange} />
         <input type="text" placeholder="Write something funnier"  onChange={this.handleChange2} />
         <button id="button" onClick={this.handleSubmit}>Gen</button>
       </form>
       <div className="meme">
        <img src={this.state.images} />
          <h2 className="top">{this.state.top_text}</h2>
          <h2 className="bottom">{this.state.bottom_text}</h2>
       </div>
       <button className='print' onClick={() => window.print()}>Print</button>
     </div>
   );
 }
}

export default MemeGenerator;
