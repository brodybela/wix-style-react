import React from 'react';

import story from '../utils/Components/Story';

import Breadcrumbs from 'wix-style-react/Breadcrumbs';
import styles from './StickyHeader.scss';

story({
  category: 'Core',
  componentSrcFolder: 'StickyHeader',
  componentProps: {
    scrollContainerClass: styles.container,
    title: 'This is a title',
    breadCrumbs: <Breadcrumbs
      items={[
        {id: '1', value: 'First item'},
        {
          id: '2',
          value: 'Linked item',
          link: 'http://www.wix.com'
        },
        {id: '3', value: 'Third item'}
      ]}
      activeId="1"
      size="medium"
      theme="onGrayBackground"
      />,
    children: <div styles={{height: '1500px'}}>Looong content!</div>
  }
});
