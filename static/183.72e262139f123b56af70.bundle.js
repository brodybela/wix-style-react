webpackJsonp([183],{1929:function(module,exports){module.exports="import eyes from 'eyes.it';\nimport {tpaInputTestkitFactory, getStoryUrl, waitForVisibilityOf} from '../../../testkit/protractor';\n\ndescribe('TPA Input', () => {\n  const storyUrl = getStoryUrl('TPA', 'Input');\n\n  eyes.it('should enter value to Input', () => {\n    const dataHook = 'story-input';\n    const driver = tpaInputTestkitFactory({dataHook});\n\n    browser.get(storyUrl);\n\n    waitForVisibilityOf(driver.element(), 'Cannot find Input')\n      .then(() => {\n        driver.enterText('123');\n        expect(driver.getText()).toBe('123');\n      });\n  });\n});\n"}});