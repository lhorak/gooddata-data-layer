import { AFM } from '@gooddata/typings';

export interface IDataSourceParams {
    uri: string;
    attributeFilters?: AFM.AttributeFilterItem[];
    dateFilter?: AFM.DateFilterItem;
}
