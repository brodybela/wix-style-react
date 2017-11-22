import React from 'react';
import StatsWidget from '../../src/StatsWidget';
import styles from './ExampleStatsWidget.scss';

const statistics = [{
  title: '10$',
  subtitle: 'Revenue',
  persent: -15
},
{
  title: '2',
  subtitle: 'Products',
  persent: -15
},
{
  title: '1',
  subtitle: 'Transactions',
  persent: 0
},
{
  title: '5',
  subtitle: 'Profit',
  persent: 10
},
{
  title: '15',
  subtitle: 'Music',
  persent: 15
}];

export default () =>
  <div data-hook="card-example" className={styles.statsWidgetWrapper}>
    <StatsWidget title="Let's what going on with your store" statistics={statistics}/>
  </div>;
