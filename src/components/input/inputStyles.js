import { StyleSheet } from "react-native";
import constants from "../../utils/constants";


export default StyleSheet.create({
    container: {
        backgroundColor  : constants.textInputBackgroud,
        borderWidth: constants.inputBorderWidth,
        borderRadius: constants.borderRadius,
        borderColor: constants.inputBorderColor,
        marginVertical: 6,
        textAlign: 'center',
    }
})