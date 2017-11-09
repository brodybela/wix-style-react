import s from './StickyHeader.scss';
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

    this.handleScroll = this.handleScroll.bind(this);
    const minimized = this.shouldBeMinimized();
    this.state = {
      minimized,
      top: 0
    };
  }

  render() {
    const {breadCrumbs, displayBack} = this.props;
    const {minimized, top} = this.state;
    const classes = {[s.minimized]: minimized};

    return (
      <div className={classNames(s.stickyHeaderContainer, classes)} >
        <div className={s.overlay} style={{transform: `translateY(${top}px)`}}/>
        <div className={s.headerRow} style={{transform: `translateY(${top}px)`}}>
          {breadCrumbs}
          <div className={classNames(s.wixHeaderTitle, {[s.space]: displayBack})}>
            {displayBack && <section className={s.sectionContainer}>{this.renderBackIcon()}</section>}
            {this.getTitle()}
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

  getContainerTop() {
    const container = this.getScrollContainer();
    return (container && container.scrollTop) || 0;
  }

  componentDidMount() {
    super.componentDidMount();

    const container = this.getScrollContainer();
    console.log(container);
    container && container.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    super.componentWillUnmount();

    const container = this.getScrollContainer();
    container && container.getScrollContainer().removeEventListener('scroll', this.handleScroll);
  }

  shouldBeMinimized(containerTop) {
    const scrollTopThreshold = 24;
    return containerTop > scrollTopThreshold;
  }

  handleScroll() {
    const containerTop = this.getContainerTop();
    const nextMinimized = this.shouldBeMinimized(containerTop);
    const newState = {
      top: containerTop
    };

    if (this.state.minimized !== nextMinimized) {
      newState.minimized = nextMinimized;
    }

    this.setState(newState);
  }
}

StickyHeader.displayName = 'StickyHeader';

StickyHeader.propTypes = {
    /** The container class where the scroll will occur  */
  scrollContainerClass: PropTypes.string.isRequired,
  /** Breadcrumbs object to display */
  breadCrumbs: PropTypes.element,
  /** Should display a back button */
  displayBack: PropTypes.bool,
  /** Title to display */
  title: PropTypes.string
};

StickyHeader.defaultProps = {
  displayBack: false
};
