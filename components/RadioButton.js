import React from 'react';
import { View, Button } from 'react-native';
class RadioButton extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            buttonColor: 'white',
            selected: false
        }
    }

    changeColor = function() {
        if (this.state.buttonColor == 'black') {
            this.setState({
                buttonColor: 'white',
                selected: false
            });
        } else {
            this.setState({
                buttonColor: 'black',
                selected: true
            });
        }
    }
    render() {
        
        return (
            <Button title="" onPress={this.changeColor()}>
            <View style={[{
                height: 24,
                width: 24,
                borderRadius: 12,
                borderWidth: 2,
                borderColor: '#000',
                alignItems: 'center',
                justifyContent: 'center',
            }, this.props.style]}>
            {
                this.props.selected ?
                <View style={{
                    height: 12,
                    width: 12,
                    borderRadius: 6,
                    backgroundColor: this.state.buttonColor,
                }} />
                : null
            }
            </View>
            </Button>
            );
        }
    }

export default RadioButton;