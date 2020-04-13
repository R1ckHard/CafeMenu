import {Dimensions, StyleSheet} from 'react-native';

export const globalStyles = StyleSheet.create({
    titleText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        marginHorizontal: 10,
    },
    paragraph: {
        marginVertical: 8,
        lineHeight: 20,
    },
    container: {
        alignContent: 'center',
        flex: 1,
        padding: 20,
    },
    item: {
        backgroundColor:'white',
        flexDirection: 'row',
        padding: 16,
        marginTop: 16,
        borderColor: '#bbb',
        borderWidth: 1,
        borderStyle: 'solid',
        borderRadius: 10,
        justifyContent: 'space-between',
    },
    logo: {
        position: 'absolute',
        left: 10,
        top: 5,
        padding: 10,
        width: 50,
        height: 50,
    },
    dishImg: {
        padding: 10,
        width: 50,
        height: 50,
        alignSelf: 'flex-start',

    },
    price: {
        fontWeight: 'bold',
        fontSize: 15,
        alignSelf: 'center',
    },
    menuListItem: {
        padding: 10,
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        flexBasis: 220,
    },

    menuListDescription: {
        fontSize: 16,
        fontStyle: 'italic',
        alignSelf: 'center',
    },
    info:{

        flexDirection:'column',
        padding: 10,
        alignItems:'center',
        justifyContent:'flex-start'
    },
    bigItemImg:{
        padding: 10,
        width: 200,
        height: 200,
        borderColor: '#333',
        borderWidth: 1,

    }
});
