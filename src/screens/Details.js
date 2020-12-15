import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {selectPhNumber, selectProfession, selectFullName, selectUpiID} from '../utils/updateUser';
import {
  BaseButton,
  BaseImage,
  BaseInput,
  BaseText,
  BaseView,
} from '../components';
import constants from '../utils/constants';

const Details = () => {
    const phNumber = useSelector(selectPhNumber);
    const prefession = useSelector(selectProfession);
    const username = useSelector(selectFullName);
    const upiid = useSelector(selectUpiID);
  return (
    <BaseView
      justifyContent="center"
      backgroundColor={constants.baseColor}
      flex={1}>
      <BaseText size={14} color={constants.defaultBlack} marginHorizontal={10} marginVertical= {6}>
        {'Your Details'}
      </BaseText>
      <BaseView
        backgroundColor={constants.defaultWhite}
        elevation={3}
        padding={16}
        marginHorizontal={10}
        radius={5}>
        <BaseText size={14} color={constants.defaultBlack}>
          {'Name'}
        </BaseText>
        <BaseView
          height={1}
          backgroundColor={constants.inputBorderColor}
          marginVertical={16}
        />
         <BaseText size={14} color={constants.selectedBorderColor}>
          {username}
        </BaseText>
        <BaseView
          height={1}
          backgroundColor={constants.inputBorderColor}
          marginVertical={16}
        />
        <BaseText size={14} color={constants.defaultBlack}>
          {'MobileNo'}
        </BaseText>
        <BaseView
          height={1}
          backgroundColor={constants.inputBorderColor}
          marginVertical={16}
        />
         <BaseText size={14} color={constants.selectedBorderColor}>
          {phNumber}
        </BaseText>
        <BaseView
          height={1}
          backgroundColor={constants.inputBorderColor}
          marginVertical={16}
        />
        <BaseText size={14} color={constants.defaultBlack}>
          {'UPI ID'}
        </BaseText>
        <BaseView
          height={1}
          backgroundColor={constants.inputBorderColor}
          marginVertical={16}
        />
         <BaseText size={14} color={constants.selectedBorderColor}>
          {upiid}
        </BaseText>
        <BaseView
          height={1}
          backgroundColor={constants.inputBorderColor}
          marginVertical={16}
        />
        <BaseText size={14} color={constants.defaultBlack}>
          {'Profession'}
        </BaseText>
        <BaseView
          height={1}
          backgroundColor={constants.inputBorderColor}
          marginVertical={16}
        />
         <BaseText size={14} color={constants.selectedBorderColor} bold= "500">
          {prefession}
        </BaseText>
        <BaseView
          height={1}
          backgroundColor={constants.inputBorderColor}
          marginVertical={16}
        />
        <BaseView marginTop={18} />
      </BaseView>
      <BaseView marginTop={44} />
      <BaseButton paddingHorizontal={45} paddingVertical={14} radius={5}>
        <BaseText size={19} color={constants.textInputBackgroud}>
          {'Continue'}
        </BaseText>
      </BaseButton>
    </BaseView>
  );
};
export default Details;
