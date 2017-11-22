webpackJsonp([575],{1537:function(module,exports){module.exports="import breadcrumbsPathFactory from './BreadcrumbsPathFactory';\n\ndescribe('BreadcrumbsPathFactory', () => {\n\n  it('should create an options from a url', () => {\n    const url = 'aaa/bbb/ccc';\n    const options = [\n      {id: 0, value: 'aaa', link: '/aaa'},\n      {id: 1, value: 'bbb', link: '/aaa/bbb'},\n      {id: 2, value: 'ccc', link: '/aaa/bbb/ccc'}\n    ];\n    expect(breadcrumbsPathFactory(url)).toEqual(options);\n  });\n\n  it('should create an options from a url with baseUrl include', () => {\n    const url = 'aaa/bbb/ccc';\n    const baseUrlLink = 'https://www.wix.com';\n    const baseUrlValue = 'wix';\n    const options = [\n      {id: 0, value: 'wix', link: 'https://www.wix.com'},\n      {id: 1, value: 'aaa', link: 'https://www.wix.com/aaa'},\n      {id: 2, value: 'bbb', link: 'https://www.wix.com/aaa/bbb'},\n      {id: 3, value: 'ccc', link: 'https://www.wix.com/aaa/bbb/ccc'}\n    ];\n    expect(breadcrumbsPathFactory(url, baseUrlLink, baseUrlValue)).toEqual(options);\n  });\n\n  it('should create an options from a url with baseUrl not include', () => {\n    const url = 'aaa/bbb/ccc';\n    const baseUrlLink = 'https://www.wix.com';\n    const options = [\n      {id: 0, value: 'aaa', link: 'https://www.wix.com/aaa'},\n      {id: 1, value: 'bbb', link: 'https://www.wix.com/aaa/bbb'},\n      {id: 2, value: 'ccc', link: 'https://www.wix.com/aaa/bbb/ccc'}\n    ];\n    expect(breadcrumbsPathFactory(url, baseUrlLink)).toEqual(options);\n  });\n  it('should create an options from a url with a custom separator', () => {\n    const url = 'aaa-bbb-ccc';\n    const separator = '-';\n    const options = [\n      {id: 0, value: 'aaa', link: '/aaa'},\n      {id: 1, value: 'bbb', link: '/aaa/bbb'},\n      {id: 2, value: 'ccc', link: '/aaa/bbb/ccc'}\n    ];\n    expect(breadcrumbsPathFactory(url, '', null, separator)).toEqual(options);\n  });\n\n});\n"}});