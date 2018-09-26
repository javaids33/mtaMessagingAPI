import * as React from 'react';
import { Appbar } from 'react-native-paper';
import { StyleSheet } from 'react-native';

function refreshPage(){ 
    alert('refresh');
    // window.location.reload(); 
}
export default class MyComponent extends React.Component {
    
  render() {
    return (
      <Appbar >
        <Appbar.Action style={styles.bottom} icon="train" onPress={refreshPage} />
      </Appbar>
    );
  }
}

const styles = StyleSheet.create({
  bottom: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },
});