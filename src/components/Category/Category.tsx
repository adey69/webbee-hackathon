import React from 'react';
import { Surface, Text, TextInput } from 'react-native-paper';
import styles from './styles';
import { APP_TEXT } from '../../strings';
import { useCategory } from './Hooks';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';
import { TouchableOpacity, View } from 'react-native';
import { RoundedButton } from '../RoundedButton';
import { CommonStyles } from '../../theme';
import { CategoryField } from '../CategoryField';

interface ICategoryProps {
  category: ICategory;
  onRemoveCategoryPressed: (id: string) => void;
}

const Category = (props: ICategoryProps) => {
  const { category, onRemoveCategoryPressed } = props;
  const { fields, id, title } = category;
  const {
    onTitleFieldChanged,
    onRemoveFieldPressed,
    onAddFieldPress,
    onCategoryTitleChanged,
  } = useCategory(category);

  return (
    <Surface style={styles.container}>
      <Text style={styles.categoryTitle}>
        {title.length > 0 ? title : APP_TEXT.newCategory}
      </Text>
      <TextInput
        mode="outlined"
        label={APP_TEXT.categoryName}
        onChangeText={text => onCategoryTitleChanged(text)}
        value={title}
        style={styles.titleField}
      />
      {fields.map(field => (
        <CategoryField
          categoryId={id}
          key={field.id}
          id={field.id}
          type={field?.type}
          label={field?.label}
          onDeletePressed={onRemoveFieldPressed}
        />
      ))}

      <Menu>
        <MenuTrigger
          customStyles={{
            TriggerTouchableComponent: TouchableOpacity,
          }}>
          <View style={[styles.bottomButton, styles.titleFieldButton]}>
            <Text style={styles.titleFieldButtonText}>
              {APP_TEXT.titleField}:{' '}
              {category?.titleField?.length > 0
                ? category?.titleField
                : `${APP_TEXT.unnamedField} 0`}
            </Text>
          </View>
        </MenuTrigger>
        <MenuOptions optionsContainerStyle={styles.menuOptionsContainer}>
          {fields?.map((field, index) => (
            <MenuOption
              key={field?.id}
              onSelect={() => {
                onTitleFieldChanged(
                  field?.label?.length > 0
                    ? field?.label
                    : `${APP_TEXT.unnamedField} ${index}`,
                );
              }}
              customStyles={{ OptionTouchableComponent: TouchableOpacity }}
              style={styles.menuOption}>
              <Text style={styles.menuText}>
                {field?.label?.length > 0
                  ? field?.label
                  : `${APP_TEXT.unnamedField} ${index}`}
              </Text>
            </MenuOption>
          ))}
        </MenuOptions>
      </Menu>
      <View style={[CommonStyles.flexRow, styles.bottomButtonsContainer]}>
        <View>
          <Menu>
            <MenuTrigger
              customStyles={{
                TriggerTouchableComponent: TouchableOpacity,
              }}>
              <View style={styles.bottomButton}>
                <Text style={styles.addNewFieldText}>
                  {APP_TEXT.addNewField}
                </Text>
              </View>
            </MenuTrigger>
            <MenuOptions optionsContainerStyle={styles.menuOptionsContainer}>
              <MenuOption
                onSelect={() => {
                  onAddFieldPress(APP_TEXT.text);
                }}
                customStyles={{ OptionTouchableComponent: TouchableOpacity }}
                style={styles.menuOption}>
                <Text style={styles.menuText}>{APP_TEXT.text}</Text>
              </MenuOption>
              <MenuOption
                onSelect={() => {
                  onAddFieldPress(APP_TEXT.checkbox);
                }}
                customStyles={{ OptionTouchableComponent: TouchableOpacity }}
                style={styles.menuOption}>
                <Text style={styles.menuText}>{APP_TEXT.checkbox}</Text>
              </MenuOption>
              <MenuOption
                onSelect={() => {
                  onAddFieldPress(APP_TEXT.date);
                }}
                customStyles={{ OptionTouchableComponent: TouchableOpacity }}
                style={styles.menuOption}>
                <Text style={styles.menuText}>{APP_TEXT.date}</Text>
              </MenuOption>
              <MenuOption
                onSelect={() => {
                  onAddFieldPress(APP_TEXT.number);
                }}
                customStyles={{ OptionTouchableComponent: TouchableOpacity }}
                style={styles.menuOption}>
                <Text style={styles.menuText}>{APP_TEXT.number}</Text>
              </MenuOption>
            </MenuOptions>
          </Menu>
        </View>
        <RoundedButton
          label={APP_TEXT.remove}
          style={styles.bottomButton}
          textStyle={styles.addNewFieldText}
          onPress={() => onRemoveCategoryPressed(id)}
        />
      </View>
    </Surface>
  );
};

export default React.memo(Category);
