import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import Header from "./components/UI/Header";
import Aux from "./hoc/aux";
import Button from "./components/UI/Button";
const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

// state = {
//   latitude: null,
//   longitude: null,
//   error: null,
//   timestamp: null,
//   pos: null
// };


export default class App extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      latitude: null,
      longitude: null,
      timestamp: null,
      error: null,
    };
  }
  // toAlert=()=>{
  //   console.log(this.state.longitude);
  // };

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log(position);
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          timestamp: position.timestamp,
          error: null,
        });
      },
      (error) => this.setState({ error: error.message })
    );
  }
  // componentDidMount() {
  //   navigator.geolocation.getCurrentPosition(
  //     position => {
  //       // console.log(initialPosition);
  //       // console.log(position);
  //       const positionCoordinates = JSON.stringify(position);
  //       this.setState({
  //         pos: positionCoordinates
  //       });
  //     },
  //     error => alert(error.message),
  //     { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
  //   );
  // }

  render() {
    return (
      <Aux>
        <Header />
        <View style={styles.container}>
          <Text>Latitude: {this.state.latitude}</Text>
          <Text>Longitude: {this.state.longitude}</Text>
          <Text>Timestamp: {this.state.timestamp}</Text>
          <Button  />
        </View>
      </Aux>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
};
