import React from 'react';
import {storiesOf} from '@storybook/react';
import CodeExample from '../utils/Components/CodeExample';
import TabbedView from '../utils/Components/TabbedView';
import Markdown from '../utils/Components/Markdown';
import Readme from '../../src/TextLinkWithOptions/README.md';
import ReadmeTestkit from '../../src/TextLinkWithOptions/README.TESTKIT.md';

import Example from './Example';
import ExampleRaw from '!raw-loader!./Example';

storiesOf('4. Selection', module)
  .add('4.5 TextLinkWithOptions', () => (
    <TabbedView tabs={['API', 'Testkit']}>
      <div>
        <Markdown source={Readme}/>

        <CodeExample title="Example" code={ExampleRaw}>
          <Example/>
        </CodeExample>
      </div>
      <div>
        <Markdown source={ReadmeTestkit}/>
      </div>
    </TabbedView>
  ));
