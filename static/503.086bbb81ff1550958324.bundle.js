webpackJsonp([503],{1609:function(module,exports){module.exports="import React from 'react';\nimport ReactTestUtils from 'react-dom/test-utils';\nimport dropdownDriverFactory from './Dropdown.driver';\nimport Dropdown from './Dropdown';\nimport {createDriverFactory} from '../test-common';\nimport {dropdownTestkitFactory} from '../../testkit';\nimport {dropdownTestkitFactory as enzymeDropdownTestkitFactory} from '../../testkit/enzyme';\nimport {mount} from 'enzyme';\nimport {runInputWithOptionsTest} from '../InputWithOptions/InputWithOptions.spec';\n\nrunInputWithOptionsTest(dropdownDriverFactory);\n\ndescribe('Dropdown', () => {\n\n  const createDriver = createDriverFactory(dropdownDriverFactory);\n\n  const getOptions = () => [\n    {id: 0, value: 'Option 1'},\n    {id: 1, value: 'Option 2'},\n    {id: 2, value: 'Option 3', disabled: true},\n    {id: 3, value: 'Option 4'},\n    {id: 'divider1', value: '-'},\n    {id: 'element1', value: <span style={{color: 'brown'}}>Option 4</span>}\n  ];\n\n  it('should select item with selectedId on init state', () => {\n    const {inputDriver, dropdownLayoutDriver} = createDriver(<Dropdown options={getOptions()} selectedId={0}/>);\n\n    expect(dropdownLayoutDriver.isOptionSelected(0)).toBeTruthy();\n    expect(inputDriver.getValue()).toBe('Option 1');\n  });\n\n  it('should select an item when clicked', () => {\n    const {driver, dropdownLayoutDriver} = createDriver(<Dropdown options={getOptions()}/>);\n    driver.focus();\n    dropdownLayoutDriver.clickAtOption(0);\n    expect(dropdownLayoutDriver.isOptionSelected(0)).toBeTruthy();\n  });\n\n  it('should enter the selected option text when selected', () => {\n    const {driver, inputDriver, dropdownLayoutDriver} = createDriver(<Dropdown options={getOptions()}/>);\n    driver.focus();\n    dropdownLayoutDriver.clickAtOption(0);\n    expect(inputDriver.getValue()).toBe('Option 1');\n  });\n\n  it('should update text when selected option changes', () => {\n    const options = getOptions();\n    const {driver, inputDriver, dropdownLayoutDriver} = createDriver(<Dropdown options={options} selectedId={0}/>);\n    driver.focus();\n    dropdownLayoutDriver.clickAtOption(0);\n    expect(inputDriver.getValue()).toBe('Option 1');\n    options[0].value = 'Updated';\n    driver.setProps({options, selectedId: 0});\n    expect(inputDriver.getValue()).toBe('Updated');\n  });\n\n  it('should be read only', () => {\n    const {inputDriver} = createDriver(<Dropdown options={getOptions()}/>);\n    expect(inputDriver.getReadOnly()).toBeTruthy();\n  });\n\n  describe('testkit', () => {\n    it('should exist', () => {\n      const div = document.createElement('div');\n      const dataHook = 'myDataHook';\n      const wrapper = div.appendChild(ReactTestUtils.renderIntoDocument(<div><Dropdown dataHook={dataHook}/></div>));\n      const dropdownTestkit = dropdownTestkitFactory({wrapper, dataHook});\n      expect(dropdownTestkit.driver.exists()).toBeTruthy();\n      expect(dropdownTestkit.inputDriver.exists()).toBeTruthy();\n      expect(dropdownTestkit.dropdownLayoutDriver.exists()).toBeTruthy();\n    });\n  });\n\n  describe('enzyme testkit', () => {\n    it('should exist', () => {\n      const dataHook = 'myDataHook';\n      const wrapper = mount(<Dropdown dataHook={dataHook}/>);\n      const dropdownTestkit = enzymeDropdownTestkitFactory({wrapper, dataHook});\n      expect(dropdownTestkit.driver.exists()).toBeTruthy();\n      expect(dropdownTestkit.inputDriver.exists()).toBeTruthy();\n      expect(dropdownTestkit.dropdownLayoutDriver.exists()).toBeTruthy();\n    });\n  });\n});\n"}});