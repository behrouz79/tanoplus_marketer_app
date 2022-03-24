import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import {Colors} from '../../constants/colors';
import CustomText from '../shared/CustomText';
import Icon from 'react-native-vector-icons/FontAwesome5';
import CustomTextBold from '../shared/CustomTextBold';

const CardButton = ({onPress, icon, title, description}) => {
  return (
    <TouchableOpacity style={[styles.cardContainer, {}]} onPress={onPress}>
      <Icon name={icon} size={30} color={Colors.title} />
      <CustomTextBold style={styles.cardTitle}>{title}</CustomTextBold>
      <CustomText style={styles.subTitle}>{description}</CustomText>
    </TouchableOpacity>
  );
};

export default CardButton;

const styles = StyleSheet.create({
  subTitle: {
    color: Colors.subTitle,
    fontSize: 11,
    textAlign: 'left',
  },
  cardContainer: {
    padding: 15,
    margin: 8,
    backgroundColor: Colors.lightGray,
    borderRadius: 8,
    width: '50%',
    flex: 2,
    alignItems: 'flex-start',
  },
  cardTitle: {
    marginTop: 12,
    fontSize: 15,
    textAlign: 'center',
  },
  title: {
    marginTop: 32,
    marginLeft: 24,
    color: Colors.title,
    fontSize: 14,
  },
});
