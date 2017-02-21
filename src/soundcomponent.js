import React from 'react';
import { SoundPlayerContainer } from 'react-soundplayer/addons';
import { PlayButton, Progress, Icons } from 'react-soundplayer/components';
//NEED TO INSTALL  "react-soundplayer"


const clientId = 'YOUR CLIENT ID';
const resolveUrl = 'https://soundcloud.com/thrilljockey/future-islands-balance';

class AppPlayer extends React.Component {
    constructor(){
        super();
    }

  render() {
          return (
              <SoundPlayerContainer
               clientId={clientId}
               resolveUrl={resolveUrl}
              >
              <Player />
              </SoundPlayerContainer>
          );
      }
    }

export default AppPlayer;