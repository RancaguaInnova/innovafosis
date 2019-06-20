import { GET_LIST, withDataProvider } from "react-admin";

import GoogleMapReact from "google-map-react";
import Marker from "./marker";
import React from "react";
import compose from "recompose/compose";
import { connect } from "react-redux";

class Live extends React.Component {
  static defaultProps = {
    center: {
      lat: -34.171,
      lng: -70.73
    },
    zoom: 14
  };
  constructor(props) {
    super(props);
    this.state = {
      Events: [],
      center: {
        lat: this.props.center.lat,
        lng: this.props.center.lng
      },
      zoom: 14
    };
  }

  componentDidMount() {
    this.fetchData();
  }
  componentDidUpdate(prevProps) {
    if (this.props.version !== prevProps.version) {
      this.fetchData();
    }
  }

  fetchData() {
    this.fetchEvents();
  }

  async fetchEvents() {
    const { dataProvider } = this.props;
    try {
      const { data: Events } = await dataProvider(GET_LIST, "Event", {
        filter: { state: "pendiente" },
        sort: {
          field: "date",
          order: "DESC"
        },
        pagination: {
          page: 1,
          perPage: 50
        }
      });

      this.setState({ Events });
    } catch (e) {}
  }
  _onBoundsChange = (center, zoom) => {
    this.setState({ center: center, zoom: zoom });
  };
  render() {
    const { dataProvider } = this.props;

    return (
      <div style={{ height: "100vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{
            key: "AIzaSyAmQ7APQAvy5cbGkGba-KZNT_VHHlLddeI"
          }}
          center={this.state.center}
          zoom={this.state.zoom}
          refresh
          onChange={this._onBoundsChange}
          {...this.props}
        >
          {this.state.Events.map((item, key) => (
            <Marker
              key={item.id}
              lat={item.Location.latitude}
              lng={item.Location.longitude}
              event={item}
              dataProvider={dataProvider}
            />
          ))}
        </GoogleMapReact>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  version: state.admin.ui.viewVersion
});

export default compose(
  connect(mapStateToProps),
  withDataProvider
)(Live);
