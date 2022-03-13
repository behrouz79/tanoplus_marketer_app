import React, {useEffect, useState} from 'react';
import MainScreen from './shared/MainScreen';
import {Alert, FlatList, StyleSheet, Text, View} from 'react-native';
import {useQuery} from 'react-query';
import {buySubscription, getServices} from '../api/services';
import ServiceCard from './ServiceCard';
import SubScriptionModal from './modals/SubScriptionModal';
import {customToast, LoadingToast, successToast} from '../utils/toasts';
import Toast from 'react-native-tiny-toast';

const SubScription = () => {
  const [services, setServices] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selected, setSelected] = useState(0);
  const {isLoading, error, data} = useQuery('services', getServices);

  useEffect(() => {
    setServices(data?.data);
  }, [data]);

  const showConfirmDialog = (service, subscription_id) => {
    return Alert.alert(
      'از خرید اشتراک مطمئن هستید؟',
      `شما در حال خرید سرویس ${service} هستید.`,
      [
        {
          text: 'بلی',
          onPress: () => {
            setModalVisible(!modalVisible);
            LoadingToast('اجرای درخواست ...');
            buySubscription(selected, subscription_id).then(
              ({data: {message, status}}) => {
                Toast.hide();
                if (status === 200) {
                  successToast(message);
                } else {
                  customToast(message);
                }
              },
            );
          },
        },
        {
          text: 'خیر',
        },
      ],
    );
  };

  return (
    <MainScreen style={styles.container}>
      {isLoading && (
        <View>
          <Text style={styles.text}>درحال بارگزاری</Text>
        </View>
      )}
      {error && (
        <View>
          <Text style={styles.text}>دریافت اطلاعات با خطا مواجه شد.</Text>
        </View>
      )}
      {services ? (
        <FlatList
          data={services}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <ServiceCard
              item={item}
              modalVisible={modalVisible}
              setModalVisible={setModalVisible}
              setSelected={setSelected}
            />
          )}
        />
      ) : (
        <View>
          <Text style={styles.text}>سرویسی ثبت نشده.</Text>
        </View>
      )}
      <SubScriptionModal
        visible={modalVisible}
        setVisible={setModalVisible}
        onPressButton={showConfirmDialog}
      />
    </MainScreen>
  );
};

export default SubScription;

const styles = StyleSheet.create({
  container: {},
  text: {
    marginTop: 15,
    justifyContent: 'center',
    alignSelf: 'center',
    fontSize: 15,
    fontWeight: 'bold',
  },
});