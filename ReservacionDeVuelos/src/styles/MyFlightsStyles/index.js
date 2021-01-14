import {StyleSheet} from 'react-native';
import {colors} from '../Colors'

export const styles = StyleSheet.create({
  ListContainer: {
    padding: 15,
  },
  TopContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  middleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: colors.grayTitler
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  country: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  city: {
    color: colors.greyTitle,
  },
  border: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  }
});
