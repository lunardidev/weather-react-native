import styled from 'styled-components/native';
import propTypes from 'prop-types';

import { View } from 'react-native';

export const Container = styled(View)``;

export const TabContainer = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: { paddingLeft: 0, paddingRight: 0 },
})``;

export const TabItem = styled.View`
  background: ${(props) => props.backgroundColor};
  height: 80px;
`;

export const TabText = styled.Text`
  text-align: center;
  font-size: 13px;
  font-weight: normal;
  color: ${(props) => (props.actived === true ? '#fff' : '#232526')};
  font-weight: ${(props) => (props.actived === true ? 400 : 400)};
`;

export const TabTitleText = styled.Text`
  padding-bottom: 5px;
  text-align: center;
  font-size: 20px;
  font-weight: normal;
  color: ${(props) => (props.actived === true ? '#fff' : '#232526')};
  font-weight: ${(props) => (props.actived === true ? 400 : 400)};
`;

export const TabSubTextContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const TabSubText = styled.Text`
  font-size: 12px;
  font-weight: normal;
  color: ${(props) => (props.actived === true ? '#fff' : '#232526')};
`;

export const TabContainerText = styled.View`
  background: ${(props) =>
    props.actived ? props.selectedColor : 'transparent'};
  height: 70px;
  padding-top: 0px;
  padding-left: 15px;
  padding-right: 15px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
`;

export const TouchableArea = styled.TouchableHighlight`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
`;

TabItem.propTypes = {
  background: propTypes.string,
};

TabItem.defaultProps = {
  background: '#fff',
};

TabText.propTypes = {
  color: propTypes.string,
};

TabTitleText.propTypes = {
  color: propTypes.string,
};

TabSubText.propTypes = {
  color: propTypes.string,
};

TabContainerText.propTypes = {
  background: propTypes.string,
};
