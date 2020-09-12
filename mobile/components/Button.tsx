import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Button as ButtonElement, ThemeContext } from 'react-native-elements';
import { ThemeI } from '../App';

const useStyles = (theme: Partial<ThemeI>) => StyleSheet.create({
  button: {
    backgroundColor: theme?.colors.primary,
    paddingVertical: 20,
    width: '100%',
  },
});

type Props = { buttonStyle?: any; title: string; titleStyle?: any, onPress?: (value?: any) => any };
const Button = ({
  buttonStyle, title, titleStyle, onPress,
}: Props) => {
  const { theme } = useContext(ThemeContext);
  const styles = useStyles(theme);

  return (
    <ButtonElement
      title={title}
      buttonStyle={[styles.button, buttonStyle]}
      titleStyle={titleStyle}
      onPress={onPress}
    />
  );
};

export default Button;
