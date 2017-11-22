## LinkWithOptions TestKit API

#### Protractor test kit:

| method | arguments | returned value | description |
|--------|-----------|----------------|-------------|
| mouseEnter | - | - | move mouse over the link |
| mouseLeave | - | - | move the mouse from the component |
| getDropdown | - | element | get the dropdown element |
| getDropdownItem | number | element | get the item index <arg> |
| getDropdownItemsCount | - | number | get number of options |
| element | - | element | get the actual element |
  

## Usage Example

> E2E example
```javascript
  //Element should be rendered with a data-hook into the DOM
  <LinkWithOptions dataHook="myDataHook">
    <LinkWithOptions.Link><Image size="30"/></LinkWithOptions.Link>
    <LinkWithOptions.Option id="1">Option 1</LinkWithOptions.Option>
    <LinkWithOptions.Option id="2">Option 2</LinkWithOptions.Option>
    <LinkWithOptions.Option id="3">Option 3</LinkWithOptions.Option>
  </LinkWithOptions>

  /**********************
   Protractor example
  **********************/

  import {linkWithOptionsTestkitFactory, waitForVisibilityOf} from 'wix-style-react/dist/testkit/protractor';

  //Create an element testkit via the data-hook attribute
  const testkit = linkWithOptionsTestkitFactory({dataHook: 'myDataHook'});

  browser.get(appUrl);  //Your application url

  waitForVisibilityOf(testkit.element(), 'Cannot find Dropdown')
     .then(() => {
       //Do tests
        expect(testkit.element().isDisplayed()).toBeTruthy();
     });
```
