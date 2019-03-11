import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import RadioButton from './components/RadioButton';

export default class App extends React.Component {
  render() {
    return (
      <ScrollView>
        <Text>Ignore this</Text>
        <Text>Also this</Text>
        <RadioButton />
      </ScrollView>
    );
  }
}