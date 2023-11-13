import { create } from 'zustand';

const useEvolutionStore = create((set) => ({
  evolutions: [],

  addEvolution: (evolutionData) =>
    set((state) => ({ evolutions: [...state.evolutions, evolutionData] })),

  updateEvolution: (id, updatedData) =>
    set((state) => ({
      evolutions: state.evolutions.map((evolution) =>
        evolution.id === id ? { ...evolution, ...updatedData } : evolution
      ),
    })),

  deleteEvolution: (id) =>
    set((state) => ({
      evolutions: state.evolutions.filter((evolution) => evolution.id !== id),
    })),
}));

export default useEvolutionStore;
