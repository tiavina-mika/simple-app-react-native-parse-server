import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Button as ButtonElement, ThemeContext } from 'react-native-elements';
import { ThemeI } from '../App';

const useStyles = (theme: Partial<ThemeI>) => StyleSheet.create({
  button: {
    backgroundColor: theme?.colors.primary,
    paddingVertical: 20,
  },
});

type Props = { className?: any; title: string };
const Button = ({ className, title }: Props) => {
  const { theme } = useContext(ThemeContext);
  const styles = useStyles(theme);

  return (
    <ButtonElement
      title={title}
      buttonStyle={[styles.button, className]}
    />
  );
};

export default Button;
