import React, { useCallback } from 'react';
import { SectionList, Text, View } from 'react-native';
import styles from './styles';
import { EmptyDashboard, MachineItem, SharpButton } from '../../components';
import { useDashboard } from './Hooks';
import { APP_TEXT } from '../../strings';

const Dashboard = () => {
  const { sectionListData, onAddItemPressed, onRemoveItemPressed } =
    useDashboard();

  const renderSectionFooter = useCallback((section: IMachineItem[]) => {
    if (section?.length !== 0) return null;
    return (
      <View style={styles.sectionFooter}>
        <Text style={styles.footerText}>{APP_TEXT.noData}</Text>
      </View>
    );
  }, []);

  const renderSectionHeader = useCallback(
    (title: string, categoryId: string) => {
      return (
        <View style={styles.sectionHeader}>
          <Text style={styles.header}>{title}</Text>
          <SharpButton
            label={APP_TEXT.addItem}
            onPress={() => onAddItemPressed(categoryId)}
          />
        </View>
      );
    },
    [],
  );

  return (
    <>
      {sectionListData?.length === 0 ? (
        <EmptyDashboard />
      ) : (
        <>
          <SectionList
            sections={sectionListData}
            contentContainerStyle={[styles.container]}
            keyExtractor={item => item?.id}
            renderItem={({ item, section }) => {
              return (
                <MachineItem
                  machine={item}
                  category={section?.category}
                  onRemoveItemPressed={() =>
                    onRemoveItemPressed(item.id, section?.categoryId)
                  }
                />
              );
            }}
            renderSectionHeader={({ section: { title, categoryId } }) =>
              renderSectionHeader(title, categoryId)
            }
            renderSectionFooter={({ section }) =>
              renderSectionFooter(section.data)
            }
            ItemSeparatorComponent={() => <View style={styles.separator} />}
            stickySectionHeadersEnabled={false}
          />
        </>
      )}
    </>
  );
};

export default React.memo(Dashboard);
