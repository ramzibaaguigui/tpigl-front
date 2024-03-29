import React from "react";

export default class DisplayMapClass extends React.Component {
  mapRef = React.createRef();
  state = {
    map: null,
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const H = window.H;
    const platform = new H.service.Platform({
      apikey: "xsQwagft6PIetjPjPW2Wl266epIn-uaHU5u1pi_Aogg",
    });

    const defaultLayers = platform.createDefaultLayers();

    const map = new H.Map(
      this.mapRef.current,
      defaultLayers.vector.normal.map,
      {
        center: { lat: this.props.lat, lng: this.props.lng },
        zoom: 15,
        pixelRatio: window.devicePixelRatio || 1,
      }
    );
    var Marker = new H.map.Marker({ lat: this.props.lat, lng: this.props.lng });
    map.addObject(Marker);
    const behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));

    const ui = H.ui.UI.createDefault(map, defaultLayers, "fr-FR");

    this.setState({ map });
  }

  render() {
    const { setIsOpen } = this.props;
    return (
      <>
        <div
          className="w-full h-screen absolute top-0 left-0 backdrop-blur-sm z-40"
          onClick={() => setIsOpen(false)}
        />
        <div className="login bg-white fixed rounded-xl drop-shadow-2xl w-9/12 max-w-screen-sm overflow-hidden z-50">
          <div
            className="map"
            ref={this.mapRef}
            style={{ height: "400px", width: "100%" }}
          />
          
        </div>
      </>
    );
  }
}
