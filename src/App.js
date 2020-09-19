import React from 'react';
import ReactDOM from 'react-dom';
import { Video } from "./Components/Video";
import { Menu } from "./Components/Menu";

const VIDEOS = {
  Frolicky: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-fast.mp4',
  Chill: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-slow.mp4',
  Cute: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-cute.mp4',
  Shady: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-eek.mp4'
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { src: VIDEOS.fast };
    this.chooseVidoe=this.chooseVideo.bind(this);

    
  }

  chooseVideo=(newVideo)=> {
    this.setState({
      src: VIDEOS[newVideo]
    });
      
  }
  
  render() {
    return (
      <div>
        <h1>Click your VIBE to see your spirit animal!</h1>
        <Menu chooseVideo={this.chooseVideo}/>
        <Video src={this.state.src} />
      </div>
    );
  }
}
export default App;

