webpackJsonp([871],{3907:function(module,exports){module.exports="@import 'bootstrap-sass/assets/stylesheets/bootstrap/variables.scss';\n@import 'bootstrap-sass/assets/stylesheets/bootstrap/mixins/clearfix.scss';\n@import 'bootstrap-sass/assets/stylesheets/bootstrap/mixins/grid-framework.scss';\n@import 'bootstrap-sass/assets/stylesheets/bootstrap/mixins/grid.scss';\n@import 'bootstrap-sass/assets/stylesheets/bootstrap/mixins/responsive-visibility.scss';\n@import 'bootstrap-sass/assets/stylesheets/bootstrap/grid.scss';\n@import 'bootstrap-sass/assets/stylesheets/bootstrap/responsive-utilities.scss';\n\n\n$main-container-min-width: 894px;\n$main-container-max-width: 1254px;\n$grid-row-margin-bottom: 30px;\n\n// Note: container is used by Card.Container\n.container,\n.raw-container,\n.wixContainer {\n\tpadding: 0;\n\twidth: 100%;\n\n\t* {\n\t\tbox-sizing: border-box;\n\t}\n\n\t.row {\n\t\tmargin-bottom: $grid-row-margin-bottom;\n\t}\n}\n\n.raw-container,\n.wixContainer {\n\tmin-width: $main-container-min-width;\n\tmax-width: $main-container-max-width;\n}\n\n.raw-container {\n\t.row:last-child {\n\t\tmargin-bottom: 0;\n\t}\n}\n\n.flex-container {\n\tdisplay: flex;\n}\n\n.wixContainer {\n\t>div>span:last-child .row:last-child {\n\t\tmargin-bottom: 0;\n\t}\n}\n\n.stretch_vertically_row {\n\tdisplay: flex;\n}\n\n.stretch_vertically_row > [class*='col-'] {\n\tdisplay: flex;\n\tflex-direction: column;\n}\n\n@mixin rtl-float-grid-columns($class) {\n\t$list: \"\";\n\n\t@for $i from (1) through $grid-columns {\n\t\t$list: \"#{$list}:global(.rtl) .col-#{$class}-#{$i}, .rtl.col-#{$class}-#{$i}, .rtl .col-#{$class}-#{$i}, \";\n\t}\n\n\t#{$list} {\n\t\tfloat: right;\n\t}\n}\n\n@include rtl-float-grid-columns(xs);\n\n@media (min-width: $screen-sm-min) {\n\t@include rtl-float-grid-columns(sm);\n}\n\n@media (min-width: $screen-md-min) {\n\t@include rtl-float-grid-columns(md);\n}\n\n@media (min-width: $screen-lg-min) {\n\t@include rtl-float-grid-columns(lg);\n}\n"}});