import { create } from 'zustand';
import { v4 as uuidv4 } from 'uuid';

const useEvolutionStore = create((set) => ({
  evolutions: [],
  searchResults:[],

  addEvolution: (name, date, evolution) => {
    const evolutionData = {
      name,
      date,
      evolution,
      id: uuidv4(), //* Con esto genero un ID único para cada evolución
    };
    set((state) => ({ evolutions: [...state.evolutions, evolutionData] }));
  },

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
