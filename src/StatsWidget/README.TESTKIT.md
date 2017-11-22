# StatsWidget Testkits

> StatsWidget

## StatsWidget TestKit API

| method | arguments | returned value | description |
|--------|-----------|----------------|-------------|
| titleText (Only in Unit Test)| - | string | returns header title |
| getStatisticTitle (Only in Unit Test)| index | string | returns title of statistics with index passed as param |
| getStatisticSubTitle (Only in Unit Test)| index | string | returns subitle of statistics with index passed as param |
| getStatisticPersentValue (Only in Unit Test)| index | number | returns persents value of statistics with index passed as param |
| getStatisticPersentClass (Only in Unit Test)| index | string | returns all classes of persent wrapper element of statistics with index passed as param |
| selectFilter (Only in Unit Test)| dataHook | - | clicks on filter |
| exists (Only in Unit Test) | - | bool | fulfilled if element in the DOM |
| element (Only in E2E) | - | element | returns the driver element |

## Usage Example

> Unit testing example

```javascript
  import React from 'react';
  import {statsWidgetTestkitFactory} from 'wix-style-react/dist/testkit';
  import {statsWidgetTestkitFactory as enzymeStatsWidgetTestkitFactory} from 'wix-style-react/dist/testkit/enzyme';

  /***************
   enzyme example
  ***************/

  const dataHook = 'myDataHook';
  const statistics = [{title: '15$', subtitle: 'revenue'}];
  const wrapper = mount(<div/><StatsWidget title="title" statistics={statistics} dataHook={dataHook}/></div>);
  const testkit = enzymeStatsWidgetTestkitFactory({wrapper, dataHook});

  //Do tests
  expect(testkit.driver.exists()).toBeTruthy();

  /**********************
   ReactTestUtils example
  **********************/

  const div = document.createElement('div');
  const dataHook = 'myDataHook';
  const statistics = [{title: '15$', subtitle: 'revenue'}];
  const wrapper = div.appendChild(
    ReactTestUtils.renderIntoDocument(<div/><StatsWidget title="title" statistics={statistics} dataHook={dataHook}/></div>, {dataHook})
  );
  const testkit = statsWidgetTestkitFactory({wrapper, dataHook});

  //Do tests
  expect(testkit.driver.exists()).toBeTruthy();
```
> E2E example

```javascript
  //Element should be rendered with a data-hook into the DOM
  const statistics = [{title: '15$', subtitle: 'revenue'}];
  <StatsWidget title="title" statistics={statistics} dataHook="my-stats-widget"/>

  /*******************
   protractor example
  *******************/

  import {statsWidgetTestkitFactory, waitForVisibilityOf} from 'wix-style-react/dist/testkit/protractor';

  //Create an element testkit via the data-hook attribute
  const testkit = statsWidgetTestkitFactory({dataHook: 'my-stats-widget'});

  browser.get(appUrl); //Your application url

  waitForVisibilityOf(testkit.element(), 'Cannot find StatsWidget')
     .then(() => {
        //Do tests
        expect(testkit.element().isDisplayed()).toBeTruthy();
     });

```
