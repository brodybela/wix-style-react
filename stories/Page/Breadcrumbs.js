import React from 'react';
import Breadcrumbs from '../../src/Breadcrumbs/Breadcrumbs';

export const BreadcrumbsSample = () => (
  <Breadcrumbs
    items={[{id: '1', value: 'First item'}, {id: '2', value: 'Linked item', link: 'http://www.wix.com'}, {id: '3', value: 'Third item'}]}
    activeId="3"
    size="medium"
    theme="onGrayBackground"
    onClick={() => { }}
    />);

export default BreadcrumbsSample;
