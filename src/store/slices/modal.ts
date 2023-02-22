import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState = false;

const modal = createSlice({
  initialState,
  name: 'modal',
  reducers: {
    setModal: (_, { payload }: PayloadAction<boolean>) => payload,
    toggleModal: state => !state,
  },
});

export const { setModal, toggleModal } = modal.actions;
export default modal.reducer;
