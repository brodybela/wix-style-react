webpackJsonp([470],{1642:function(module,exports){module.exports="import eyes from 'eyes.it';\nimport {highlighterTestkitFactory, getStoryUrl} from '../../testkit/protractor';\n\ndescribe('Highlighter', () => {\n  const storyUrl = getStoryUrl('Core', 'Highlighter');\n  const dataHook = 'story-highlighter';\n\n  eyes.it('should render', () => {\n    const driver = highlighterTestkitFactory({dataHook});\n\n    browser.get(storyUrl);\n\n    expect(driver.getElement().isDisplayed()).toBe(true);\n  });\n\n});\n"}});