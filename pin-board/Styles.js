import { StyleSheet } from 'react-native'
import  Constants  from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#328695',
        alignItems: 'center',
        paddingTop: Constants.statusBarHeight,
      },
    titleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginBottom: 10,
        padding: 10,
        width: 360,
    },
    Title: {
        fontSize: 40,
        color: 'white',
        fontWeight: 'bold',
        fontStyle: 'italic',
        textAlign: 'center',
    },
    seprator: {
        marginTop: 15,
    },
    addContainer: {
        marginTop: 20,
        backgroundColor: "#f3f3f3",
        padding: 10,
        marginRight: 6,
        borderRadius: 20,
        borderBottomWidth: 6,
        borderRightWidth:3,
        borderLeftWidth: 0.5, 
    },
    noteContainer: {
        padding: 15,
        borderRadius: 6,
        borderBottomWidth: 6,
        marginRight: 6,
        borderRightWidth:3,
        borderLeftWidth: 1,
        marginBottom: 5,
    },
    subNoteContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    btnDelete: {
        width: 25,
        height: 25,
        borderRadius: 25,
        backgroundColor: '#f30826',
        borderWidth: 2,   
    },
    btnAdd: {
        alignSelf: 'flex-end',
        borderWidth: 2, 
        width: 50,
        padding: 5,
        borderRadius: 10,
        backgroundColor: '#26A557',
        alignItems: 'center',
    },
    btnUpdate: { 
        width: 25,
        height: 25,
        borderRadius: 5,
        backgroundColor: '#4272f1',
        borderWidth: 2,   
    },
    date: {
        fontWeight: 'bold',
        fontStyle: 'italic',
    },
    text: {
        width : '85%',
        fontWeight: 'bold',
    },
    hint : {
        alignSelf: 'center',
        fontWeight: 'bold',
        backgroundColor: '#325695'
    }
})