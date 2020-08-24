import styled from 'styled-components/native';
import { View } from 'react-native';

export const Container = styled(View)``;

export const TabContainer = styled.ScrollView.attrs({
  horizontal: false,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: { paddingLeft: 0, paddingRight: 0 },
})`
  height: 100%;
  padding: 20px;
  padding-top: 40px;
`;

export const TabTextContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 10px;
`;

export const TabTitleText = styled.Text`
  font-size: 16px;
  font-weight: normal;
  color: #232526;
  flex: 2;
  font-weight: 600;
`;

export const TabSubText = styled.Text`
  display: flex;
  flex: 1;
  flex-direction: row;
  font-size: 16px;
  font-weight: normal;
  color: #112d32;
  font-weight: 400;
`;

export const RefreshButton = styled.Button``;
