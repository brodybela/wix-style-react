import eyes from 'eyes.it';
import {textLinkWithOptionsTestkitFactory, getStoryUrl, waitForVisibilityOf} from '../../testkit/protractor';

describe('TextLinkWithOptions', () => {
  const storyUrl = getStoryUrl('4. Selection', '4.5 TextLinkWithOptions');
  const dataHook = 'story-textLinkWithOptions';

  eyes.it('should hide dropdown when selecting an option which is not already selected', () => {
    browser.get(storyUrl);
    const driver = textLinkWithOptionsTestkitFactory({dataHook});

    waitForVisibilityOf(driver.element(), 'Cannot find textLinkWithOptions')
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
