webpackJsonp([312],{1800:function(module,exports){module.exports="import React from 'react';\nimport Loader from './Loader';\nimport loaderDriverFactory from './Loader.driver';\nimport {createDriverFactory} from '../test-common';\nimport {loaderTestkitFactory} from '../../testkit';\nimport {loaderTestkitFactory as enzymeLoaderTestkitFactory} from '../../testkit/enzyme';\nimport {isTestkitExists, isEnzymeTestkitExists} from '../../testkit/test-common';\n\ndescribe('Loader', () => {\n  const createDriver = createDriverFactory(loaderDriverFactory);\n\n  describe('size property', () => {\n    it('should create a component with default medium size', () => {\n      const driver = createDriver(<Loader/>);\n      expect(driver.isMedium()).toEqual(true);\n    });\n\n    it('should allow creating a small loader', () => {\n      const driver = createDriver(<Loader size=\"small\"/>);\n      expect(driver.isSmall()).toEqual(true);\n    });\n\n    it('should allow creating a medium loader', () => {\n      const driver = createDriver(<Loader size=\"medium\"/>);\n      expect(driver.isMedium()).toEqual(true);\n    });\n\n    it('should allow creating a large loader', () => {\n      const driver = createDriver(<Loader size=\"large\"/>);\n      expect(driver.isLarge()).toEqual(true);\n    });\n\n  });\n\n  describe('text property', () => {\n\n    it('should create a component with no text by default', () => {\n      const driver = createDriver(<Loader/>);\n      expect(driver.hasText()).toEqual(false);\n    });\n\n    it('should create a component with text', () => {\n      const text = 'All computers wait at the same speed';\n      const driver = createDriver(<Loader text={text}/>);\n      expect(driver.hasText()).toEqual(true);\n      expect(driver.getText()).toEqual(text);\n    });\n\n  });\n\n  describe('color property', () => {\n    it('should be blue by default', () => {\n      const driver = createDriver(<Loader/>);\n      expect(driver.getColor()).toEqual('blue');\n    });\n\n    it('should get the given color', () => {\n      const driver = createDriver(<Loader color=\"white\"/>);\n      expect(driver.getColor()).toEqual('white');\n    });\n  });\n\n  describe('testkit', () => {\n    it('should exist', () => {\n      expect(isTestkitExists(<Loader/>, loaderTestkitFactory)).toBe(true);\n    });\n  });\n\n  describe('enzyme testkit', () => {\n    it('should exist', () => {\n      expect(isEnzymeTestkitExists(<Loader/>, enzymeLoaderTestkitFactory)).toBe(true);\n    });\n  });\n});\n"}});