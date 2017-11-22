webpackJsonp([573],{1539:function(module,exports){module.exports="import React from 'react';\nimport ButtonLayout from './ButtonLayout';\nimport {createDriverFactory} from '../test-common';\nimport buttonDriverFactory from './ButtonLayout.driver';\n\nconst someDivWithLayout = (props = {}) => (\n  <ButtonLayout {...props}>\n    <div>\n      abc\n    </div>\n  </ButtonLayout>\n);\n\ndescribe('ButtonLayout', () => {\n  const createDriver = createDriverFactory(buttonDriverFactory);\n\n  it('should wrap a native component with ButtonLayout', () => {\n    const driver = createDriver(someDivWithLayout());\n\n    expect(driver.exists()).toEqual(true);\n    expect(driver.doesComponentHasClass('fullblue')).toEqual(true);\n  });\n\n  it('should preserve all existing properties of the element', () => {\n    const href = 'http://www.wix.com';\n    const driver = createDriver(\n      <ButtonLayout>\n        <a href={href}>\n          abc\n        </a>\n      </ButtonLayout>\n    );\n\n    expect(driver.exists()).toEqual(true);\n    expect(driver.getComponentAttribute('href')).toEqual(href);\n  });\n\n  it('should extend existing className of the element', () => {\n    const driver = createDriver(\n      <ButtonLayout>\n        <div className=\"myClass\">\n          abc\n        </div>\n      </ButtonLayout>\n    );\n\n    expect(driver.exists()).toEqual(true);\n    expect(driver.doesComponentHasClass('myClass')).toEqual(true);\n  });\n\n  it('should extend existing inline style of the element', () => {\n    const driver = createDriver(\n      <ButtonLayout>\n        <div style={{color: 'red'}}>\n          abc\n        </div>\n      </ButtonLayout>\n    );\n\n    expect(driver.exists()).toEqual(true);\n    expect(driver.getComponentAttribute('style')).toContain('color: red;');\n  });\n\n  it('should wrap a custom component with ButtonLayout', () => {\n    const CustomComponent = props => (\n      <div {...props}>\n        abc\n      </div>\n    );\n    const driver = createDriver(\n      <ButtonLayout>\n        <CustomComponent/>\n      </ButtonLayout>\n    );\n\n    expect(driver.exists()).toEqual(true);\n    expect(driver.doesComponentHasClass('fullblue')).toEqual(true);\n  });\n\n  it('should bypass some styles', () => {\n    const driver = createDriver(someDivWithLayout());\n\n    expect(driver.exists()).toEqual(true);\n    expect(driver.getComponentAttribute('style')).toContain('display: inline-block;');\n  });\n\n  describe('class', () => {\n    it('should get disabled class', () => {\n      const driver = createDriver(someDivWithLayout({disabled: true}));\n\n      expect(driver.doesComponentHasClass('disabled')).toBeTruthy();\n    });\n\n    it('should have default \"fullblue\" style', () => {\n      const driver = createDriver(someDivWithLayout());\n\n      expect(driver.doesComponentHasClass('fullblue')).toBeTruthy();\n    });\n\n    it('should get \"small\" height class', () => {\n      const height = 'small';\n      const driver = createDriver(someDivWithLayout({height}));\n\n      expect(driver.doesComponentHasClass(`heightsmall`)).toBeTruthy();\n    });\n\n    it('should get \"large\" height class', () => {\n      const height = 'large';\n      const driver = createDriver(someDivWithLayout({height}));\n\n      expect(driver.doesComponentHasClass(`heightlarge`)).toBe(true);\n    });\n\n    it('should get custom style', () => {\n      const theme = 'emptyblue';\n      const driver = createDriver(someDivWithLayout({theme}));\n\n      expect(driver.doesComponentHasClass(theme)).toBeTruthy();\n    });\n\n    it('should get \"hover\" class', () => {\n      const driver = createDriver(someDivWithLayout({hover: true}));\n\n      expect(driver.doesComponentHasClass('hover')).toBeTruthy();\n    });\n  });\n});\n"}});