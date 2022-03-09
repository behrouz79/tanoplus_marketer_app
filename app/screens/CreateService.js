import React, {useState} from 'react';
import MainScreen from '../components/shared/MainScreen';
import {useQuery} from 'react-query';
import {getCategory, getSubCategory} from '../api/services';
import {
  ScrollView,
  StyleSheet,
  Modal,
  Text,
  View,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import * as Yup from 'yup';
import CustomImageFormField from '../components/forms/CustomImageFormField';
import {CustomForm, CustomFormField, SubmitButton} from '../components/forms';
import CustomModal from '../components/modals/CustomModal';

const CreateService = () => {
  const [logo, setLogo] = useState('');
  const [banner, setBanner] = useState('');
  const [provinceVisible, setProvinceVisible] = useState(false);
  const [cityVisible, setCityVisible] = useState(false);
  const [cityList, setCityList] = useState(false);
  const [job, setJob] = useState('انتخاب فعالیت');
  const [province, setProvince] = useState('انتخاب مکان');
  const [city, setCity] = useState('انتخاب شهر');
  const {isLoading, error, data} = useQuery('category', getCategory);

  const openCity = async id => {
    setProvinceVisible(false);
    setCityVisible(true);
    let {data: city_res} = await getSubCategory(id);
    setCityList(city_res);
  };

  const closeCity = () => {
    setProvinceVisible(true);
    setCityVisible(false);
    setCityList(false);
  };

  const selectCity = item => {
    setJob(item.title);
    setCityVisible(!cityVisible);
  };

  const handleSubmit = values => {
    let data = new FormData();
    data.append('logo', values.logo);
    data.append('banner', values.banner);
    data.append('job_id', job);
    console.log(data);
  };

  const validationSchema = Yup.object().shape({
    logo: Yup.string().required('این فیلد الزامی است.').trim(),
    banner: Yup.string().required('این فیلد الزامی است.').trim(),
    name: Yup.string().required('این فیلد الزامی است.').trim(),
    family: Yup.string().required('این فیلد الزامی است.').trim(),
    invite_code: Yup.string().required('این فیلد الزامی است.').trim(),
  });

  return (
    <MainScreen style={styles.container}>
      <CustomForm
        initialValues={{
          logo: '',
          banner: '',
          job_id: 0,
          name: '',
          family: '',
          invite_code: '',
        }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}>
        <ScrollView>
          <CustomFormField
            placeholder="نام"
            autoCorrect={false}
            placeholderTextColor="royalblue"
            name="name"
          />
          <CustomFormField
            placeholder="نام خانوادگی"
            autoCorrect={false}
            placeholderTextColor="royalblue"
            name="family"
          />
          <CustomFormField
            placeholder="کد دعوت"
            autoCorrect={false}
            keyboardType="numeric"
            placeholderTextColor="royalblue"
            name="invite_code"
          />
          <TouchableOpacity
            onPress={() => setProvinceVisible(!provinceVisible)}>
            <Text style={styles.job}>{job}</Text>
          </TouchableOpacity>
          <CustomImageFormField
            title="logo"
            name="logo"
            image={logo}
            setImage={setLogo}
          />
          <CustomImageFormField
            title="banner"
            name="banner"
            image={banner}
            setImage={setBanner}
          />
          <TouchableOpacity
            onPress={() => setProvinceVisible(!provinceVisible)}>
            <Text style={styles.job}>{job}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setProvinceVisible(!provinceVisible)}>
            <Text style={styles.job}>{job}</Text>
          </TouchableOpacity>
          <View style={{width: '90%', alignSelf: 'center'}}>
            <SubmitButton title="ساخت حساب" />
          </View>
        </ScrollView>
      </CustomForm>
      <CustomModal
        visible={provinceVisible}
        setVisible={setProvinceVisible}
        data={data}
        onPress={openCity}
      />
      <CustomModal
        visible={cityVisible}
        setVisible={setCityVisible}
        data={cityList}
        onPress={selectCity}
      />
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={cityVisible}
          onRequestClose={() => {
            setCityVisible(!cityVisible);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <ScrollView style={{marginBottom: 20}}>
                {cityList ? (
                  cityList.map(item => (
                    <TouchableOpacity key={item.id} onPress={() => {}}>
                      <Text style={styles.modalText}>{item.title}</Text>
                    </TouchableOpacity>
                  ))
                ) : (
                  <View>
                    <Text>Loading</Text>
                  </View>
                )}
              </ScrollView>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={closeCity}>
                <Text style={styles.textStyle}>بازگشت به دسته بندی</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      </View>
    </MainScreen>
  );
};

export default CreateService;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'lightgray',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
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
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    backgroundColor: 'lightgray',
    marginBottom: 3,
    textAlign: 'center',
    padding: 10,
    flex: 1,
    minWidth: '100%',
    borderRadius: 15,
    fontSize: 15,
    fontWeight: 'bold',
  },
  containerImage: {
    flex: 1,
    width: '90%',
    margin: 10,
    alignSelf: 'center',
    backgroundColor: '#04b040',
    borderRadius: 15,
    shadowColor: '#E67E22',
    shadowOpacity: 0.8,
    elevation: 8,
    height: 100,
  },
  bg: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    alignSelf: 'center',
    fontSize: 25,
    fontWeight: 'bold',
  },
  job: {
    textAlign: 'center',
    padding: 10,
    backgroundColor: 'lightblue',
    borderRadius: 25,
    width: '80%',
    alignSelf: 'center',
  },
});
