import {StyleSheet} from 'react-native';
import {colors} from '../Colors';

export const styles = StyleSheet.create({  
    FlightTitle: {
        color: colors.black,  
        fontSize: 35,
        fontWeight: 'bold',
        width: 300,
        marginBottom: 80,
    },
    BookingTextInput: { 
       height: 70,
       borderBottomColor: colors.black,
       borderBottomWidth: 1,
       fontSize: 20,
       borderBottomColor: colors.ligthGray,
    },
    BookingButton: {
        backgroundColor: colors.ligthGray,
        padding: 12,
        borderRadius: 10,
        justifyContent: 'center',
    },
    BookingButtonText: {
        textAlign: 'center',
        color: colors.white,
        fontWeight: 'bold',
        fontSize: 18,
    },
    ScreenContainer: {   
        marginTop: 50,
        marginBottom: 50,
        marginLeft: 20,
        marginRight: 20,
    },
    ContainerInformation: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '50%',
    },  
    ContainerFlightInformation: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '50%', 
    },  
    ContainerForm: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '50%',
    },
    BookingInformation: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: .5,
        borderColor: colors.ligthGray,
        height: 70, 
    },
    InformationFlightsTitle: {
        fontSize: 25,
        fontWeight: 'bold',
    },
    InformationFlightsSubtitle: {
        color: colors.ligthGray,
        marginTop: 5,
    },
    left:{
        alignSelf: 'flex-start',
    },
    plane: {
        alignSelf: 'center',
    },
});
