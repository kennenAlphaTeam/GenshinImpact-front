import { configureStore } from '@reduxjs/toolkit';
import dataReducer from '../features/userdata/userdata';
import resinReducer from '../features/userresin/userresin';

export default configureStore({
  reducer: {
    data: dataReducer,
    resin: resinReducer,
  },
});
