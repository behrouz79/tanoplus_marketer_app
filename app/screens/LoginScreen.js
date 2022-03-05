import React, { useState } from "react";
import { View, StyleSheet, ImageBackground } from "react-native";
import { Formik } from "formik";
import CustomButton from "./../components/CustomButton";
import * as Yup from 'yup';
import ErrorMessage from "../components/ErrorMessage";
import CustomTextInput from "../components/CustomTextInput";

const validationSchema_code = Yup.object().shape({
    code: Yup.string().required("این فیلد الزامی است.").trim().min(6, "کد نمیتواند کمتر 6 کاراکتر باشد.").max(6, "کد نمیتواند بیشتر 6 کاراکتر باشد.")
})


const LoginScreen = () => {
    const [code, setCode] = useState("");

    return (
        <ImageBackground style={styles.container} source={require("../assets/background.png")}>
            <Formik
                initialValues={{code: ""}}
                onSubmit={(values) => console.log(values)}
                validationSchema={validationSchema_code}
            >
                {({ handleChange, handleSubmit, errors, setFieldTouched, touched }) => (
                    <>
                        <CustomTextInput
                            placeholder="کد بازاریابی"
                            autoCorrect={false}
                            keyboardType="numeric"
                            placeholderTextColor="royalblue"
                            onChangeText={handleChange("code")}
                            onBlur={()=>setFieldTouched('code')}
                        />
                        <ErrorMessage error={errors.code} visible={touched.code} />
                        <View style={{ width: "60%" }}>
                            <CustomButton
                                title="ارسال کد تایید"
                                onPress={handleSubmit}
                            />
                        </View>
                    </>
                )}
            </Formik>
        </ImageBackground>
    );
};

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        resizeMode: "stretch"
    },
    textInput: {
        width: "80%",
        height: 50,
        backgroundColor: "lightgray",
        borderRadius: 10,
        textAlign: "center",
        fontFamily: "yekan",
        fontSize: 18,
        marginBottom: 15,
    },

});
