const loggerMiddleware =
  ({ getState, dispatch }) =>
  (next) =>
  (action) => {
    console.log(`Action: ${action.type}`);

    next(action);
  };

export default loggerMiddleware;
