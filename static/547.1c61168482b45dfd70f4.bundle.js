webpackJsonp([547],{1565:function(module,exports){module.exports="import eyes from 'eyes.it';\nimport {checkboxTestkitFactory, getStoryUrl, waitForVisibilityOf} from '../../testkit/protractor';\nimport autoExampleDriver from '../../stories/utils/Components/AutoExample/protractor.driver';\n\ndescribe('Checkbox', () => {\n  const storyUrl = getStoryUrl('4. Selection', '4.2 Checkbox');\n  const checkboxDriver = checkboxTestkitFactory({dataHook: 'storybook-checkbox'});\n\n  beforeEach(() => {\n    browser.get(storyUrl);\n  });\n\n  eyes.it('should toggle state when clicked', () => {\n    waitForVisibilityOf(checkboxDriver.element(), 'Cannot find Checkbox')\n      .then(() => {\n        autoExampleDriver.setProps({checked: true});\n        expect(checkboxDriver.isChecked()).toBe(true);\n\n        autoExampleDriver.setProps({checked: false});\n        expect(checkboxDriver.isChecked()).toBe(false);\n      });\n  });\n});\n"}});