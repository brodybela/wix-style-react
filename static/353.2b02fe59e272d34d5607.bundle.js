webpackJsonp([353],{1759:function(module,exports){module.exports="import eyes from 'eyes.it';\nimport {imageViewerTestkitFactory, getStoryUrl, waitForVisibilityOf} from '../../testkit/protractor';\n\ndescribe('ImageViewer', () => {\n  const storyUrl = getStoryUrl('Core', 'ImageViewer');\n\n  eyes.it('should click ImageViewer', () => {\n    const driver = imageViewerTestkitFactory({dataHook: 'empty-image-viewer'});\n\n    browser.get(storyUrl);\n\n    waitForVisibilityOf(driver.element(), 'Cannot find ImageViewer')\n      .then(() => {\n        driver.click();\n      });\n  });\n});\n"}});