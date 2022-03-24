import React, {useEffect, useState} from 'react';
import {
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import CustomText from '../shared/CustomText';
import {Colors} from '../../constants/colors';
import Icon from 'react-native-vector-icons/FontAwesome5';
import CustomTextBold from '../shared/CustomTextBold';

const CustomModal = ({
  visible,
  setVisible,
  onPressButton,
  data,
  onPressClose,
  title,
}) => {
  const [showData, setShowData] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    data && setShowData(data);
  }, [data]);

  const filter = () => {
    const keyword = search;
    if (keyword !== '') {
      const results = data.filter(item =>
        item.title ? item.title.includes(keyword) : item.name.includes(keyword),
      );
      setShowData(results);
    } else {
      setShowData(data);
    }
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={() => {
        setVisible(!visible);
      }}>
      <View
        style={[styles.centeredView, {backgroundColor: Colors.opacityMode}]}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <CustomTextBold>{title}</CustomTextBold>
            <TextInput
              placeholder="جستجو"
              style={styles.input}
              placeholderTextColor={Colors.title}
              textAlign="right"
              onChangeText={value => setSearch(perv => value)}
              onChange={filter}
            />
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={onPressClose}>
              <Icon
                name="long-arrow-alt-right"
                size={30}
                style={styles.textStyle}
              />
            </Pressable>
            <ScrollView style={{marginBottom: 20}}>
              {showData ? (
                showData.map(item => (
                  <TouchableOpacity
                    style={styles.row}
                    key={item.id}
                    onPress={() => onPressButton(item)}>
                    <CustomText style={styles.modalText}>
                      {item.title ? item.title : item.name}
                    </CustomText>
                    <Icon name="caret-left" size={20} />
                  </TouchableOpacity>
                ))
              ) : (
                <View>
                  <CustomText>loading</CustomText>
                </View>
              )}
            </ScrollView>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default CustomModal;

const styles = StyleSheet.create({
  centeredView: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    flex: 1,
    width: '100%',
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: '80%',
    height: '80%',
  },
  button: {
    borderRadius: 20,
    padding: 10,
  },
  buttonClose: {
    position: 'absolute',
    top: 5,
    left: 10,
  },
  textStyle: {
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 3,
    textAlign: 'left',
    padding: 10,
    flex: 1,
    fontSize: 15,
  },
  title: {
    alignSelf: 'center',
    fontSize: 25,
  },
  input: {
    marginVertical: 5,
    paddingVertical: 5,
    borderRadius: 8,
    borderWidth: 2,
    width: '100%',
    borderColor: Colors.lightGray,
  },
  row: {
    flexDirection: 'row',
    minWidth: '100%',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: Colors.opacityMode,
  },
});
