import { StyleSheet } from 'react-native'
import  Constants  from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#328695',
        alignItems: 'center',
        paddingTop: Constants.statusBarHeight,
      },
    loginSubContainer: {
        width: 300,
        marginTop: '45%',
        padding: 20,
        backgroundColor: '#f3f3f3',
        borderBottomWidth: 6,
        borderRightWidth:3,
        borderLeftWidth: 0.5,
        borderRadius: 10,
    },
    loginItems: {
        padding: 10,
        fontSize: 16,
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
    subTitle: {
        alignSelf: 'center',
        fontWeight: 'bold',
        fontSize: 25
    },
    seprator: {
        marginTop: 15,
    },
    generalContainer: {
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
    btnLogin: {    
        
        height: 50,
        borderRadius: 5,
        borderBottomWidth: 4,
        borderRightWidth:3,
        borderLeftWidth: 0.5, 
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'lightblue',
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
        alignSelf: 'flex-end',
        width: 25,
        height: 25,
        borderRadius: 5,
        backgroundColor: '#4272f1',
        borderWidth: 2,   
    },
    date: {
        fontSize: 16,
        fontWeight: 'bold',
        fontStyle: 'italic',
    },
    text: {
        width : '85%',
        fontSize: 16,
    },
    hint : {
        alignSelf: 'center',
        fontWeight: 'bold',
        backgroundColor: '#325695'
    },
    bottomNavContainer: {
        width: '100%',
        flexDirection: 'row',
        backgroundColor: '#284266',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: 60,
        borderTopWidth: 2,
        borderBottomWidth: 2,
    },
    navItems: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: 15,
    },
    bottomSubNavSubContainer: {
        justifyContent: 'center',
        height: '100%',
        width: '100%',
        borderRadius: 10,
        alignItems: 'center',
    }
})