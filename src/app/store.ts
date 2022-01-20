import { configureStore } from '@reduxjs/toolkit';
import dataReducer from '../features/userdata/userdata';

export default configureStore({
  reducer: {
    data: dataReducer,
  },
});
