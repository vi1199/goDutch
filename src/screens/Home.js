import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';
import {
  BaseButton,
  BaseImage,
  BaseInput,
  BaseText,
  BaseView,
} from '../components';
import {phoneNumber, selectPhNumber} from '../utils/updateUser';
import constants from '../utils/constants';
import {validateMobileNo} from '../utils/validate';

const Home = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [enterNumber, setEnteredNumber] = useState(0);
  const [errorMsg, setErrorMsg] = useState(false);
  
  const checkNumber = () => {
    if (enterNumber.length == 0) {
      setErrorMsg(false);
    }
    if (!validateMobileNo(enterNumber)) {
      setErrorMsg(true);
    } else {
      dispatch(phoneNumber(Number(enterNumber)));
      navigation.navigate('account')
    }
  };
  return (
    <BaseView
      justifyContent="center"
      backgroundColor={constants.baseColor}
      flex={1}>
      <BaseView
        backgroundColor={constants.defaultWhite}
        elevation={3}
        padding={15}
        margin={10}
        radius={5}>
        <BaseView
          flexDirection={'row'}
          marginTop={13}
          alignItems="center"
          justifyContent="center">
          <BaseImage
            source={require('../../assets/images/icon.png')}
            height={37}
            width={37}
            marginHorizontal={9}
          />
          <BaseText size={35} color={constants.defaultBlack} bold="bold">
            {'goDutch'}
          </BaseText>
        </BaseView>
        <BaseView
          height={1}
          backgroundColor={constants.inputBorderColor}
          marginTop={33}
          marginBottom={45}
          marginHorizontal= {10}
        />
        <BaseText size={14} color={constants.defaultBlack}>
          {'Mobile number'}
        </BaseText>
        <BaseInput
          length={10}
          keyboardType="phone-pad"
          onSelectionChange={() => setErrorMsg(false)}
          onChangeText={(number) => setEnteredNumber(number)}
        />
        {errorMsg ? (
          <BaseText size={10} color={constants.red}>
            {'Enter correct number'}
          </BaseText>
        ) : null}
        <BaseView marginTop={64} />
        <BaseButton
          paddingHorizontal={45}
          paddingVertical={14}
          radius={5}
          onPress={checkNumber}>
          <BaseText size={19} color={constants.textInputBackgroud}>
            {'Continue'}
          </BaseText>
        </BaseButton>
        <BaseView marginTop={55} />
      </BaseView>
    </BaseView>
  );
};
export default Home;
