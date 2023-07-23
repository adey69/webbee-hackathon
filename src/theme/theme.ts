import { useTheme } from 'react-native-paper';

export default () => {
  const theme = useTheme();

  const customTheme = {
    ...theme,
    colors: {
      ...theme.colors,
    },
  };

  return {
    customTheme,
  };
};
