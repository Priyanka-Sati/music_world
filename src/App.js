// first create an account in spotify and spotify developer to get keys for connecting out app to spotify
import React, { useEffect, useState } from 'react';
// install spotify-web-api-js 
// it helps in creating instance for doing stuff
import SpotifyWebApi from 'spotify-web-api-js';

import './App.css';
import Login from './Login';
import Player  from './Player';
import { getTokenFromUrl } from './spotify';
import { useDataLayerValue } from './DataLayer';

// instance of spotify whic allow us to do stuff and help in communicating
const spotify = new SpotifyWebApi();

function App() {

  const [{user, token}, dispatch] = useDataLayerValue(); // global store datalayer

  // Run code based on given condition
  useEffect(() => {
    const hash = getTokenFromUrl(); // pulling access token
    // clear the access token from url
    window.location.hash = ""; // dont show access token in url for security reasn 

    const _token = hash.access_token;
    
    if(_token){

      dispatch({
        type: "SET_TOKEN",
        token: _token
      })

      // connect spotify to react
      spotify.setAccessToken(_token);
      // get user account
      spotify.getMe().then(user => {
        dispatch({
          type: 'SET_USER',
          user: user
        })
      });
    }

    // console.log('**', token);
  }, []);

  return (
    <div className="app">
      {
        token ? (
          <Player spotify={spotify}/>
        ) : (
          <Login />
        )
      }
    </div>
  );
}

export default App;
