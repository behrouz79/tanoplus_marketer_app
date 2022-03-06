import Toast from "react-native-tiny-toast";


export const successToast = (message) => {
    Toast.showSuccess(message, {
        position: Toast.position.CENTER,
        shadow: true
    });
};

export const LoadingToast = (message) => {
    Toast.showLoading(message, {
        position: Toast.position.CENTER,
        shadow: true
    });
};

export const customToast = (message) => {
    Toast.show(message, {
        position: Toast.position.CENTER,
        shadow: true
    });
};