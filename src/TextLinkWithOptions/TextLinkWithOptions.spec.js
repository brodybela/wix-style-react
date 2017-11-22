import React from 'react';
import TextLinkWithOptions from '../TextLinkWithOptions';
import TextLinkWithOptionsDriverFactory from './TextLinkWithOptions.driver';
import {createDriverFactory} from '../test-common';
import {textLinkWithOptionsTestkitFactory} from '../../testkit';
import {textLinkWithOptionsTestkitFactory as enzymeTextLinkWithOptionsTestkitFactory} from '../../testkit/enzyme';
import {mount} from 'enzyme';
import ReactTestUtils from 'react-dom/test-utils';

describe('TextLinkWithOptions', () => {
  const createDriver = createDriverFactory(TextLinkWithOptionsDriverFactory);

  const options = [
    {id: 0, value: 'Option 1'},
    {id: 1, value: 'Option 2'},
    {id: 2, value: 'Option 3', disabled: true},
    {id: 3, value: 'Option 4'},
    {id: 'divider1', value: '-'},
    {id: 'element1', value: <span style={{color: 'brown'}}>Option 4</span>}
  ];

  const optionsToArray = options => options.map(option => {
    const {value, ...props} = option;
    return <TextLinkWithOptions.Option key={option.id} {...props}>{value}</TextLinkWithOptions.Option>;
  });

  const textLinkWithOptions = props => (
    <TextLinkWithOptions {...props}>
      <TextLinkWithOptions.Link/>
      {optionsToArray(options)}
    </TextLinkWithOptions>
  );

  it('should have a Button and a hidden DropdownLayout by default', () => {
    const {driver, dropdownLayoutDriver} = createDriver(textLinkWithOptions());
    expect(driver.exists()).toBeTruthy();
    expect(dropdownLayoutDriver.exists()).toBeTruthy();
    expect(dropdownLayoutDriver.isShown()).toBeFalsy();
  });

  it('should display dropdown only on mouse hover', () => {
    const {driver, dropdownLayoutDriver} = createDriver(textLinkWithOptions());
    expect(dropdownLayoutDriver.isShown()).toBeFalsy();
    driver.mouseEnter();
    expect(dropdownLayoutDriver.isShown()).toBeTruthy();
    driver.mouseLeave();
    expect(dropdownLayoutDriver.isShown()).toBeFalsy();
  });

  it('should hide the dropdown when an option gets selected', async () => {
    const {driver, dropdownLayoutDriver} = createDriver(textLinkWithOptions());
    driver.mouseEnter();
    expect(dropdownLayoutDriver.isShown()).toBeTruthy();
    dropdownLayoutDriver.clickAtOption(0);
    expect(dropdownLayoutDriver.isShown()).toBeFalsy();
  });

  it('should not hide the dropdown when selecting an option which is already selected', async () => {
    const {driver, dropdownLayoutDriver} = createDriver(textLinkWithOptions({selectedId: 0}));
    driver.mouseEnter();
    expect(dropdownLayoutDriver.isShown()).toBeTruthy();
    dropdownLayoutDriver.clickAtOption(0);
    expect(dropdownLayoutDriver.isShown()).toBeTruthy();
  });

  it('should call onSelect when an option is clicked', () => {
    const onSelect = jest.fn();
    const {driver, dropdownLayoutDriver} = createDriver(textLinkWithOptions({onSelect}));
    driver.mouseEnter();
    dropdownLayoutDriver.clickAtOption(0);
    expect(onSelect).toBeCalledWith(options[0]);
  });

  it('should not call onSelect when a selected option is pressed', () => {
    const onSelect = jest.fn();
    const {driver, dropdownLayoutDriver} = createDriver(textLinkWithOptions({onSelect, selectedId: options[0].id}));
    driver.mouseEnter();
    dropdownLayoutDriver.clickAtOption(0);
    expect(onSelect).not.toBeCalled();
  });

  it('should have arrow in the dropdown by default', () => {
    const {driver, dropdownLayoutDriver} = createDriver(textLinkWithOptions());
    driver.mouseEnter();
    expect(dropdownLayoutDriver.hasTopArrow()).toBeTruthy();
  });

  it('should not have dropDirectin up by default', () => {
    const {dropdownLayoutDriver} = createDriver(textLinkWithOptions());
    expect(dropdownLayoutDriver.isDropDirectionUp()).toBe(false);
  });

  it('should have dropDirectin up', () => {
    const {dropdownLayoutDriver} = createDriver(textLinkWithOptions({dropDirectionUp: true}));
    expect(dropdownLayoutDriver.isDropDirectionUp()).toBe(true);
  });

  describe('link', () => {
    it('should not have blue hovered link by default', () => {
      const {driver} = createDriver(textLinkWithOptions());
      expect(driver.isLinkBlue()).toBe(false);
    });

    it('should not have blue hovered link when hovering the outer wrapper', () => {
      const {driver} = createDriver(textLinkWithOptions());

      ReactTestUtils.Simulate.mouseEnter(driver.element());
      expect(driver.isLinkBlue()).toBe(false);
    });

    it('should have blue hovered link when hovering over the link', () => {
      const {driver} = createDriver(textLinkWithOptions());

      driver.mouseEnter();
      expect(driver.isLinkBlue()).toBe(true);
    });

    it('should have blue hovered link when hovering over the link, then moving the mouse to the outer wrapper', () => {
      const {driver} = createDriver(textLinkWithOptions());

      driver.mouseEnter();

      ReactTestUtils.Simulate.mouseLeave(driver.linkWrapper());
      expect(driver.isLinkBlue()).toBe(true);

      ReactTestUtils.Simulate.mouseEnter(driver.element());
      expect(driver.isLinkBlue()).toBe(true);
    });

    it('should not have blue hovered link when hovering over the link, then performing mouseLeave from the outer wrapper', () => {
      const {driver} = createDriver(textLinkWithOptions());

      driver.mouseEnter();
      expect(driver.isLinkBlue()).toBe(true);

      driver.mouseLeave();
      expect(driver.isLinkBlue()).toBe(false);
    });
  });

  describe('testkit', () => {
    it('should exist', () => {
      const div = document.createElement('div');
      const dataHook = 'myDataHook';
      const wrapper = div.appendChild(ReactTestUtils.renderIntoDocument(
        <div>
          <TextLinkWithOptions dataHook={dataHook}>
            <TextLinkWithOptions.Link/>
            {optionsToArray(options)}
          </TextLinkWithOptions>
        </div>
      ));
      const textLinkWithOptionsTestkit = textLinkWithOptionsTestkitFactory({wrapper, dataHook});
      expect(textLinkWithOptionsTestkit.driver.exists()).toBeTruthy();
      expect(textLinkWithOptionsTestkit.dropdownLayoutDriver.exists()).toBeTruthy();
    });
  });

  describe('enzyme testkit', () => {
    it('should exist', () => {
      const dataHook = 'myDataHook';
      const wrapper = mount(
        <TextLinkWithOptions dataHook={dataHook}>
          <TextLinkWithOptions.Link/>
          {optionsToArray(options)}
        </TextLinkWithOptions>
      );
      const textLinkWithOptionsTestkit = enzymeTextLinkWithOptionsTestkitFactory({wrapper, dataHook});
      expect(textLinkWithOptionsTestkit.driver.exists()).toBeTruthy();
      expect(textLinkWithOptionsTestkit.dropdownLayoutDriver.exists()).toBeTruthy();
    });
  });
});
