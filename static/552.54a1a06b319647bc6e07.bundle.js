webpackJsonp([552],{1560:function(module,exports){module.exports="import React from 'react';\nimport ReactTestUtils from 'react-dom/test-utils';\nimport headerDriverFactory from './Header.driver';\nimport {createDriverFactory} from '../../test-common';\nimport Header from './Header';\nimport {headerTestkitFactory} from '../../../testkit';\nimport {headerTestkitFactory as enzymeHeaderTestkitFactory} from '../../../testkit/enzyme';\nimport {mount} from 'enzyme';\n\ndescribe('Header', () => {\n  const createDriver = createDriverFactory(headerDriverFactory);\n\n  it('should have a title', () => {\n    const driver = createDriver(<Header title=\"Header Title\"/>);\n    expect(driver.title()).toBe('Header Title');\n  });\n\n  it('should have a subtitle', () => {\n    const driver = createDriver(<Header subtitle=\"Header Subtitle\" title=\"Header Title\"/>);\n    expect(driver.subtitle()).toBe('Header Subtitle');\n  });\n\n  describe('testkit', () => {\n    it('should exist', () => {\n      const div = document.createElement('div');\n      const dataHook = 'myDataHook';\n      const wrapper = div.appendChild(ReactTestUtils.renderIntoDocument(<div><Header title=\"Header Title\" dataHook={dataHook}/></div>));\n      const headerTestkit = headerTestkitFactory({wrapper, dataHook});\n      expect(headerTestkit.exists()).toBeTruthy();\n    });\n  });\n\n  describe('enzyme testkit', () => {\n    it('should exist', () => {\n      const dataHook = 'myDataHook';\n      const wrapper = mount(<Header title=\"Header title\" dataHook={dataHook}/>);\n      const headerDriverTestkit = enzymeHeaderTestkitFactory({wrapper, dataHook});\n      expect(headerDriverTestkit.exists()).toBeTruthy();\n    });\n  });\n});\n"}});