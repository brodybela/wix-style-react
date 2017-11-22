import React from 'react';
import PropTypes from 'prop-types';
import WixComponent from '../BaseComponents/WixComponent';
import omit from 'lodash/omit';
import DropdownLayout from '../DropdownLayout/DropdownLayout';
import styles from './TextLinkWithOptions.scss';
import classNames from 'classnames';

class TextLinkWithOptions extends WixComponent {
  constructor(props) {
    super(props);
    this.state = {showOptions: false};
    this.onSelect = this.onSelect.bind(this);
    this.sortChildren(props);
  }

  componentWillReceiveProps(nextProps) {
    this.sortChildren(nextProps);
  }

  sortChildren(props) {
    [this.linkElement, ...this.optionsElement] = React.Children.toArray(props.children);
  }

  renderDropdownLayout() {
    const dropdownProps = omit(this.props, ['dataHook']);

    const dropdownLayoutOptions = React.Children.map(this.optionsElement, option => {
      const {children: value, ...rest} = option.props;
      return {value, ...rest};
    });

    const classes = classNames({
      [styles.dropdownLayout]: true,
      [styles.dropDirectionUp]: dropdownProps.dropDirectionUp
    });

    const style = {width: dropdownProps.dropdownWidth};

    return (
      <div className={classes} style={style} data-hook="textLinkWithOptions-dropdownLayout-wrapper">
        <DropdownLayout
          {...dropdownProps}
          dataHook="textLinkWithOptions-dropdownLayout"
          options={dropdownLayoutOptions}
          visible={this.state.showOptions}
          onSelect={(option, isSelectedOption) => this.onSelect(option, isSelectedOption)}
          />
      </div>
    );
  }

  render() {
    const {dropDirectionUp, dropdownWidth} = this.props;
    const style = {width: dropdownWidth};
    const classes = classNames({
      [styles.wrapper]: true,
      [styles.hover]: this.state.showOptions
    });

    return (
      <div
        className={classes}
        style={style}
        onMouseLeave={() => this.setState({showOptions: false})}
        >
        {dropDirectionUp ? this.renderDropdownLayout() : null}
        <div
          data-hook="link-wrapper"
          className={styles.linkWrapper}
          onMouseEnter={() => this.setState({showOptions: true})}
          >
          {this.linkElement}
        </div>
        {!dropDirectionUp ? this.renderDropdownLayout() : null}
      </div>
    );
  }

  onSelect(option, isSelectedOption) {
    if (!isSelectedOption) {
      this.props.onSelect(option);
      this.setState({showOptions: false});
    }
  }
}

TextLinkWithOptions.defaultProps = {
  ...DropdownLayout.defaultProps,
  onSelect: () => {},
  dropdownWidth: '130px',
  withArrow: true
};

TextLinkWithOptions.propTypes = {
  ...DropdownLayout.propTypes,
  children: PropTypes.array.isRequired
};

TextLinkWithOptions.Option = () => null;
TextLinkWithOptions.Option.displayName = 'TextLinkWithOptions.Option';

TextLinkWithOptions.Link = props => <div {...props}/>;
TextLinkWithOptions.Link.displayName = 'TextLinkWithOptions.Link';

export default TextLinkWithOptions;
