webpackJsonp([322],{1790:function(module,exports){module.exports="import React from 'react';\nimport ReactTestUtils from 'react-dom/test-utils';\nimport Label from './Label';\nimport labelDriverFactory from './Label.driver';\nimport {createDriverFactory} from '../test-common';\nimport {labelTestkitFactory} from '../../testkit';\nimport {labelTestkitFactory as enzymeLabelTestkitFactory} from '../../testkit/enzyme';\nimport {mount} from 'enzyme';\n\ndescribe('Label', () => {\n\n  const createDriver = createDriverFactory(labelDriverFactory);\n\n  it('should contain native label', () => {\n    const driver = createDriver(<Label appearance=\"T1\"/>);\n    expect(driver.getTagName()).toBe('label');\n  });\n\n  it('should render children', () => {\n    const children = 'inner text';\n\n    const driver = createDriver(<Label appearance=\"T1\">{children}</Label>);\n    expect(driver.getLabelText()).toBe(children);\n  });\n\n  it('should support `for` attribute', () => {\n    const forAttr = 'some_id';\n\n    const driver = createDriver(<Label appearance=\"T1\" for={forAttr}/>);\n    expect(driver.getAttr('for')).toBe(forAttr);\n  });\n\n  it('should apply class by appearance', () => {\n    const appearance = 'T1.1';\n\n    const driver = createDriver(<Label appearance={appearance}/>);\n    expect(driver.getClassList()).toContain('t1_1');\n  });\n});\n\ndescribe('testkit', () => {\n  it('should create new driver', () => {\n    const div = document.createElement('div');\n    const dataHook = 'myDataHook';\n    const wrapper = div.appendChild(ReactTestUtils.renderIntoDocument(<div><Label dataHook={dataHook} appearance=\"T1\">label</Label></div>));\n    const labelTestkit = labelTestkitFactory({wrapper, dataHook});\n    expect(labelTestkit.exists()).toBeTruthy();\n    expect(labelTestkit.getLabelText()).toBe('label');\n  });\n});\n\ndescribe('enzyme testkit', () => {\n  it('should create new driver', () => {\n    const dataHook = 'myDataHook';\n    const wrapper = mount(<Label dataHook={dataHook} appearance=\"T1\">label2</Label>);\n    const labelTestkit = enzymeLabelTestkitFactory({wrapper, dataHook});\n    expect(labelTestkit.exists()).toBeTruthy();\n    expect(labelTestkit.getLabelText()).toBe('label2');\n  });\n});\n"}});