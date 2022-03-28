import React from 'react';
import {useFormikContext} from 'formik';
import ErrorMessage from './ErrorMessage';
import CustomImageInput from './CustomImageInput';

const CustomImageFormField = ({name, style, ...otherProps}) => {
  const {setFieldTouched, errors, touched} = useFormikContext();
  return (
    <>
      <CustomImageInput
        title={name}
        style={style}
        onBlur={() => setFieldTouched(name)}
        {...otherProps}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};

export default CustomImageFormField;
