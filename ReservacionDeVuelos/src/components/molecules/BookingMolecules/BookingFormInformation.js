import React from 'react'
import {View} from 'react-native' 
import {styles} from '../../../styles/BookingStyles';
import {BookingConstants} from '../../../utils/Constants';
import BookingIcon from '../../atoms/BookingAtoms/BookingIcon';
import BookingTitle from '../../atoms/BookingAtoms/BookingTitle';

const BookingFormInformation = () => {
    return (
        <View style= {styles.ContainerInformation}>
            <BookingIcon />
            <BookingTitle title={BookingConstants.TitleOrigin}/> 
        </View>
    )
}

export default BookingFormInformation
