import React from 'react';
import { CommonStyles } from '../../theme';
import styles from './styles';
import { Category, NoCategories, RoundedButton } from '../../components';
import { IS_TABLET_VIEW } from '../../constants';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import MasonryList from '@react-native-seoul/masonry-list';
import { useManageCategories } from './Hooks';
import { View } from 'react-native';
import { APP_TEXT } from '../../strings';

const ManageCategories = () => {
  const { categories, onCreateCategoryPressed, onRemoveCategoryPressed } =
    useManageCategories();
  const numColumns = IS_TABLET_VIEW ? 2 : 1;
  const renderItem = (item: ICategory) => (
    <Category
      category={item}
      onRemoveCategoryPressed={onRemoveCategoryPressed}
    />
  );

  return (
    <>
      <KeyboardAwareScrollView style={CommonStyles.flex} enableOnAndroid>
        <MasonryList
          data={categories}
          contentContainerStyle={[CommonStyles.flex, styles.contentContainer]}
          renderItem={({ item }) => renderItem(item)}
          keyExtractor={item => item.id}
          ListEmptyComponent={<NoCategories />}
          numColumns={numColumns}
        />
      </KeyboardAwareScrollView>
      <View style={styles.bottomButtonContainer}>
        <RoundedButton
          label={APP_TEXT.addACategory}
          onPress={onCreateCategoryPressed}
        />
      </View>
    </>
  );
};

export default React.memo(ManageCategories);
