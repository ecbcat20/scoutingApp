import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import RadioButton from './components/RadioButton';

export default class App extends React.Component {
  render() {

    function RadioButton(props) {
      return (
          <View style={[{
            height: 24,
            width: 24,
            borderRadius: 12,
            borderWidth: 2,
            borderColor: '#000',
            alignItems: 'center',
            justifyContent: 'center',
          }, props.style]}>
            {
              props.selected ?
                <View style={{
                  height: 12,
                  width: 12,
                  borderRadius: 6,
                  "icon": /assets/splash.png,
                  backgroundColor: '#000',
                }}/>
                : null
            }
          </View>
      );
    }
  }
}