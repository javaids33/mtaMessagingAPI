import * as React from "react";
import { Button } from "react-native-paper";
import Aux from "../../hoc/aux";

const button = props => (
  <Aux>
    {/* <Button icon="add-a-photo" mode="contained" onPress={props.getLocat}>
      Send Location
    </Button> */}
    <Button icon="add-a-photo" mode="contained" onPress={props.sendAlert}>
      Send Alert
    </Button>
  </Aux>
);

export default button;
