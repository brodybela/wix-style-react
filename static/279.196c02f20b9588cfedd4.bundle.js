webpackJsonp([279],{1833:function(module,exports){module.exports="import React from 'react';\nimport {Button} from '../../Backoffice/';\nimport Close from '../../Icons/dist/components/Close';\n\nconst CloseButton = () => (\n  <Button height=\"medium\" theme=\"close-transparent\" onClick={e => e.preventDefault()}>\n    <Close size=\"6px\"/>\n  </Button>\n);\n\nCloseButton.displayName = 'Notification.CloseButton';\n\nexport default CloseButton;\n"}});