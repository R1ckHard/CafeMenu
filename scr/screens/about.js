import React from 'react';
import {View, Text, FlatList, TouchableOpacity, Image} from 'react-native';
import {globalStyles} from '../styles/global';
import {deleteItemFromCart} from '../redux/actions/cartAction';
import {connect} from 'react-redux';

function About({navigation,cartItems,deleteItemFromCart}) {
    function toPay(arr) {
        let sum = 0;
        for (let val of Object.values(arr)) {
            sum += val.amount*val.price;
        }
        return sum;
    }
    return (
        <View style={globalStyles.container}>
            <Text style={{
                alignSelf:'center',
                fontSize: 18,
                fontWeight: 'bold',
                color: '#333',
            }}>
                Total payable: ${toPay(cartItems)}
            </Text>
            <FlatList data={cartItems} keyExtractor={item => item.id.toString()} renderItem={({item}) => (
                <TouchableOpacity
                    onLongPress={()=>deleteItemFromCart(item)}
                    onPress={() => navigation.navigate('MoreAbout')}
                >
                    <View style={globalStyles.item}>
                        <Image style={globalStyles.dishImg} source={{uri: item.img}}/>
                        <View style={globalStyles.menuListItem}>
                            <Text  numberOfLines={1} style={globalStyles.titleText}>{item.name}</Text>
                        </View>
                        <Text style={globalStyles.price}>${item.price}x{item.amount}</Text>
                    </View>
                </TouchableOpacity>
            )}/>
        </View>
    );
}
const mapStateToProps = (state) => {
    // console.log(state);
    return {
        cartItems: state.cartStore.cartItems
    }
}

const mapDispatchToProps = {
    deleteItemFromCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(About);
