import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
      },
    titleContainer: {
        top: 24,
        marginBottom: 20,
        padding: 10,
        width: '100%',
    },
    Title: {
        fontSize: 40,
        color: 'black',
        fontWeight: 'bold',
        fontStyle: 'italic',
        textAlign: 'center',
    },
    seprator: {
        marginTop: 15,
    },
    addContainer: {
        marginTop: 20,
        backgroundColor: "darkorange",
        width: 325,
        padding: 10,
        borderRadius: 20,
        borderBottomWidth: 6,
        borderRightWidth:3,
        borderLeftWidth: 0.5, 
    },
    noteContainer: {
        marginTop: 20,
        backgroundColor: "orange",
        width: 325,
        padding: 15,
        borderRadius: 5,
        borderBottomWidth: 6,
        borderRightWidth:3,
        borderLeftWidth: 0.5,
        justifyContent: 'space-evenly',
    },
    subNoteContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    btnDelete: {
        width: 25,
        height: 25,
        borderRadius: 50,
        backgroundColor: 'red',
        borderWidth: 1,   
    },
    btnAdd: {
        alignSelf: 'flex-end',
        borderWidth: 1, 
        width: 70,
        padding: 5,
        borderRadius: 10,
        backgroundColor: 'green',
        alignItems: 'center',
    },
    btnUpdate: {
        position:'relative',
        width: 25,
        height: 25,
        borderRadius: 50,
        backgroundColor: 'blue',
        borderWidth: 1,   
    },
    text: {
        fontWeight: 'bold',
    },
})