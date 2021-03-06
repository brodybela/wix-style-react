import ReactTestUtils from 'react-dom/test-utils';
import inputDriverFactory from '../Input/Input.driver';

const datePickerDriverFactory = ({element, wrapper, componentInstance}) => {

  const inputRoot = element && element.children[0].querySelector('.root');
  const inputDriver = inputDriverFactory({element: inputRoot, wrapper});
  const getCalendar = () => element.querySelector('.react-datepicker');
  const getNthDay = n => element.querySelectorAll('[role="option"]:not([class*="outside-month"])')[n];
  const getYearDropdown = () => element.querySelector('[class$="year-read-view"]');
  const getNthYear = n => element.querySelectorAll('[class*="year-option"]')[n];
  const getMonthAndYear = () => element.querySelector('[class="react-datepicker__current-month"]');
  const getNthWeekDayName = n => element.querySelectorAll('[class="react-datepicker__day-name"]')[n];
  const getPrevMonthButton = () => element.querySelector('[class$="navigation--previous"]');
  const getNextMonthButton = () => element.querySelector('[class$="navigation--next"]');

  const driver = {
    exists: () => !!element
  };

  const calendarDriver = {
    isVisible: () => !!getCalendar(),
    getCurrentMonthWithYear: () => getMonthAndYear() ? getMonthAndYear().textContent : '',
    getNthWeekDayName: (n = 0) => getNthWeekDayName(n) ? getNthWeekDayName(n).textContent : '',
    clickOnNthDay: (n = 0) => ReactTestUtils.Simulate.click(getNthDay(n)),
    clickOnYearDropdown: () => ReactTestUtils.Simulate.click(getYearDropdown()),
    clickOnNthYear: (n = 1) => ReactTestUtils.Simulate.click(getNthYear(n)),
    clickOnPrevMonthButton: () => ReactTestUtils.Simulate.click(getPrevMonthButton()),
    clickOnNextMonthButton: () => ReactTestUtils.Simulate.click(getNextMonthButton()),
    open: () => componentInstance.open(),
    close: () => componentInstance.close(),
    isHeaderVisible: () => !(wrapper.querySelector('.react-datepicker--hide-header'))
  };

  return {
    driver,
    inputDriver,
    calendarDriver
  };
};

export default datePickerDriverFactory;
