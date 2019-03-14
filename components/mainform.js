import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

import t from 'tcomb-form-native'; // 0.6.9

const Form = t.form.Form;

const Scout = t.struct({
  email: t.String,
  username: t.String,
  password: t.String,
  terms: t.Boolean

  })

const Preliminaries = t.struct({
  'Match Type': t.String,
  'Team Number': t.String,
})
//Data collected in sandstorm 
const SandStorm = t.struct({
  'Descend from Level 2': t.String,
  'Descend from Level 1': t.String,
  'Cargo in Ship - Accurate': t.Boolean,
  'Hatches on Ship - Accurate': t.Boolean,
  'Cargo in Rocket': t.Boolean,
  'Hatches on Rocket - High (2,3)': t.Boolean, default:"false",
  'Hatches on Rocket - Low (1)': t.Boolean,
  'Confirm': t.Boolean

})
//Rocket-related fields
const TeleOpRocket = t.struct({
  'Rocket Hatch Level 1': t.String,
  'Rocket Hatch Level 2': t.String,
  'Rocket Hatch Level 3': t.String,
  'Rocket Cargo Level 1': t.String,
  'Rocket Cargo Level 2': t.String,
  'Rocket Cargo Level 3': t.String,
})

const TeleOpCargoShip = t.struct({
  'Cargo Hatches': t.String,
  'Cargo Cargo': t.String,
})

const EndGame = t.struct({
  'Climb Tier 3': t.String,
  'Climb Tier 3': t.String,
  'Park': t.String,
  'None': t.String,
})

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Form type={User} /> {/* Notice the addition of the Form component */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 50,
    padding: 20,
    backgroundColor: '#ffffff',
  },
});

export default class App extends Component {
  handleSubmit = () => {
    // do the things  
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Form type={Scout} />
        <Button
          title="Submit"
          onPress={this.handleSubmit}
        />
      </View>
    );
  }
}