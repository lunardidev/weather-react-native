import React from 'react';
import { ActivityIndicator } from 'react-native';

import { Container } from './styles';

export default function Loading() {
  return (
    <Container>
      <ActivityIndicator size="large" animating={true} color="#c3c3c3" />
    </Container>
  );
}
