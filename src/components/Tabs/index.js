import React, { useState, useEffect } from 'react';
import propTypes from 'prop-types';

import {
  Container,
  TabContainer,
  TabItem,
  TabTitleText,
  TabText,
  TabContainerText,
  TabSubText,
  TabSubTextContainer,
  TouchableArea,
} from './styles';

const Tabs = (props) => {
  const { backgroundColor, selectedColor, items, onPress } = props;

  const [itemsTab, setItemsTab] = useState([]);

  useEffect(() => {
    setItemsTab(items);
  }, [items]);

  const onPressItem = (item) => {
    onPress(item);

    const newState = itemsTab.map((i) => {
      const changedItem = i;
      changedItem.actived = changedItem.date === item.date;

      return changedItem;
    });

    setItemsTab(newState);
  };

  return (
    <Container>
      <TabContainer>
        {itemsTab.map((item) => (
          <TabItem
            actived={item.actived}
            key={item.date}
            backgroundColor={backgroundColor}
          >
            <TouchableArea
              activeOpacity={0.4}
              underlayColor={backgroundColor}
              onPress={() => onPressItem(item)}
            >
              <TabContainerText
                selectedColor={selectedColor}
                actived={item.actived}
              >
                <TabTitleText
                  selectedColor={selectedColor}
                  actived={item.actived}
                >
                  {item.weekday}
                </TabTitleText>
                <TabText selectedColor={selectedColor} actived={item.actived}>
                  {item.description}
                </TabText>
                <TabSubTextContainer>
                  <TabSubText actived={item.actived}>
                    {item.max}&deg;
                  </TabSubText>
                  <TabSubText actived={item.actived}>
                    {' | '}
                    {item.min}&deg;
                  </TabSubText>
                </TabSubTextContainer>
              </TabContainerText>
            </TouchableArea>
          </TabItem>
        ))}
      </TabContainer>
    </Container>
  );
};

Tabs.propTypes = {
  backgroundColor: propTypes.string,
  selectedColor: propTypes.string,
  items: propTypes.arrayOf(
    propTypes.shape({
      date: propTypes.string,
      weekday: propTypes.string,
      max: propTypes.number,
      min: propTypes.number,
      description: propTypes.string,
      condition: propTypes.string,
      actived: propTypes.boolean,
    })
  ),
  onPress: propTypes.func,
};

Tabs.defaultProps = {
  backgroundColor: '#fff',
  selectedColor: '#fff',
};

export default Tabs;
