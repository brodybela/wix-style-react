webpackJsonp([759],{4019:function(module,exports){module.exports="@import '../common.scss';\n@import './InputMixins.scss';\n\n$gap: 6px;\n$double-gap: 12px;\n$material-gap: 8px;\n\n.root {\n    position: relative;\n    display: flex;\n    align-items: stretch;\n    border: solid 1px;\n    border-radius: 6px;\n    @include BoxSizing();\n    @include FontRoman();\n}\n\n.input-wrapper {\n  display: flex;\n  width: 100%;\n}\n\n.input {\n    flex-grow: 1;\n    flex-shrink: 1;\n    min-width: 20px;\n    padding: 0 $double-gap;\n    margin: 0;\n    border: 0;\n    outline: 0;\n    background: transparent;\n    @include BorderRadius(6px);\n    @include FontRoman();\n    @include Placeholder($paletteE6);\n    @include Selection($paletteB4);\n\n    &[type=number] {\n        -moz-appearance:textfield;\n\n        &::-webkit-outer-spin-button,\n        &::-webkit-inner-spin-button {\n            -webkit-appearance: none;\n            margin: 0;\n        }\n    }\n\n    &.withPrefix { padding-left: 0; }\n    &.withSuffix { padding-right: 0; }\n    &.withSuffixes { padding-right: $gap; }\n}\n\n// Remove IE10+ automatically x button\n.input::-ms-clear {\n    display: none;\n}\n\n.prefixes,\n.suffixes {\n    display: flex;\n    align-items: center;\n    flex-shrink: 0;\n    flex-grow: 0;\n    min-width: 0;\n    user-select: none !important;\n}\n\n.prefix,\n.suffix {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 100%;\n\n    &:first-child .unit-separator { margin-left: $double-gap; }\n    &:last-child .unit { padding-right: $double-gap; }\n}\n\n.roundInput {\n    &.size-normal {\n        @include BorderRadius(18px);\n    }\n    &.size-small {\n        @include BorderRadius(15px);\n    }\n    &.size-large {\n        @include BorderRadius(27px);\n    }\n}\n\n.size {\n    &-small  { @include Size($height: 30px, $fontSize: 14px); }\n    &-normal { @include Size($height: 36px, $fontSize: 16px); }\n    &-normal-with-selection { @include Size($height: 34px, $fontSize: 16px); }\n    &-large  { @include Size($height: 60px, $fontSize: 22px); }\n}\n\n.theme {\n    &-normal {\n        @include ThemeDefault($color: $D10, $borderColor: $B30, $backgroundColor: $D80);\n        @include ThemeHover($backgroundColor: $B50);\n        @include ThemeFocus($borderColor: $B20, $boxShadow: inset 0px 0px 5px 0px fade($B10, 60%));\n        @include ThemeError($borderColor: $paletteR1, $boxShadow: inset 0px 0px 5px 0px fade($R10, 60%));\n        @include ThemeDisable($color: $D55, $borderColor: $D60, $backgroundColor: $D80);\n        @include ThemeDisableHover($borderColor: $GR20);\n    }\n    &-paneltitle {\n        @include ThemeDefault($color: white, $borderColor: #c1e4fe, $backgroundColor: rgba(22,45,61,0.6));\n        @include ThemeHover($backgroundColor: rgba(22,45,61,0.4));\n        @include ThemeFocus($borderColor: #4eb7f5, $boxShadow: inset 0 0 5px 0 rgba(56,153,236,0.6));\n        @include ThemeError($borderColor: $paletteR1, $boxShadow: inset 0px 0px 5px 0px fade($R10, 60%));\n        @include ThemeDisable($color: white, $borderColor: $GR40, $backgroundColor: rgba(22,45,61,0.6));\n    }\n    &-amaterial {\n\n        .errorIcon {\n            padding: 0 6px 16px;\n            color: #f2564d;\n        }\n\n        border: 0;\n        &.size-normal {\n            padding-bottom: 4px;\n            @include Size($height: 34px, $fontSize: 20px);\n        }\n\n        label,\n        .input {\n            color: #43515c;\n        }\n\n        label {\n            font-size: 20px;\n            transition:all .2s ease-in-out;\n            position: absolute;\n            top: 2px;\n            padding: 0 12px;\n        }\n\n        .input {\n            @include FontLight();\n            @include Placeholder(rgba(0, 0, 0, 0));\n            z-index: 1;\n            transition: border-bottom .3s, border-color .3s, border-width .3s, border .3s ease-in-out;\n            line-height: 1;\n            display: block;\n            margin-top: 0;\n\n            background: none;\n            border-radius: 0;\n            border-style: solid; // Firefox fix\n\n            // Fix number inputs in Firefox to be full-width\n            width: 100%;\n            box-sizing: border-box;\n        }\n\n        &.hasFocus,\n        &.hasValue {\n            .input {\n                @include Placeholder($paletteE6);\n            }\n            input {\n                border-bottom: 0;\n            }\n\n            .bar {\n                &:before, &:after {\n                    height: 2px;\n                    background-color: #3899ec;\n                }\n            }\n            label {\n                top: -22px;\n                font-size: 14px;\n            }\n        }\n\n        .bar {\n            position: absolute;\n            bottom: 0;\n            left: -1px;\n            right: -1px;\n            height: 1px;\n            background: $D60;\n            &:before, &:after {\n                content: '';\n                height: 1px;\n                width: 0;\n                bottom: 0;\n                position: absolute;\n                background: #000;\n                transition: 0.3s all;\n            }\n            transition: 0.3s ease all;\n        }\n        @at-root {\n            .hasFocus .barBlue:before,\n            .hasFocus .barBlue:after {\n                width:100%;\n            }\n        }\n\n        .input:hover ~ .barBlue, .input.hasHover ~ .barBlue {\n            background-color: #000;\n            transition: 0.3s ease all;\n        }\n\n        &.hasError {\n            .bar, .input:hover ~ .barBlue, .input.hasHover ~ .barBlue {\n                background-color: #f2564d;\n                height: 2px;\n            }\n        }\n    }\n    &-material {\n        border-radius: 0;\n        .prefixes,\n        .suffixes {\n            padding: 0 4px;\n        }\n        &.size-normal {\n            @include Size($height: 34px, $fontSize: 18px);\n        }\n        .input {\n            @include FontLight();\n            padding: 0 $material-gap;\n        }\n        @include ThemeDefault($color: $D10, $borderColor: transparent, $backgroundColor: $D80);\n        .bar {\n            position: absolute;\n            bottom: 0;\n            left: -1px;\n            right: -1px;\n            height: 1px;\n            background: $D60;\n            &:before, &:after {\n                content: '';\n                height: 1px;\n                width: 0;\n                bottom: 0;\n                position: absolute;\n                background: $D50;\n                transition: 0.2s ease all;\n            }\n            &:before { left: 50%; }\n            &:after { right: 50%; }\n        }\n        @at-root {\n            .hasFocus .barBlack:before,\n            .hasFocus .bar:after {\n                width: 50%;\n            }\n        }\n        &.hasError {\n            .bar {\n                background: $R05;\n                &:before, &:after {\n                    background: $R05;\n                }\n            }\n        }\n    }\n\n    &-flat {\n        border: none;\n        border-radius: 0;\n\n        &.size-large { @include Size($height: 54px, $fontSize: 20px); }\n\n        &:hover, &.hasFocus { @include ThemeFlat($B20); }\n        &:active            { @include ThemeFlat($B10); }\n        &.disabled          { @include ThemeFlat($D50); }\n\n        @include ThemeFlat($D20);\n    }\n\n    &-flatdark {\n        border: none;\n        border-radius: 0;\n\n        &.size-large { @include Size($height: 54px, $fontSize: 20px); }\n\n        &:hover, &.hasFocus { @include ThemeFlat($B20); }\n        &:active            { @include ThemeFlat($B10); }\n        &.disabled          { @include ThemeFlat($D50); }\n\n        @include ThemeFlat($D80);\n    }\n}\n\n// RTL layout based on global style set on document body or parent element.\n:global(.rtl) {\n    .root,\n    .input-wrapper,\n    .prefixes,\n    .suffixes { flex-direction: row-reverse; }\n    .input {\n      direction: rtl;\n\n      &.withPrefix { padding-right: 0; padding-left: $double-gap; }\n      &.withSuffix { padding-left: 0; padding-right: $double-gap; }\n    }\n\n    .prefix,\n    .suffix {\n      &:first-child .unit-separator { margin-right: $double-gap; margin-left: $gap; }\n      &:last-child .unit { padding-left: $double-gap; padding-right: $gap; }\n    }\n}\n\n// RTL layout based on a property passed directly to the component.\n.rtl.root {\n    flex-direction: row-reverse;\n    .prefixes,\n    .suffixes { flex-direction: row-reverse; }\n    .input { direction: rtl; }\n}\n\n.magnifying-glass {\n    margin: 0 $gap;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n\n    path { fill: $B10; }\n    line { stroke: $B10; }\n\n    &[disabled] {\n        path { fill: $GR40; }\n        line { stroke: $GR40; }\n    }\n}\n\n.exclamation {\n    margin: 0 $gap;\n    background-color: $paletteR1;\n    width: 20px;\n    height: 20px;\n    border-radius: 50%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    path { stroke: #fff; }\n}\n\n.help {\n    margin: 0 $gap;\n    color: $B20;\n    padding-top: 4px;\n}\n\n:global(.rtl) {\n    .help,\n    .amaterial-help {\n        transform: scaleX(-1);\n    }\n}\n\n.amaterial-help {\n    margin: 0 $gap;\n    color: $B20;\n    padding-bottom: 14px;\n}\n\n.clear-button {\n    $size: 24px;\n    $icon-size: 8px;\n\n    width: $size;\n    height: $size;\n    margin-top: 1px;\n    margin-right: 6px;\n    padding: $size - 2 * $icon-size 0;\n    border-radius: 50%;\n\n    line-height: 0;\n    text-align: center;\n\n    background-color: $B50;\n    cursor: pointer;\n\n    path { stroke: $B10; }\n\n    &:hover {\n        background-color: $B40;\n    }\n\n    &:active {\n        background-color: $B30;\n    }\n}\n\n.unit {\n    padding: 0 $gap;\n    color: $paletteD3;\n    @include FontLight();\n}\n\n.unit-separator {\n    width: 1px;\n    margin: 0 $gap;\n    background-color: $paletteB4;\n    height: 18px;\n\n    @at-root {\n        .hasError .unit-separator {\n            background-color: $paletteR1;\n        }\n    }\n}\n\n.menu-arrow {\n    padding: 0 $double-gap;\n    path { fill: $B10; }\n\n    &[disabled] {\n        path { fill: $GR40; }\n        line { stroke: $GR40; }\n    }\n}\n\n.roundInput {\n    .menu-arrow {\n        padding: 0 $double-gap;\n    }\n}\n\n.materialTitle {\n    text-overflow: ellipsis;\n    overflow: hidden;\n    white-space: nowrap;\n}\n"}});