import React from 'react'
import { View, TextInput} from 'react-native'
import {BookingConstants} from '../../../utils/Constants';
import {styles} from '../../../styles/BookingStyles';

const BookingAddLocation = () => {
    return (
        <View  >
            <TextInput placeholder={BookingConstants.TextInput} style={styles.BookingTextInput}></TextInput>  
        </View>
    )
}

export default BookingAddLocation;
