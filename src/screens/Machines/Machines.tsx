import React from 'react';
import { Text, View } from 'react-native';
import { useRoute } from '@react-navigation/native';
import MasonryList from '@react-native-seoul/masonry-list';
import { MachineItem, SharpButton } from '../../components';
import { APP_TEXT } from '../../strings';
import { Alignment, CommonStyles } from '../../theme';
import styles from './styles';
import { useMachines } from './Hooks';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { IS_TABLET_VIEW } from '../../constants';

const numColumns = IS_TABLET_VIEW ? 2 : 1;

const Machines = () => {
  const { params } = useRoute();
  const { category }: { category: ICategory } = params;
  const { currentCategory, onAddItemPressed, onRemoveItemPressed } =
    useMachines(category?.id);

  const renderItem = (item: IMachineItem) => (
    <View style={Alignment.MBsmall}>
      <MachineItem
        machine={item}
        category={currentCategory}
        onRemoveItemPressed={() => onRemoveItemPressed(item?.id, category?.id)}
      />
    </View>
  );
  return (
    <View style={[CommonStyles.flex, styles.container]}>
      <View style={[CommonStyles.flexRow, styles.rowContainer]}>
        <Text style={styles.heading}>
          {category?.title?.length > 0
            ? category?.title
            : APP_TEXT.unnamedCategory}
        </Text>
        <SharpButton
          label={APP_TEXT.addItem}
          textStyle={styles.buttonText}
          onPress={() => onAddItemPressed(category?.id)}
        />
      </View>
      <KeyboardAwareScrollView style={CommonStyles.flex} enableOnAndroid>
        <MasonryList
          keyExtractor={item => item.id}
          data={currentCategory?.machines}
          contentContainerStyle={[CommonStyles.flex, styles.contentContainer]}
          renderItem={({ item }) => renderItem(item)}
          numColumns={numColumns}
        />
      </KeyboardAwareScrollView>
    </View>
  );
};

export default React.memo(Machines);
