import { CardActions, CreateButton, ExportButton, RefreshButton } from "react-admin";

import React from "react";

export const PostActions = ({
  bulkActions,
  basePath,
  currentSort,
  displayedFilters,
  exporter,
  filters,
  filterValues,
  onUnselectItems,
  resource,
  selectedIds,
  showFilter,
  total
}) => (
  <CardActions>
    {bulkActions &&
      React.cloneElement(bulkActions, {
        basePath,
        filterValues,
        resource,
        selectedIds,
        onUnselectItems
      })}
    {filters &&
      React.cloneElement(filters, {
        resource,
        showFilter,
        displayedFilters,
        filterValues,
        context: "button"
      })}
    <CreateButton basePath={basePath} />
    <ExportButton disabled={total === 0} resource={resource} sort={currentSort} filter={filterValues} exporter={exporter} />
    <RefreshButton />
  </CardActions>
);
