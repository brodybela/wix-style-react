const textLinkWithOptionsDriverFactory = component => ({
  element: () => component,
  mouseEnter: () => browser.actions().mouseMove(component.$('[data-hook=link-wrapper')).perform(),
  mouseLeave: () => browser.actions().mouseMove({x: 400, y: -100}).perform(),
  getDropdown: () => component.$(`[data-hook="textLinkWithOptions-dropdownLayout"]`),
  getDropdownItem: index => component.$$(`[data-hook="dropdown-layout-options"] div`).get(index),
  getDropdownItemsCount: () => component.$$(`[data-hook="dropdown-layout-options"] div`).getText().count()
});

export default textLinkWithOptionsDriverFactory;
