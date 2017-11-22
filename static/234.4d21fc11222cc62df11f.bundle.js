webpackJsonp([234],{1878:function(module,exports){module.exports="import React from 'react';\nimport {children, optional, once} from '../Composite';\nimport RichTextArea from '../RichTextArea';\nimport Label from '../Label';\nimport InputAreaWithLabelComposite from '../Composite/InputAreaWithLabelComposite/InputAreaWithLabelComposite';\n\nconst RichTextAreaComposite = ({...props, children}) => (\n  <InputAreaWithLabelComposite {...props}>\n    {children}\n  </InputAreaWithLabelComposite>\n);\n\n\nRichTextAreaComposite.propTypes = {\n  children: children(optional(Label), once(RichTextArea))\n};\n\nRichTextAreaComposite.displayName = 'RichTextAreaComposite';\n\nexport default RichTextAreaComposite;\n"}});