import { create } from 'zustand';

const useProductStore = create((set) => ({
  products: [],
  setProducts: (products) => set({ products }),
  addProduct: (product) => set((state) => ({
    products: [...state.products, { ...product, id: Date.now() }]
  })),
  removeProduct: (id) => set((state) => ({
    products: state.products.filter((product) => product.id !== id)
  })),
}));

export default useProductStore; 