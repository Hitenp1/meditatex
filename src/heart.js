import React from 'react';
import Play from 'react-icons/lib/md/play-circle-outline';
import Pause from 'react-icons/lib/md/pause-circle-outline';
import Home from 'react-icons/lib/md/home';
import Info from 'react-icons/lib/md/info-outline';
import { Link } from 'react-router'
import ToggleDisplay from 'react-toggle-display';

class Heart extends React.Component {
   constructor(props) {
    super(props);
    this.state = {
      playing: false,
      currentTime:0,
      info: false
    };
    const thisState = this;
    this.timefunc = function(){
    let duration = Math.floor(thisState.audio.duration - thisState.audio.currentTime);
    let min = Math.floor( duration / 60 );
    let secOrg = Math.floor( duration % 60 );
    let sec = secOrg >= 10 ? secOrg : '0' + secOrg;
    thisState.setState({currentTime: `${min}:${sec}`})
    }
    const music = require("./audio/heart1.mp3");
    this.audio = new Audio(music);
    this.playSong = this.playSong.bind(this);
    this.pauseSong = this.pauseSong.bind(this);
    this.updateTime = this.updateTime.bind(this);
    this.toggleInfo = this.toggleInfo.bind(this);
    }

    updateTime(){
    this.audio.addEventListener('timeupdate', this.timefunc )
    }


    playSong() {
      this.setState({playing: true})
      this.audio.play();
      console.log('playing')
  }

    pauseSong() {
      this.setState({playing:false})
      this.audio.pause();
      console.log('paused')
  }

  toggleInfo(){
     this.setState({info: !this.state.info})
  }

   componentDidMount(){
    this.updateTime();
  }

  componentWillUnMount(){
    this.audio.removeEventListener('timeupdate', this.timefunc )
  }

   render() {
      return (
         <div className="heart-app">
            <div className="main-heart">
              <div className="main-heart-title">
                Heart
              </div>
                <p className="heart-p">
                  Just Love.
                </p>
                <div className="heart-icon" onClick={this.state.playing ? this.pauseSong : this.playSong}>
                { this.state.playing ? <Pause size={45}/> : <Play size={45}/> }
                </div>
                <div>
                 {this.state.currentTime || this.audio.currentTime ? <p className="main-time-heart">{`Time Remaining: ${this.state.currentTime}`}</p> : null}
                </div>
                <div className="icon-home-heart"><Link to="/" style={{ textDecoration: 'none', color: 'black'}}><Home size={30}/></Link></div>
                <div className="icon-info-heart"><Info size={29} color='black' onClick={this.toggleInfo}/></div>
                 <ToggleDisplay show={this.state.info}>
                     <div className="tooltip-heart">
                      9 minute positive emotion meditation
                    </div>
                </ToggleDisplay>
            </div>
       </div>
      );
   }
}

export default Heart;
