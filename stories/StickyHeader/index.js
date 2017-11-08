import React from 'react';
import {storiesOf} from '@storybook/react';
import AutoDocs from '../utils/Components/AutoDocs';
import CodeExample from '../utils/Components/CodeExample';
import StickyHeaderSource from '!raw-loader!wix-style-react/StickyHeader/StickyHeader';

import StickyHeaderExample from './DefaultStickyHeader';
import StickyHeaderExampleRaw from '!raw-loader!./DefaultStickyHeader';

storiesOf('Core', module)
.add('StickyHeader', () => (
  <div>
    <AutoDocs source={StickyHeaderSource}/>

    <h1>Usage examples</h1>

    <CodeExample title="Standard" code={StickyHeaderExampleRaw}>
      <StickyHeaderExample/>
    </CodeExample>
  </div>
));
