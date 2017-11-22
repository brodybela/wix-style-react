import React from 'react';
import PropTypes from 'prop-types';
import {Card} from '../Grid';
import WixComponent from '../BaseComponents/WixComponent';
import styles from './StatsWidget.scss';
import Text from '../Text';
import classnames from 'classnames';
import * as Icons from '../Icons';
import Dropdown from '../Dropdown';

/**
 * Component for app widget in Business Manager
 */
class StatsWidget extends WixComponent {

  static propTypes = {
    /** Widget title */
    title: PropTypes.string.isRequired,
    /** Statistics to display */
    statistics: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      subtitle: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      persent: PropTypes.number
    })).isRequired,
    /** Filters for statistics (will be shown in right top corner) Accepts array of  <StatsWidget.Filter> which accepts all dropdown properties*/
    children: PropTypes.arrayOf((propValue, key) => {
      if (!propValue || propValue.length > 3) {
        return new Error(`StatsWidget: Invalid Prop children, maximum amount of filters are 3`);
      }

      if (propValue[key].type !== StatsWidget.Filter) {
        return new Error(`StatsWidget: Invalid Prop children, only StatsWidget.Filter is allowed`);
      }
    })
  };

  renderPersentage(persent) {
    return (<Text appearance="H3">
      <div className={classnames(styles.persents, {[styles.isNegative]: persent < 0}, {[styles.isPositive]: persent > 0})} data-hook="persent-wrapper">
        <span className={classnames(styles.persentArrow)}>{React.createElement(Icons.ArrowVertical)}</span>
        <span data-hook="persent-value">{Math.abs(persent)}%</span>
      </div>
    </Text>);
  }

  renderColumn(statistics, index) {
    return (<div className={styles.statsColumn} key={index} data-hook="statistics-item">
      <div>
        <Text dataHook="statistics-item-title" appearance="H1">{statistics.title}</Text>
        <Text dataHook="statistics-item-subtitle" appearance="H3">
          {statistics.subtitle}
        </Text>
        { (typeof (statistics.persent) !== 'undefined') ? this.renderPersentage(statistics.persent) : null}
      </div>
    </div>);
  }

  renderFilters(filters) {
    return (<div className={styles.filtersWrapper}>{filters}</div>);
  }

  render() {
    const {title, statistics, children} = this.props;

    return (
      <Card data-hook="stats-widget">
        <Card.Header dataHook="stats-widget-title" title={title} suffix={this.renderFilters(children)}/>
        <Card.Content>
          <div className={styles.statsColumnWrapper} data-hook="stats-widget-content-wrapper">
            {statistics.map((stat, index) => this.renderColumn(stat, index))}
          </div>
        </Card.Content>
      </Card>
    );
  }
}

StatsWidget.Filter = Dropdown;

StatsWidget.displayName = 'StatsWidget';

export default StatsWidget;
