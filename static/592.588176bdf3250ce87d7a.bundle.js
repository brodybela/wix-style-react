webpackJsonp([592],{1520:function(module,exports){module.exports="import styles from './Badge.scss';\nimport typography from '../Typography';\n\nconst hasClass = (element, styles, cls) => {\n  const normalized = cls.toLowerCase().replace('.', '_');\n  return element.getAttribute('class').then(classes => classes.split(' ').some(c => c.includes(styles[normalized])));\n};\n\nexport default component => ({\n  element: () => component,\n  isBadge: () => hasClass(component, styles, 'badge'),\n  isOfType: type => hasClass(component, styles, type),\n  isOfAppearance: appearance => hasClass(component, typography, appearance),\n  isOfAlignment: alignment => hasClass(component, styles, alignment),\n  isOfShape: shape => hasClass(component, styles, shape),\n  text: () => component.getText()\n});\n"}});