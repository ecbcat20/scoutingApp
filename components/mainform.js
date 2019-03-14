import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

import t from 'tcomb-form-native'; // 0.6.9

const Form = t.form.Form;

const User = t.struct({
  email: t.String,
  username: t.String,
  password: t.String,
  terms: t.Boolean

  })

const Preliminaries = t.struct({
  'Match Type': t.String,
  'Team Number': t.String,
})

const SandStorm = t.struct({
  'Cargo in Ship - Accurate': t.Boolean,
  'Hatches on Ship - Accurate': t.Boolean,
  'Cargo in Rocket': t.Boolean,
  'Hatches on Rocket - High (2,3)': t.Boolean, default:"false",
  'Hatches on Rocket - Low (1)': t.Boolean,
  'Confirm': t.Boolean

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
        <Form type={User} />
        <Button
          title="Sign Up!"
          onPress={this.handleSubmit}
        />
      </View>
    );
  }
}