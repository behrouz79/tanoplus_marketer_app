import {Modal, Pressable, View} from 'react-native';
import CustomText from '../shared/CustomText';

const MagiketDesModal = () => {
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={visible}
        onRequestClose={() => {
          setVisible(!visible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <CustomText style={styles.modalText}>{phone}</CustomText>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setVisible(!visible)}>
              <CustomText style={styles.textStyle}>X</CustomText>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default MagiketDesModal;
