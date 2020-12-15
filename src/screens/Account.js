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
import {profession, fullName, upiId} from '../utils/updateUser';
import constants from '../utils/constants';

const Account = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [selectedBox, setSelectedBox] = useState(null);
  const [selectedBoxError, setSelectedBoxError] = useState(false)
  const [name, setFullName] = useState('');
  const [fullNameError, setFullNameError] = useState(false)
  const [UPIID, setUpiId] = useState('');
  const [upiIdError, setUpiIdError] = useState(false)
  const handleClick = (id) => {
    if (id == 0) {
      setSelectedBoxError(false)
      setSelectedBox('Student');
      dispatch(profession('Student'));
    }
    if (id == 1) {
      setSelectedBoxError(false)
      setSelectedBox('Professional');
      dispatch(profession('Professional'));
    }
  };
  const checkEntries = () => {
    if (!selectedBox) {
      setSelectedBoxError(true)
    } else if (name == "") {
      setFullNameError(true)
    } else if (UPIID == "") {
      setUpiIdError(true)
    } else {
      dispatch(fullName(name))
      dispatch(upiId(UPIID))
      navigation.navigate('details')}
    }
  return (
    <BaseView
      justifyContent="center"
      backgroundColor={constants.baseColor}
      flex={1}>
      <BaseText size={14} color={constants.defaultBlack} marginHorizontal={10}>
        {'Setup your GoDutch account'}
      </BaseText>
      <BaseView
        backgroundColor={constants.defaultWhite}
        elevation={3}
        padding={15}
        marginTop={6}
        marginHorizontal={10}
        radius={5}>
        <BaseView>
          <BaseText size={14} color={constants.defaultBlack}>
            {'Current profession'}
          </BaseText>
          <BaseView
            flexDirection="row"
            justifyContent="space-between"
           
            marginTop={6}>
            <BaseButton
              onPress={() => handleClick(0)}
              paddingHorizontal={45}
              paddingVertical={14}
              radius={5}
              borderWidth={1}
              borderColor={
                selectedBox == 'Student'
                  ? constants.selectedBorderColor
                  : constants.inputBorderColor
              }
              backgroundColor={constants.defaultWhite}>
              <BaseText
                size={15}
                color={
                  selectedBox == 'Student'
                    ? constants.selectedBorderColor
                    : constants.defaultBlack
                }>
                {'Student'}
              </BaseText>
            </BaseButton>
            <BaseButton
              onPress={() => handleClick(1)}
              paddingHorizontal={45}
              paddingVertical={14}
              radius={5}
              borderWidth={1}
              borderColor={
                selectedBox == 'Professional'
                  ? constants.selectedBorderColor
                  : constants.inputBorderColor
              }
              backgroundColor={constants.defaultWhite}>
              <BaseText
                size={15}
                color={
                  selectedBox == 'Professional'
                    ? constants.selectedBorderColor
                    : constants.defaultBlack
                }>
                {'Professional'}
              </BaseText>
            </BaseButton>
            
          </BaseView>
          {selectedBoxError ? (
          <BaseText size={10} color={constants.red}>
            {'Select any one'}
          </BaseText>
        ) : null}
        </BaseView>

        <BaseView marginTop={31} />
        <BaseText size={14} color={constants.defaultBlack}>
          {'Full name'}
        </BaseText>
        <BaseInput
          length={10}
          keyboardType="default"
          onSelectionChange={() => setFullNameError(false)}
          onChangeText={(name) => setFullName(name)}
        />
        {fullNameError ? (
          <BaseText size={10} color={constants.red}>
            {'Enter full name'}
          </BaseText>
        ) : null}
        <BaseView marginTop={31} />
        <BaseText size={14} color={constants.defaultBlack}>
          {'UPI ID'}
        </BaseText>
        <BaseInput length={10} keyboardType="default" onChangeText={(upiid) => setUpiId(upiid)} onSelectionChange={() => setUpiIdError(false)}/>
        {upiIdError ? (
          <BaseText size={10} color={constants.red}>
            {'Enter upi id'}
          </BaseText>
        ) : null}
        <BaseView marginTop={64} />
        <BaseButton
          paddingHorizontal={45}
          paddingVertical={14}
          radius={5}
          onPress={checkEntries}>
          <BaseText size={19} color={constants.textInputBackgroud} >
            {'Continue'}
          </BaseText>
        </BaseButton>
        <BaseView marginTop={55} />
      </BaseView>
    </BaseView>
  );
};
export default Account;
