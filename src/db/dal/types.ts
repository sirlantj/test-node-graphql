interface ListFilters {
  isDeleted?: boolean;
  includeDeleted?: boolean;
}

export interface GetAllCitiesFilters extends ListFilters {
  isPublished?: boolean;
  isNotPublished?: boolean;
}
