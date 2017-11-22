import React from 'react';
import ReactDOM from 'react-dom';
import dropdownDriverFactory from '../Dropdown/Dropdown.driver';
import headerDriverFactory from '../Card/Header/Header.driver';

const statsWidgetDriverFactory = ({element, wrapper, component}) => {
  const getStatistic = index => element.querySelector('[data-hook="stats-widget-content-wrapper"]').childNodes[index];

  const headerElement = element.querySelector(`[data-hook="stats-widget-title"]`);

  const headerDriver = headerDriverFactory({wrapper: element, element: headerElement});

  const driver = {
    exists: () => !!element,

    titleText: () => headerDriver.title(),

    getStatisticTitle: index => getStatistic(index).querySelector('[data-hook="statistics-item-title"]').textContent,

    getStatisticSubTitle: index => getStatistic(index).querySelector('[data-hook="statistics-item-subtitle"]').textContent,

    getStatisticPersentValue: index => getStatistic(index).querySelector('[data-hook="persent-value"]').textContent,

    getStatisticPersentClass: index => getStatistic(index).querySelector('[data-hook="persent-wrapper"]').className,

    selectFilter: dataHook => {
      const dropdownElement = element.querySelector(`[data-hook="${dataHook}"]`);
      const dropdownDriver = dropdownDriverFactory({wrapper: element, element: dropdownElement});
      dropdownDriver.dropdownLayoutDriver.clickAtOption(0);
    },

    setProps: props => {
      const ClonedWithProps = React.cloneElement(component, Object.assign({}, component.props, props), ...(component.props.children || []));
      ReactDOM.render(<div ref={r => element = r}>{ClonedWithProps}</div>, wrapper);
    }
  };

  return {
    exists: () => driver.exists(),
    driver,
    headerDriver
  };
};

export default statsWidgetDriverFactory;
