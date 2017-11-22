const statsWidgetDriverFactory = component => ({
  element: () => component,
  statisticsLength: () => component.$$('[data-hook="statistics-item"]').count()
});

export default statsWidgetDriverFactory;
