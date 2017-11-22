webpackJsonp([891],{3887:function(module,exports){module.exports="@import '../common.scss';\n\n.wrapper {\n    display: inline-block;\n}\n\n.wrapper > label {\n    display: flex;\n    cursor: pointer;\n    justify-content: center;\n    align-items: center;\n}\n\n.wrapper > input\n{\n    display:none;\n}\n\n:global(.rtl) .wrapper > label {\n    direction: rtl;\n}\n\n.checkbox {\n    position: relative;\n    width: 16px;\n    min-width: 16px;\n    height: 16px;\n    min-height: 16px;\n    border: 1px solid $B10;\n    border-radius: 4px;\n    box-sizing:border-box;\n}\n\n.checkbox.large {\n    width: 20px;\n    height: 20px;\n}\n\n.checkbox>.inner {\n    display:flex;\n    align-items:center;\n    justify-content:center;\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 14px;\n    height: 14px;\n    color: $D80;\n}\n\n.checkbox.large>.inner {\n    width: 18px;\n    height: 18px;\n}\n\n.indeterminate {\n    background-color: $D80;\n    width: 8px;\n    height: 2px;\n}\n\n.checkbox>.inner>svg {\n    width:9px;\n    height:9px;\n}\n\n.checkbox.large>.inner>svg {\n    width:13px;\n    height:13px;\n}\n\n.checkbox>.inner>svg>path {\n    fill:#fff;\n}\n\n:global(.ltr) .children, .children {\n    padding-left:12px;\n}\n\n:global(.rtl) .children {\n    padding-right:12px;\n}\n\n/* Checked State */\n\n.wrapper.checked .checkbox {\n    background-color: $B10;\n}\n\n.wrapper.checked .checkbox >.inner {\n    opacity: 1;\n}\n\n/* Unchecked State */\n\n.wrapper.unchecked .checkbox {\n    background-color: $D80;\n}\n\n.wrapper.unchecked .checkbox > .inner {\n    opacity: 0;\n}\n\n.wrapper.unchecked:hover .checkbox, .wrapper.unchecked.hover .checkbox {\n    background-color: $B40;\n}\n\n.wrapper.unchecked:active .checkbox, .wrapper.unchecked.active .checkbox {\n    background-color: $B20;\n}\n\n.wrapper.unchecked:active .checkbox>.inner, .wrapper.unchecked.active .checkbox>.inner {\n    opacity: 1;\n}\n\n/* Disabled State */\n\n.wrapper.disabled {\n    pointer-events: none;\n    cursor: default;\n}\n\n.wrapper.disabled .checkbox, .wrapper.disabled:hover .checkbox, .wrapper.disabled.hover .checkbox,\n.wrapper.disabled.active .checkbox, .wrapper.disabled:active .checkbox {\n    border-color: $GR20;\n    background-color: $GR30;\n}\n\n.wrapper.disabled.checked .checkbox, .wrapper.disabled.checked:hover .checkbox, .wrapper.disabled.checked.hover .checkbox,\n.wrapper.disabled.checked.active .checkbox, .wrapper.disabled.checked:active .checkbox {\n    background-color: $GR20;\n}\n\n/* Error State */\n.wrapper.hasError .checkbox {\n    border-color: $R10;\n}"}});