import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import ReactMapboxGl, { Marker } from 'react-mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';


const imageLogo = "/logo-dark.png"

const Map = ReactMapboxGl({
    
    accessToken:
      'pk.eyJ1Ijoic2FtZWxhcGNlIiwiYSI6ImNrZ3J2dWJqaTA1dGgyc3BwbWFrc2xrd2kifQ.5DY93FBhruYtqYd82DTiVA',
    scrollZoom: false
});

const ContactMap = () => {
    return (
        <div>
            <Map
                style="mapbox://styles/mapbox/streets-v9"
                containerStyle={{
                    height: '70vh',
                    width: '100vw'
                }}
            >
                <Marker
                    coordinates={[-0.2416815, 51.5285582]}
                    anchor="bottom">
                    <img src={imageLogo}/>
                </Marker>
            </Map>
        </div>
        
    )
}
  

ContactMap.propTypes = {
  
}

ContactMap.defaultProps = {
  
}

export default ContactMap



