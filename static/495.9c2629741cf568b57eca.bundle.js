webpackJsonp([495],{1617:function(module,exports){module.exports="import eyes from 'eyes.it';\nimport {editableSelectorTestkitFactory, getStoryUrl, waitForVisibilityOf} from '../../testkit/protractor';\n\ndescribe('EditableSelector', () => {\n  const storyUrl = getStoryUrl('4. Selection', '4.9 EditableSelector');\n  const dataHook = 'story-editable-selector';\n  let driver;\n\n  beforeEach(() => {\n    driver = editableSelectorTestkitFactory({dataHook});\n    browser.get(storyUrl);\n  });\n\n  eyes.it('should render a title', () => {\n    waitForVisibilityOf(driver.element(), 'Cannot find EditableSelector')\n    .then(() => {\n      expect(driver.title().getText()).toBe('Type of Seeds');\n    });\n  });\n\n\n  eyes.it('should create a new option', () => {\n    waitForVisibilityOf(driver.element(), 'Cannot find EditableSelector')\n    .then(() => {\n      const newOption = 'Shir';\n      driver.createNewRow(newOption);\n      driver.clickApprove();\n      expect(driver.item(2).getText()).toBe(newOption);\n    });\n  });\n\n  eyes.it('should not modify an option when edit is cancelled', () => {\n    waitForVisibilityOf(driver.element(), 'Cannot find EditableSelector')\n    .then(() => {\n      const newOption = 'Shir';\n      driver.editRow(1, newOption);\n      driver.clickCancel();\n      expect(driver.item(1).getText()).not.toBe(newOption);\n    });\n  });\n\n  eyes.it('should save an option when edit is approved', () => {\n    waitForVisibilityOf(driver.element(), 'Cannot find EditableSelector')\n    .then(() => {\n      const newOption = 'Shir';\n      driver.editRow(1, newOption);\n      driver.clickApprove();\n      expect(driver.item(1).getText()).toBe(newOption);\n    });\n  });\n\n  eyes.it('should select an option when clicked', () => {\n    waitForVisibilityOf(driver.element(), 'Cannot find EditableSelector')\n    .then(() => {\n      driver.toggleItem(0);\n      expect(driver.isSelected(0)).toBe(true);\n    });\n  });\n\n  eyes.it('should delete an option', () => {\n    waitForVisibilityOf(driver.element(), 'Cannot find EditableSelector')\n    .then(() => {\n      driver.deleteRow(1);\n      expect(driver.items().count()).toBe(1);\n    });\n  });\n\n});\n"}});