import React from 'react';
import logo from './logo.svg';
import './App.css';
import Title from './Components/title';
import Description from './Components/description';
import ShowWatch from './Components/showwatch';


class App extends React.Component {

state = {
  styleName : 'Black Strap',
  imageUrl : 'https://imgur.com/iOeUBV7.png',
  feature : 'heartbeat'
  }
  colorOptions = [
    {
        styleName: 'Black Strap',
        imageUrl: 'https://imgur.com/iOeUBV7.png'
    },
    {
        styleName: 'Red Strap',
        imageUrl: 'https://imgur.com/PTgQlim.png'
    },
    {
        styleName: 'Blue Strap',
        imageUrl: 'https://imgur.com/Mplj1YR.png'
    },
    {
        styleName: 'Purple Strap',
        imageUrl: 'https://imgur.com/xSIK4M8.png'
    },
]

showclick(stylename) {
  var stlName = stylename;
  for(var i=0;i<this.colorOptions.length;i++) {
    if(this.colorOptions[i].styleName==stlName){
      var imgUrl = this.colorOptions[i].imageUrl;
      break;
    }
  }
  this.setState({
    styleName : stlName,
    imageUrl : imgUrl});
}

featureClicked = () => {
  var currentFeature = this.state.feature;
  if(currentFeature === 'heartbeat') {
    this.setState({feature : 'time'})
  }
  else
  {
    this.setState({feature : 'heartbeat'})
  }
}
  
  

  render (){
  var hour = new Date().getHours();
  var minute  = new Date().getMinutes();
  return (
    <div className="App">
      <span className={"left-area"}>
        <img src={this.state.imageUrl} className={"bigwatch-style"} />
        {
          this.state.feature === 'time' ?
          <p className={"time-feature"}>{hour}:{minute}</p> : 
        <p className={"time-feature"}> 
        💝 78</p>
          // <p id="heartemoji">
          //  <img src="https://townsquare.media/site/393/files/2017/01/heart-emoji-21.png?w=1200&h=0&zc=1&s=0&a=t&q=89" />
          // </p>
        }
      </span>
      <span className={"right-area"}>
        <Title />
        <Description />
        <h3>Select Color</h3>
          {
           this.colorOptions.map( (watch,pos) => {
            return (
              <span onClick={this.showclick.bind(this,watch.styleName)}><ShowWatch styleName={watch.styleName} imageUrl={watch.imageUrl} /></span>

            );
          }
          )
          }
          <h3>Features</h3>
          <div>
            <button className={"feature-button"} onClick={this.featureClicked}>Time</button>
            <button className={"feature-button"} onClick={this.featureClicked}>Heart Rate</button>
          </div>
       </span>
        
      </div>
  )
}
}

export default App;
