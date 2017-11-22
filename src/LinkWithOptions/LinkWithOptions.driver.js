import dropdownLayoutDriverFactory from '../DropdownLayout/DropdownLayout.driver';
import ReactTestUtils from 'react-dom/test-utils';
import {isClassExists} from '../../test/utils';

const LinkWithOptionsDriverFactory = ({element, wrapper}) => {
  const linkWrapper = element.querySelector('[data-hook=link-wrapper]');
  const dropdownLayoutWrapper = element.querySelector('[data-hook=linkWithOptions-dropdownLayout-wrapper]');
  const dropdownLayout = element.querySelector('[data-hook=linkWithOptions-dropdownLayout]');
  const dropdownLayoutDriver = dropdownLayoutDriverFactory({element: dropdownLayout, wrapper});

  const driver = {
    exists: () => !!element,
    mouseEnter: () => ReactTestUtils.Simulate.mouseEnter(linkWrapper),
    mouseLeave: () => ReactTestUtils.Simulate.mouseLeave(element),
    isLinkBlue: () => isClassExists(element, 'hover'),
    linkWrapper: () => linkWrapper,
    element: () => element
  };

  return {
    driver,
    dropdownLayoutDriver: {
      ...dropdownLayoutDriver,
      isDropDirectionUp: () => dropdownLayoutDriver.isUp() && isClassExists(dropdownLayoutWrapper, 'dropDirectionUp')
    }
  };
};

export default LinkWithOptionsDriverFactory;
