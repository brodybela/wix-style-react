import eyes from 'eyes.it';
import {linkWithOptionsTestkitFactory, getStoryUrl, waitForVisibilityOf} from '../../testkit/protractor';

describe('LinkWithOptions', () => {
  const storyUrl = getStoryUrl('4. Selection', '4.5 LinkWithOptions');
  const dataHook = 'story-linkWithOptions';

  eyes.it('should hide dropdown when selecting an option which is not already selected', () => {
    browser.get(storyUrl);
    const driver = linkWithOptionsTestkitFactory({dataHook});

    waitForVisibilityOf(driver.element(), 'Cannot find linkWithOptions')
    .then(() => {
      driver.mouseEnter();
      driver.getDropdownItem(1).click();

      driver.mouseLeave();
      driver.mouseEnter();
      driver.getDropdownItem(1).click();
      expect(driver.getDropdown().isDisplayed()).toBe(true);
    });
  });
});
