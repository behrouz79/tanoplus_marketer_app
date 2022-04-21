import React from 'react';
import MainScreen from '../components/shared/MainScreen';
import {useQuery} from 'react-query';
import {magiketOrderList} from '../api/magiket';
import CustomText from '../components/shared/CustomText';
import {FlatList} from 'react-native';
import RowView from '../components/shared/RowView';
import {StyleSheet} from 'react-native';

const OrderCard = ({item}) => {
  return (
    <RowView style={styles.container}>
      <CustomText>{item.product}</CustomText>
      <CustomText>{item.update_date}</CustomText>
      <CustomText>{item.status}</CustomText>
    </RowView>
  );
};

const MagiketOrderScreen = () => {
  const {isError, isLoading, data} = useQuery(
    'magiketOrderList',
    magiketOrderList,
  );

  return (
    <MainScreen>
      {isError && <CustomText>مشکلی رخ داده است</CustomText>}
      {isLoading && <CustomText>درحال دریافت اطلاعات</CustomText>}
      {console.log(data)}
      {data && (
        <FlatList
          data={data}
          renderItem={OrderCard}
          keyExtractor={(item, index) => index}
        />
      )}
    </MainScreen>
  );
};

export default MagiketOrderScreen;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    marginHorizontal: 5,
    marginVertical: 2,
    borderRadius: 8,
    padding: 5,
    justifyContent: 'space-between',
  },
});
