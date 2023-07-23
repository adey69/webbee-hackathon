import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Surface, TextInput, Switch } from 'react-native-paper';
import DatePicker from 'react-native-date-picker';
import { APP_TEXT } from '../../strings';
import { useMachineItem } from './Hooks';
import { RoundedButton } from '../RoundedButton';
import styles from './styles';
import { Alignment, CommonStyles } from '../../theme';

interface IMachineItemProps {
  category: ICategory;
  machine: IMachineItem;
  onRemoveItemPressed: (id: string) => void;
}

const MachineItem = (props: IMachineItemProps) => {
  const { category, machine, onRemoveItemPressed } = props;
  const {
    showCalendar,
    selectedDate,
    calendarTriggerLabel,
    setSelectedDate,
    setShowCalendar,
    onFieldValueUpdated,
    onDateFieldPressed,
    getTitleField,
  } = useMachineItem();
  const { fields } = category;
  return (
    <Surface style={styles.container}>
      <Text style={styles.header}>{getTitleField(category, machine)}</Text>
      {fields?.map((field, index) => {
        return (
          <View key={field?.id} style={Alignment.MBsmall}>
            {field.type === 'text' && (
              <TextInput
                mode="outlined"
                label={
                  fields[index]?.label?.length > 0
                    ? fields[index]?.label
                    : `${APP_TEXT.unnamedField} ${index}`
                }
                value={
                  machine[
                    field?.label?.length > 0
                      ? field?.label
                      : `${APP_TEXT.unnamedField} ${index}`
                  ]
                }
                onChangeText={text =>
                  onFieldValueUpdated(
                    text,
                    machine?.id,
                    category?.id,
                    field?.label?.length > 0
                      ? field?.label
                      : `${APP_TEXT.unnamedField} ${index}`,
                  )
                }
                style={styles.titleField}
              />
            )}
            {field.type === 'date' && (
              <TouchableOpacity
                onPress={() =>
                  onDateFieldPressed(
                    field?.label?.length > 0
                      ? field?.label
                      : `${APP_TEXT.unnamedField} ${index}`,
                  )
                }>
                <View pointerEvents="none">
                  <TextInput
                    mode="outlined"
                    label={
                      fields[index]?.label?.length > 0
                        ? fields[index]?.label
                        : `${APP_TEXT.unnamedField} ${index}`
                    }
                    value={
                      machine[
                        field?.label?.length > 0
                          ? field?.label
                          : `${APP_TEXT.unnamedField} ${index}`
                      ]
                    }
                    editable={false}
                    style={styles.titleField}
                  />
                </View>
              </TouchableOpacity>
            )}
            {field.type === 'checkbox' && (
              <View style={CommonStyles.flexRow}>
                <Switch
                  value={
                    machine[
                      field?.label?.length > 0
                        ? field?.label
                        : `${APP_TEXT.unnamedField} ${index}`
                    ] === 'yes'
                  }
                  onChange={() =>
                    onFieldValueUpdated(
                      machine[
                        field?.label?.length > 0
                          ? field?.label
                          : `${APP_TEXT.unnamedField} ${index}`
                      ] === 'yes'
                        ? 'no'
                        : 'yes',
                      machine?.id,
                      category?.id,
                      field?.label?.length > 0
                        ? field?.label
                        : `${APP_TEXT.unnamedField} ${index}`,
                    )
                  }
                />
                <Text style={styles.switchLabel}>
                  {fields[index]?.label?.length > 0
                    ? fields[index]?.label
                    : `${APP_TEXT.unnamedField} ${index}`}
                </Text>
              </View>
            )}
            {field.type === 'number' && (
              <TextInput
                mode="outlined"
                inputMode="numeric"
                label={
                  fields[index]?.label?.length > 0
                    ? fields[index]?.label
                    : `${APP_TEXT.unnamedField} ${index}`
                }
                value={
                  machine[
                    field?.label?.length > 0
                      ? field?.label
                      : `${APP_TEXT.unnamedField} ${index}`
                  ]
                }
                onChangeText={text =>
                  onFieldValueUpdated(
                    text,
                    machine?.id,
                    category?.id,
                    field?.label?.length > 0
                      ? field?.label
                      : `${APP_TEXT.unnamedField} ${index}`,
                  )
                }
                style={styles.titleField}
              />
            )}
          </View>
        );
      })}

      <DatePicker
        modal
        mode="date"
        open={showCalendar}
        date={selectedDate}
        onConfirm={date => {
          setShowCalendar(false);
          setSelectedDate(date);
          onFieldValueUpdated(
            `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`,
            machine?.id,
            category?.id,
            calendarTriggerLabel,
          );
        }}
        onCancel={() => {
          setShowCalendar(false);
        }}
      />
      <RoundedButton
        label={APP_TEXT.remove}
        style={styles.bottomButton}
        textStyle={styles.addNewFieldText}
        onPress={() => onRemoveItemPressed(machine?.id)}
      />
    </Surface>
  );
};

export default React.memo(MachineItem);
