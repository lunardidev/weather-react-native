import propTypes from 'prop-types';
import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

export const Container = styled(LinearGradient).attrs(
  (props) => ({ colors: [props.colorLinear, props.colorGradient] }),
  {
    start: { x: 0, y: 0 },
    end: { x: 1, y: 1 },
  }
)`
  flex: 1;
`;

export const Title = styled.Text`
  font-size: 32px;
  color: ${(props) => (props.color ? props.color : '#000')};
  font-weight: bold;
  padding: 60px 0 5px;
  text-align: center;
`;

export const TemperatureContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const Temperature = styled.Text`
  font-size: 60px;
  color: ${(props) => (props.color ? props.color : '#000')};
  font-weight: normal;
  padding: 5px;
  text-align: center;
`;

export const Celsius = styled.Text`
  font-size: 20px;
  color: ${(props) => (props.color ? props.color : '#000')};
  font-weight: normal;
  padding: 15px 0px 0px 0px;
  text-align: center;
`;

export const TodayInfo = styled.Text`
  font-size: 20px;
  color: ${(props) => (props.color ? props.color : '#000')};
  font-weight: normal;
  padding: 15px 0px 0px 0px;
  text-align: center;
`;

export const Description = styled.Text`
  font-size: 16px;
  color: ${(props) => (props.color ? props.color : '#000')};
  font-weight: normal;
  padding: 15px 0px 0px 0px;
  text-align: center;
`;

export const TabArea = styled.View`
  margin-top: 30px;
  background: ${(props) =>
    props.backgroundColor ? props.backgroundColor : '#fff'};
`;

Container.propTypes = {
  colorLinear: propTypes.string,
  colorGradient: propTypes.string,
};

Title.propTypes = {
  color: propTypes.string,
};

Temperature.propTypes = {
  color: propTypes.string,
};

Celsius.propTypes = {
  color: propTypes.string,
};

TodayInfo.propTypes = {
  color: propTypes.string,
};

Description.propTypes = {
  color: propTypes.string,
};

TabArea.propTypes = {
  background: propTypes.string,
};
