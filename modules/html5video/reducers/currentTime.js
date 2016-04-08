export const updateCurrentTime = ({ percentage, ...state }, { currentTime }) => {
  const played = Math.floor(currentTime / Math.max(state.duration, 1) * 100);
  return Object.assign({}, state, {
    currentTime: Math.floor(currentTime),
    percentage: Object.assign({}, percentage, { played }),
  });
};
