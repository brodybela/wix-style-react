import './StickyHeader.scss';
import throttle from 'lodash/throttle';
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import WixComponent from '../BaseComponents/WixComponent';

/**
  * A header that sticks at the top of the container which minimizes on scroll
  */
export default class StickyHeader extends WixComponent {
  constructor(props) {
    super(props);

    this.handleScroll = throttle(this.handleScroll.bind(this), 50);
    const minimized = this.shouldBeMinimized();
    this.state = {minimized};
  }

  render() {
    const {breadCrumbs, displayBack} = this.props;
    const {minimized} = this.state;
    const classes = {minimized};

    return (
      <div className={classNames('sticky-header-container', classes)} >
        <div className="overlay"/>
        <div className="header-row">
          <div className="sticky-header">
            {breadCrumbs}
            <div className={`wix-title wix-header-title${displayBack ? ' space' : ''}`}>
              {displayBack && <section className="section-container">{this.renderBackIcon()}</section>}
              {this.getTitle()}
            </div>
          </div>
        </div>
      </div>
    );
  }

  renderBackIcon() {
    return null;
  }

  getTitle() {
    const {title} = this.props;
    return typeof title === 'function' ? title() : title;
  }

  getScrollContainer() {
    const {scrollContainerClass} = this.props;
    return document.querySelector(`.${scrollContainerClass}`);
  }

  componentDidMount() {
    super.componentDidMount();
    this.getScrollContainer().addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    this.getScrollContainer().removeEventListener('scroll', this.handleScroll);
    super.componentWillUnmount();
  }

  shouldBeMinimized() {
    const scrollTopThreshold = 24;
    const scrollTop = this.getScrollContainer().scrollTop;
    return scrollTop > scrollTopThreshold;
  }

  handleScroll() {
    const nextMinimized = this.shouldBeMinimized();

    if (this.state.minimized !== nextMinimized) {
      this.setState({minimized: nextMinimized});
    }
  }
}

StickyHeader.displayName = 'StickyHeader';

StickyHeader.propTypes = {
    /** The container class where the scroll will occur  */
  scrollContainerClass: PropTypes.string.isRequired,
  /** Breadcrumbs object to display */
  breadCrumbs: PropTypes.element,
  /** Should display a back button */
  displayBack: PropTypes.bool
};

StickyHeader.defaultProps = {
  displayBack: false
};
