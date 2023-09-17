import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware'


const useLanguage = create(
    persist(
        (set) => ({
            language: "es",
            setLanguage: (newLanguage) => set((state) => ({ language: newLanguage })),
            toggle: () => set((state) => ({ language: state.language == "es" ? "en" : "es" }))
        }),
        {
            name: "lang-storage",
            storage: createJSONStorage(() => localStorage)
        }
));


export default useLanguage;