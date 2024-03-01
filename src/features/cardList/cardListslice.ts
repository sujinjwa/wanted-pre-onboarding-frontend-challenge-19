import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

type TCard = { name: string; id: number };

export interface CardListState {
  cardList: { name: string; id: number }[];
}

const initialState: CardListState = {
  cardList: [],
};

export const cardListSlice = createSlice({
  name: 'cardList',
  initialState,
  reducers: {
    createNew: (state, action: PayloadAction<TCard>) => {
      state.cardList = [...state.cardList, action.payload];
    },

    deleteOne: (state, action: PayloadAction<number>) => {
      const filteredCardList = state.cardList.filter(
        (card) => card.id !== action.payload
      );

      state.cardList = filteredCardList;
    },
  },
});

// Action creators are generated for each case reducer function
export const { createNew, deleteOne } = cardListSlice.actions;

export default cardListSlice.reducer;
