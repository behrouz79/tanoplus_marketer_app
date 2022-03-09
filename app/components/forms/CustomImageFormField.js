import React from 'react';
import {useFormikContext} from 'formik';
import CustomTextInput from '../CustomTextInput';
import ErrorMessage from './ErrorMessage';
import CustomImageInput from './CustomImageInput';

const CustomImageFormField = ({name, ...otherProps}) => {
  const {setFieldTouched, errors, touched} = useFormikContext();
  return (
    <>
      <CustomImageInput onBlur={() => setFieldTouched(name)} {...otherProps} />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};

export default CustomImageFormField;
