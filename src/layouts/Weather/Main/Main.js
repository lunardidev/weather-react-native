import React, { useState, useEffect } from 'react';

import {
  Container,
  Title,
  TemperatureContainer,
  Temperature,
  Celsius,
  TodayInfo,
  Description,
  TabArea,
} from './styles';

import { useApi } from '../../../contexts/apiContext';

import { conditionSlug, today } from '../../../helpers';

import { Tabs, Loading } from '../../../components';
import Details from '../Details/Details';

const Main = () => {
  const { loading, updateData, data } = useApi();

  const [dataWeather, setDataWeather] = useState({});
  const [todayWeather, setTodayWeather] = useState({});
  const [tabItems, setTabItems] = useState([]);

  const [viewPage, setViewPage] = useState(false);

  const [color, setColor] = useState({
    linear: '#fff',
    gradient: '#fff',
    primaryColor: '#fff',
  });

  const colorSlug = (slug) => {
    const slugColor = conditionSlug(slug);

    if (slugColor) {
      setColor(slugColor);
    }
  };

  const setCategory = (i) => {
    if (i.condition) {
      colorSlug(i.condition);
    }
  };

  useEffect(() => {
    try {
      if (data.forecast) {
        const now = today();
        const todayInfo = data.forecast.filter(
          (info) => info.date === `${now.day}/${now.month}`
        );

        const items = data.forecast.map((i) => {
          const item = i;
          if (item.date === `${now.day}/${now.month}`) {
            item.actived = true;
          } else {
            item.actived = false;
          }
          return item;
        });

        setDataWeather(data);
        colorSlug(todayInfo[0].condition);
        setTabItems(items);
        setTodayWeather(todayInfo[0]);
        setViewPage(true);
      }
    } catch (e) {
      return false;
    }
  }, [data]);

  if (loading) {
    return <Loading />;
  }

  return loading || viewPage === false ? (
    <Loading />
  ) : (
    <Container colorLinear={color.linear} colorGradient={color.gradient}>
      <Title color={color.primaryColor}>{dataWeather.city}</Title>
      <TemperatureContainer>
        <Temperature color={color.primaryColor}>{dataWeather.temp}</Temperature>
        <Celsius color={color.primaryColor}>&#8451;</Celsius>
      </TemperatureContainer>
      <TodayInfo color={color.primaryColor}>
        {todayWeather.date} - {dataWeather.time}
      </TodayInfo>
      <Description color={color.primaryColor}>
        {todayWeather.description}
      </Description>
      <TabArea backgroundColor="#F5F5F5">
        <Tabs
          onPress={(i) => setCategory(i)}
          items={tabItems}
          backgroundColor="#F5F5F5"
          selectedColor="#232526"
        />
      </TabArea>
      <Details
        humidity={dataWeather.humidity}
        windSpeedy={dataWeather.wind_speedy}
        sunrise={dataWeather.sunrise}
        sunset={dataWeather.sunset}
        updateData={() => updateData()}
      />
    </Container>
  );
};

export default Main;
