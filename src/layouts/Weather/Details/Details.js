import React from 'react';

import {
  Container,
  TabContainer,
  TabSubText,
  TabTextContainer,
  TabTitleText,
  RefreshButton,
} from './styles';

const Details = (props) => {
  const { humidity, windSpeedy, sunrise, sunset, updateData } = props;

  return (
    <Container>
      <TabContainer>
        <TabTextContainer>
          <TabTitleText>Humidade: </TabTitleText>
          <TabSubText>{humidity}</TabSubText>
        </TabTextContainer>
        <TabTextContainer>
          <TabTitleText>Velocidade do vento: </TabTitleText>
          <TabSubText>{windSpeedy}</TabSubText>
        </TabTextContainer>
        <TabTextContainer>
          <TabTitleText>Nascer do Sol: </TabTitleText>
          <TabSubText>{sunrise}</TabSubText>
        </TabTextContainer>
        <TabTextContainer>
          <TabTitleText>Pôr do Sol: </TabTitleText>
          <TabSubText>{sunset}</TabSubText>
        </TabTextContainer>
        <RefreshButton title="Atualizar" onPress={() => updateData()} />
      </TabContainer>
    </Container>
  );
};

export default Details;
