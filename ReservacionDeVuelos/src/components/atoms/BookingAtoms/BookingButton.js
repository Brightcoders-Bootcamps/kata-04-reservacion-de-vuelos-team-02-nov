import React from 'react'
import { View, Text, TouchableOpacity} from 'react-native'
import {BookingConstants} from '../../../utils/Constants';
import {styles} from '../../../styles/BookingStyles';

const BookingButton = () => {
    return (
        <View  >
            <TouchableOpacity style={styles.BookingButton}>
                <Text style={styles.BookingButtonText}>{BookingConstants.BtnText}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default BookingButton
