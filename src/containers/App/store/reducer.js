import { createSelector } from 'reselect';
import { actions } from './actions';

const initialState = {
    homeData:[]
};

// Memorized  Selector Function
export const homeDataSelector = createSelector(
  state => state.homeReducer.homeData,
  homeData => homeData
);

// export const bigDisplayCardSelector = createSelector(
//   state => state.homeReducer.homeData,
//   homeData => homeData[0].cards
// );

// export const spinWheelCardSelector = createSelector(
//   state => state.homeReducer.homeData && state.homeReducer.homeData[1].cards,
//   cards => cards
// );

// export const streakCardSelector = createSelector(
//   state => state.homeReducer.homeData && state.homeReducer.homeData[2].cards,
//   cards => cards
// );

// export const centerCardSelector = createSelector(
//   state => state.homeReducer.homeData && state.homeReducer.homeData[3].cards,
//   cards => cards
// );

// export const smallDisplayCardScrollAbleSelector = createSelector(
//   state => state.homeReducer.homeData && state.homeReducer.homeData[4].cards,
//   cards => cards

// );

// export const smallDisplayCardNonScrollAbleSelector = createSelector(
//   state => state.homeReducer.homeData[5] && state.homeReducer.homeData[5].cards,
//   cards => cards
// );

export default (state = initialState, payload = {}) => {
  switch (payload.type) {
    case actions.SAVE_APP_HOME_DATA:
      return {
        ...state,
        homeData: payload.data
      };
    default:
      return state;
  }
};
