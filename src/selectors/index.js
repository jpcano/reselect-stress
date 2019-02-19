import { createSelector } from 'reselect';

const getType = (state) => state.filters.type;
const getPrimary = (state) => state.filters.primary;
const getSubtype = (state) => state.filters.subtype;
const getResult = (state) => state.result;

export const getAvailableModels = createSelector(
  [getType, getPrimary, getSubtype, getResult ],
  (type, primary, subtype, result) => {
    return result.filter(m => {
      const res = type.includes(m.type) &&
        primary.includes(m.primary) &&
        subtype.includes(m.subtype);
      return res;
    });
  }
);

export const getNumberOfAvailableModels = createSelector(
  [ getAvailableModels],
  (available) => available.length
);

const  onlyUnique =(value, index, self) => self.indexOf(value) === index;

export const getNumberOfAvailableVendors = createSelector(
  [ getAvailableModels],
  (available) => {
    const result = available.map(m => m.vendor_id).filter(onlyUnique).length;
    return result;
  }
);
