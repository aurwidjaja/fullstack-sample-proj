import {create} from 'zustand'; //Scope of Zustand is GLOBAL—useState is LOCAL
//Use Zustand when you need to share state between components and you want a 
//global shared state with minimal setup 

export const useProductStore = create((set) => ({
    products: [],
    setProducts: (products) => set({ products }),
    createProduct: async (newProduct) => {
        if (newProduct.name || newProduct.price || newProduct.image) {
            const res = await fetch('/api/products', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify(newProduct)
            })
            const data = await res.json();
            set((state) => ({products:[...state.products, data.data]}))
            return {success: true, message: "Please fill in all fields."};
        }
    },
    fetchProducts: async () => {
        const res = await fetch("api/products");
        const data = await.res.json();
        set({products: data.data});
    },
    deleteProduct: async (pid) => {
        const res = await fetch(`/api/products/${pid}`, {
            method: "DELETE",
        });
        const data = await res.json();
        if (!data.success) return {success: false, message: data.message};

        set(state => ({products: state.products.filter(product => product._id !== pid)}));
        return {success: true, message: data.message};
    }
}));

