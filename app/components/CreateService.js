import React, {useState} from 'react';
import MainScreen from './shared/MainScreen';
import {useQuery} from 'react-query';
import {
  createServiceApi,
  getCategory,
  getCity,
  getProvince,
  getSubCategory,
} from '../api/services';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import * as Yup from 'yup';
import CustomImageFormField from './forms/CustomImageFormField';
import {CustomForm, CustomFormField, SubmitButton} from './forms';
import CustomModal from './modals/CustomModal';
import {customToast, LoadingToast, successToast} from '../utils/toasts';
import Toast from 'react-native-tiny-toast';

const CreateService = ({navigation}) => {
  const [logo, setLogo] = useState('');
  const [banner, setBanner] = useState('');
  const [categoryVisible, setCategoryVisible] = useState(false);
  const [subCategoryVisible, setSubCategoryVisible] = useState(false);
  const [subCategoryList, setSubCategoryList] = useState(false);
  const [category, setCategory] = useState({id: 0, title: 'انتخاب فعالیت'});
  const [subCategory, setSubCategory] = useState({
    id: 0,
    title: 'انتخاب فعالیت',
  });
  const [provinceVisible, setProvinceVisible] = useState(false);
  const [cityVisible, setCityVisible] = useState(false);
  const [cityList, setCityList] = useState(false);
  const [province, setProvince] = useState({id: 0, name: 'انتخاب استان'});
  const [city, setCity] = useState({id: 0, name: 'انتخاب شهر'});
  const {data: category_items} = useQuery('category', getCategory);
  const {data: province_items} = useQuery('province', getProvince);

  const openSubCategory = async item => {
    setCategoryVisible(false);
    setSubCategoryVisible(true);
    setCategory(item);
    let {data: subcategory_res} = await getSubCategory(item.id);
    setSubCategoryList(subcategory_res);
  };

  const closeSubCategory = () => {
    setCategoryVisible(true);
    setSubCategoryVisible(false);
    setSubCategoryList(false);
    setCategory({id: 0, title: 'انتخاب فعالیت'});
  };

  const selectSubCategory = item => {
    setSubCategory(item);
    setSubCategoryVisible(!subCategoryVisible);
  };

  const openCity = async item => {
    setProvinceVisible(false);
    setCityVisible(true);
    setProvince(item);
    let {data: city_res} = await getCity(item.id);
    setCityList(city_res);
  };

  const selectCity = item => {
    setCity(item);
    setCityVisible(!cityVisible);
  };

  const closeCity = () => {
    setProvinceVisible(true);
    setCityVisible(false);
    setCityList(false);
    setProvince({id: 0, name: 'انتخاب استان'});
  };

  const handleSubmit = async values => {
    if (subCategory.id === 0) {
      customToast('انتخاب فعالیت اجباری است.');
    } else {
      values = {
        ...values,
        logo: `data:${values.logo.mime};base64,${values.logo.data}`,
        banner: `data:${values.banner.mime};base64,${values.banner.data}`,
        category: subCategory.id,
        province: province.id,
        city: city.id,
      };
      LoadingToast('ساخت حساب ...');
      const result = await createServiceApi(values);
      Toast.hide();
      switch (result.status) {
        case 201:
          successToast(result.message);
          navigation.goBack();
          break;
        case 406 || 409:
          customToast(result.message);
          break;
        default:
          customToast('مشکلی پیش آمده! مجددا تلاش کنید.');
      }
    }
  };

  const validationSchema = Yup.object().shape({
    phone: Yup.string()
      .required('این فیلد الزامی است.')
      .trim()
      .matches('^(09)([0-9]{9})$', 'فرمت صحیح نیست.'),
    firstname: Yup.string().required('این فیلد الزامی است.').trim(),
    family: Yup.string().required('این فیلد الزامی است.').trim(),
    name: Yup.string().required('این فیلد الزامی است.').trim(),
    logo: Yup.object().required('این فیلد الزامی است.'),
    banner: Yup.object().required('این فیلد الزامی است.'),
  });

  return (
    <MainScreen style={styles.container}>
      <CustomForm
        initialValues={{
          phone: '',
          logo: '',
          banner: '',
          firstname: '',
          family: '',
          name: '',
        }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}>
        <ScrollView>
          <CustomFormField
            placeholder="موبایل"
            autoCorrect={false}
            keyboardType="numeric"
            placeholderTextColor="royalblue"
            name="phone"
          />
          <CustomFormField
            placeholder="نام"
            autoCorrect={false}
            placeholderTextColor="royalblue"
            name="firstname"
          />
          <CustomFormField
            placeholder="نام خانوادگی"
            autoCorrect={false}
            placeholderTextColor="royalblue"
            name="family"
          />
          <CustomFormField
            placeholder="نام سرویس"
            autoCorrect={false}
            placeholderTextColor="royalblue"
            name="name"
          />
          <TouchableOpacity
            onPress={() => setCategoryVisible(!categoryVisible)}>
            <Text style={styles.job}>
              {category.title}, {subCategory.title}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setProvinceVisible(!provinceVisible)}>
            <Text style={styles.job}>
              {province.name}, {city.name}
            </Text>
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
          <View style={{width: '90%', alignSelf: 'center'}}>
            <SubmitButton title="ساخت سرویس" />
          </View>
          <CustomModal
            visible={categoryVisible}
            setVisible={setCategoryVisible}
            data={category_items?.data}
            onPressButton={openSubCategory}
            onPressClose={() => {
              setCategoryVisible(!categoryVisible);
            }}
          />
          <CustomModal
            visible={subCategoryVisible}
            setVisible={setSubCategoryVisible}
            data={subCategoryList}
            onPressButton={selectSubCategory}
            onPressClose={closeSubCategory}
          />

          <CustomModal
            visible={provinceVisible}
            setVisible={setProvinceVisible}
            data={province_items?.data}
            onPressButton={openCity}
            onPressClose={() => {
              setProvinceVisible(!provinceVisible);
            }}
          />
          <CustomModal
            visible={cityVisible}
            setVisible={setCityVisible}
            data={cityList}
            onPressButton={selectCity}
            onPressClose={closeCity}
          />
        </ScrollView>
      </CustomForm>
    </MainScreen>
  );
};

export default CreateService;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'lightgray',
  },
  job: {
    textAlign: 'center',
    padding: 10,
    backgroundColor: 'lightblue',
    borderRadius: 25,
    width: '80%',
    alignSelf: 'center',
    marginBottom: 10,
  },
});
