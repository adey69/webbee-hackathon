import React from 'react';
import { Image, TouchableOpacity, View, Text } from 'react-native';
import { Surface, TextInput } from 'react-native-paper';
import { useCategoryField } from './Hooks';
import { CommonStyles } from '../../theme';
import styles from './styles';
import { APP_TEXT } from '../../strings';
import {
  Menu,
  MenuOption,
  MenuOptions,
  MenuTrigger,
} from 'react-native-popup-menu';
import { Images } from '../../assets';

interface ICategoryFieldProps extends ICategoryField {
  categoryId: string;
  onDeletePressed: (id: string) => void;
}

const CategoryField = (props: ICategoryFieldProps) => {
  const { id, type, label, categoryId, onDeletePressed } = props;
  const { onFieldLabelUpdated, onFieldTypeChanged } =
    useCategoryField(categoryId);
  return (
    <View style={[CommonStyles.flexRow, styles.container]}>
      <TextInput
        mode="outlined"
        value={label}
        style={styles.inputField}
        label={APP_TEXT.field}
        onChangeText={text => onFieldLabelUpdated(label, text, id)}
      />
      <Menu>
        <MenuTrigger
          customStyles={{
            TriggerTouchableComponent: TouchableOpacity,
          }}>
          <Surface style={styles.fieldType}>
            <Text style={styles.fieldTypeText}>{type ?? 'Text'}</Text>
          </Surface>
        </MenuTrigger>
        <MenuOptions optionsContainerStyle={styles.menuOptionsContainer}>
          <MenuOption
            onSelect={() => {
              onFieldTypeChanged(APP_TEXT.text, id);
            }}
            customStyles={{ OptionTouchableComponent: TouchableOpacity }}
            style={styles.menuOption}>
            <Text style={styles.menuText}>{APP_TEXT.text}</Text>
          </MenuOption>
          <MenuOption
            onSelect={() => {
              onFieldTypeChanged(APP_TEXT.checkbox, id);
            }}
            customStyles={{ OptionTouchableComponent: TouchableOpacity }}
            style={styles.menuOption}>
            <Text style={styles.menuText}>{APP_TEXT.checkbox}</Text>
          </MenuOption>
          <MenuOption
            onSelect={() => {
              onFieldTypeChanged(APP_TEXT.date, id);
            }}
            customStyles={{ OptionTouchableComponent: TouchableOpacity }}
            style={styles.menuOption}>
            <Text style={styles.menuText}>{APP_TEXT.date}</Text>
          </MenuOption>
          <MenuOption
            onSelect={() => {
              onFieldTypeChanged(APP_TEXT.number, id);
            }}
            customStyles={{ OptionTouchableComponent: TouchableOpacity }}
            style={styles.menuOption}>
            <Text style={styles.menuText}>{APP_TEXT.number}</Text>
          </MenuOption>
        </MenuOptions>
      </Menu>

      <TouchableOpacity
        style={styles.deleteContainer}
        onPress={() => onDeletePressed(id)}>
        <Image source={Images.delete} style={styles.deleteIcon} />
      </TouchableOpacity>
    </View>
  );
};

export default React.memo(CategoryField);
