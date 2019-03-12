import React from 'react';
import { View, Button } from 'react-native';
class RadioButton extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            selected: false
        }
    }

    toggleSelected = function() {
        this.setState({
            selected: !this.state.selected
        });
    }
    render() {
        
        return (
            <Button title="" onPress={this.toggleSelected()}>
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
                        this.state.selected ?
                        <View style={{
                            height: 12,
                            width: 12,
                            borderRadius: 6,
                            backgroundColor: 'black',
                        }} />
                        : null
                    }
                    </View>
                </Button>
            );
        }
    }

export default RadioButton;