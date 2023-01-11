import React from "react";

export default class DisplayMapClass extends React.Component {
  mapRef = React.createRef();
  state = {
    map: null
  };

  componentDidMount() {
    const H = window.H;
    const platform = new H.service.Platform({
        apikey: "xsQwagft6PIetjPjPW2Wl266epIn-uaHU5u1pi_Aogg"
    });

    const defaultLayers = platform.createDefaultLayers();
    
    const map = new H.Map(
      this.mapRef.current,
      defaultLayers.vector.normal.map,
      {
        center: { lat: this.props.lat, lng: this.props.lng },
        zoom: 15,
        pixelRatio: window.devicePixelRatio || 1
      }
    );
    var parisMarker = new H.map.Marker({ lat: this.props.lat, lng: this.props.lng });
    map.addObject(parisMarker);
    const behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));

    const ui = H.ui.UI.createDefault(map, defaultLayers,'fr-FR');
  


    this.setState({ map });
  }


  render() {
    return <div className="map" ref={this.mapRef} style={{ height: "400px", width: "700px" }} />;
  }
}