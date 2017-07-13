import React, { Component } from 'react';
import MapView from 'react-native-maps';
import {
    StyleSheet,
    Text,
    Image,
    Dimensions,
    TextInput,
    View
} from 'react-native';
var {height, width} = Dimensions.get('window');
const localStyle = StyleSheet.create({
    searchBar:{
        backgroundColor:'black',
        padding:10,
        marginTop:10
    },
    searchInput:{
        backgroundColor:'#7067E7',
        borderColor:'white',
        borderWidth:1,
        borderRadius:20,
        height:40,
        fontFamily:'Roboto-Medium',
        fontSize:10,
        paddingLeft:15,
        paddingRight:15
    },
    map: {
        width:width,
        height:height
    },
    location:{
        position:'absolute',
        left:0,
        bottom:140,
        width:width,
        paddingLeft:20,
        paddingRight:20
    }
});

export default class MapScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            latitude: null,
            longitude: null,
            error: null,
            loading:true
        };
    }
    componentDidMount() {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                    error: null,
                    loading:false
                });
            },
            (error) => this.setState({ error: error.message }),
            { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
        );
    }

    render() {
        return (
            this.state.loading ? null :
                <View>
                    <MapView
                        style={localStyle.map}
                        region={{
            latitude: this.state.latitude,
            longitude: this.state.longitude,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
                    >
                        <MapView.Marker
                            coordinate={{
            latitude: this.state.latitude,
            longitude: this.state.longitude}}
                            title="Your Location"
                            description="Bangkok, Thailand"
                        />
                    </MapView>

                </View>
        );
    }
}

