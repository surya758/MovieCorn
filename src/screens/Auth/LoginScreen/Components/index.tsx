import React, {Dispatch, SetStateAction, useState} from 'react';
import {TextInput, View} from 'react-native';

import {Colors} from '../../../../styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './styles';

type TextInputProp = {
  placeholder: string;
  setter: Dispatch<SetStateAction<string>>;
  value: string;
};

const CustomTextInput: React.FC<TextInputProp> = ({
  placeholder,
  setter,
  value,
}) => {
  const [focus, setFocus] = useState<boolean>(false);
  return (
    <View>
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={setter}
        placeholderTextColor={Colors.GRAY_DARK}
        style={styles(value, focus).textInput}
        onFocus={() => setFocus(true)}
        autoFocus={placeholder === 'Email' ? true : false}
      />
      {value ? (
        <Ionicons
          name="ios-close"
          size={22}
          color="white"
          style={styles().icon}
          onPress={() => setter('')}
        />
      ) : null}
    </View>
  );
};

export default CustomTextInput;
