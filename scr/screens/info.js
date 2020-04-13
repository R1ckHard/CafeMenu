import React, {useState} from 'react';
import {View, Text, Image, Button, Picker,Alert} from 'react-native';
import {globalStyles} from '../styles/global';
import {connect} from 'react-redux';
import {setItemToCart} from '../redux/actions/cartAction';

function Info({route, setItemToCart, cartItems}) {
    const item = route.params;
    const [selectedValue, setSelectedValue] = useState('1');
    return (
        <View style={globalStyles.container}>
            <View style={globalStyles.info}>
                <Image style={globalStyles.bigItemImg} source={{uri: item.img}}/>
                <View style={{
                    paddingTop: 35,
                }}>
                    <Text style={globalStyles.titleText}>{item.name}</Text>
                    <Text style={globalStyles.menuListDescription}>{item.description}</Text>

                </View>
                <View style={{
                    paddingTop: 35,
                    flexDirection: 'row',
                    marginHorizontal: 10,
                }}>
                    <Button
                        onPress={() => {
                            item.amount=selectedValue;
                            Alert.alert(
                                'Added!',
                                'You order is added to cart',
                            [ { text: "OK",style:'default', onPress: () => console.log("OK Pressed") }]
                            );
                            setItemToCart(item);
                            // console.log(item);
                        }}
                        title={`Add to Card $${item.price}`}
                        // color="#841584"
                    />

                </View>
                <Picker
                    mode='dropdown'
                    selectedValue={selectedValue}
                    style={{
                            height: 50,
                            width: 150,
                        }
                    }
                    onValueChange={(itemValue, itemIndex) => {
                        setSelectedValue(itemValue);
                        console.log(itemValue, itemIndex);
                    }}
                >
                    <Picker.Item label="1" value="1"/>
                    <Picker.Item label="2" value="2"/>
                    <Picker.Item label="3" value="3"/>
                    <Picker.Item label="4" value="4"/>
                    <Picker.Item label="5" value="5"/>
                </Picker>
            </View>
        </View>

    );
}

const mapStateToProps = (state) => {
    // console.log(state);
    return {
        cartItems: state.cartStore.cartItems,
    };
};

const mapDispatchToProps = {
    setItemToCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(Info);
