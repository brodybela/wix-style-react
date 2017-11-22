import React from 'react';
import LinkWithOptions from '../LinkWithOptions';
import LinkWithOptionsDriverFactory from './LinkWithOptions.driver';
import {createDriverFactory} from '../test-common';
import {linkWithOptionsTestkitFactory} from '../../testkit';
import {linkWithOptionsTestkitFactory as enzymeLinkWithOptionsTestkitFactory} from '../../testkit/enzyme';
import {mount} from 'enzyme';
import ReactTestUtils from 'react-dom/test-utils';

describe('LinkWithOptions', () => {
  const createDriver = createDriverFactory(LinkWithOptionsDriverFactory);

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
    return <LinkWithOptions.Option key={option.id} {...props}>{value}</LinkWithOptions.Option>;
  });

  const linkWithOptions = props => (
    <LinkWithOptions {...props}>
      <LinkWithOptions.Link/>
      {optionsToArray(options)}
    </LinkWithOptions>
  );

  it('should have a Button and a hidden DropdownLayout by default', () => {
    const {driver, dropdownLayoutDriver} = createDriver(linkWithOptions());
    expect(driver.exists()).toBeTruthy();
    expect(dropdownLayoutDriver.exists()).toBeTruthy();
    expect(dropdownLayoutDriver.isShown()).toBeFalsy();
  });

  it('should display dropdown only on mouse hover', () => {
    const {driver, dropdownLayoutDriver} = createDriver(linkWithOptions());
    expect(dropdownLayoutDriver.isShown()).toBeFalsy();
    driver.mouseEnter();
    expect(dropdownLayoutDriver.isShown()).toBeTruthy();
    driver.mouseLeave();
    expect(dropdownLayoutDriver.isShown()).toBeFalsy();
  });

  it('should hide the dropdown when an option gets selected', async () => {
    const {driver, dropdownLayoutDriver} = createDriver(linkWithOptions());
    driver.mouseEnter();
    expect(dropdownLayoutDriver.isShown()).toBeTruthy();
    dropdownLayoutDriver.clickAtOption(0);
    expect(dropdownLayoutDriver.isShown()).toBeFalsy();
  });

  it('should not hide the dropdown when selecting an option which is already selected', async () => {
    const {driver, dropdownLayoutDriver} = createDriver(linkWithOptions({selectedId: 0}));
    driver.mouseEnter();
    expect(dropdownLayoutDriver.isShown()).toBeTruthy();
    dropdownLayoutDriver.clickAtOption(0);
    expect(dropdownLayoutDriver.isShown()).toBeTruthy();
  });

  it('should call onSelect when an option is clicked', () => {
    const onSelect = jest.fn();
    const {driver, dropdownLayoutDriver} = createDriver(linkWithOptions({onSelect}));
    driver.mouseEnter();
    dropdownLayoutDriver.clickAtOption(0);
    expect(onSelect).toBeCalledWith(options[0]);
  });

  it('should not call onSelect when a selected option is pressed', () => {
    const onSelect = jest.fn();
    const {driver, dropdownLayoutDriver} = createDriver(linkWithOptions({onSelect, selectedId: options[0].id}));
    driver.mouseEnter();
    dropdownLayoutDriver.clickAtOption(0);
    expect(onSelect).not.toBeCalled();
  });

  it('should have arrow in the dropdown by default', () => {
    const {driver, dropdownLayoutDriver} = createDriver(linkWithOptions());
    driver.mouseEnter();
    expect(dropdownLayoutDriver.hasTopArrow()).toBeTruthy();
  });

  it('should not have dropDirectin up by default', () => {
    const {dropdownLayoutDriver} = createDriver(linkWithOptions());
    expect(dropdownLayoutDriver.isDropDirectionUp()).toBe(false);
  });

  it('should have dropDirectin up', () => {
    const {dropdownLayoutDriver} = createDriver(linkWithOptions({dropDirectionUp: true}));
    expect(dropdownLayoutDriver.isDropDirectionUp()).toBe(true);
  });

  describe('link', () => {
    it('should not have blue hovered link by default', () => {
      const {driver} = createDriver(linkWithOptions());
      expect(driver.isLinkBlue()).toBe(false);
    });

    it('should not have blue hovered link when hovering the outer wrapper', () => {
      const {driver} = createDriver(linkWithOptions());

      ReactTestUtils.Simulate.mouseEnter(driver.element());
      expect(driver.isLinkBlue()).toBe(false);
    });

    it('should have blue hovered link when hovering over the link', () => {
      const {driver} = createDriver(linkWithOptions());

      driver.mouseEnter();
      expect(driver.isLinkBlue()).toBe(true);
    });

    it('should have blue hovered link when hovering over the link, then moving the mouse to the outer wrapper', () => {
      const {driver} = createDriver(linkWithOptions());

      driver.mouseEnter();

      ReactTestUtils.Simulate.mouseLeave(driver.linkWrapper());
      expect(driver.isLinkBlue()).toBe(true);

      ReactTestUtils.Simulate.mouseEnter(driver.element());
      expect(driver.isLinkBlue()).toBe(true);
    });

    it('should not have blue hovered link when hovering over the link, then performing mouseLeave from the outer wrapper', () => {
      const {driver} = createDriver(linkWithOptions());

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
          <LinkWithOptions dataHook={dataHook}>
            <LinkWithOptions.Link/>
            {optionsToArray(options)}
          </LinkWithOptions>
        </div>
      ));
      const linkWithOptionsTestkit = linkWithOptionsTestkitFactory({wrapper, dataHook});
      expect(linkWithOptionsTestkit.driver.exists()).toBeTruthy();
      expect(linkWithOptionsTestkit.dropdownLayoutDriver.exists()).toBeTruthy();
    });
  });

  describe('enzyme testkit', () => {
    it('should exist', () => {
      const dataHook = 'myDataHook';
      const wrapper = mount(
        <LinkWithOptions dataHook={dataHook}>
          <LinkWithOptions.Link/>
          {optionsToArray(options)}
        </LinkWithOptions>
      );
      const linkWithOptionsTestkit = enzymeLinkWithOptionsTestkitFactory({wrapper, dataHook});
      expect(linkWithOptionsTestkit.driver.exists()).toBeTruthy();
      expect(linkWithOptionsTestkit.dropdownLayoutDriver.exists()).toBeTruthy();
    });
  });
});
