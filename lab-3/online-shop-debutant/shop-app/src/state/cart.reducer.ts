import { createReducer, on, createAction, props } from '@ngrx/store';

export interface CartItem {
  id: number;
  name: string;
  price: number;
}

export const addProduct = createAction('[Cart] Add Product', props<{ item: CartItem }>());

export const cartReducer = createReducer<CartItem[]>(
  [],
  on(addProduct, (state, { item }) => [...state, item])
);
