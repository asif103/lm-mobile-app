import {StyleSheet, Platform} from 'react-native';

export const CELL_SIZE = 50;
export const CELL_BORDER_RADIUS = 8;
export const DEFAULT_CELL_BG_COLOR = '#fff';
export const NOT_EMPTY_CELL_BG_COLOR = '#3557b7';
export const ACTIVE_CELL_BG_COLOR = '#f7fafe';

const styles = StyleSheet.create({
    codeFieldRoot: {
        /*height: CELL_SIZE,
        marginTop: 30,
        paddingHorizontal: 20,
        justifyContent: 'center',*/
    },
    cell: {
        marginHorizontal: 5,
        height: CELL_SIZE,
        width: CELL_SIZE,
        lineHeight: CELL_SIZE - 5,
        ...Platform.select({web: {lineHeight: 65}}),
        fontSize: 30,
        textAlign: 'center',
        borderRadius: CELL_BORDER_RADIUS,
        color: '#3759b8',
        backgroundColor: '#fff',

        // IOS
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        // Android
        elevation: 3,
    },

    // =======================

    root: {
        // minHeight: 800,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
    },
    modalView: {
        width:"90%",
        margin: 20,
        backgroundColor: "white",
        borderRadius: 10,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    title: {
        paddingTop: 50,
        color: '#000',
        fontSize: 25,
        fontWeight: '700',
        textAlign: 'center',
        paddingBottom: 40,
    },
    icon: {
        width: 150,
        height: 150,
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    subTitle: {
        fontWeight:'medium',
        fontSize:17,
        paddingVertical: 30,
        color: '#000',
        textAlign: 'center',
    },
    verifiedFailedText:{
        fontWeight:'medium',
        fontSize:17,
        paddingVertical: 30,
        color: '#77ACA2',
    },
    nextButton: {
        marginTop: 30,
        borderRadius: 9,
        height: 60,
        backgroundColor: '#77ACA2',
        justifyContent: 'center',
        minWidth: 300,
        marginBottom: 100,
    },
    nextButtonText: {
        textAlign: 'center',
        fontSize: 20,
        color: '#fff',
        fontWeight: '700',
    },
});

export default styles;