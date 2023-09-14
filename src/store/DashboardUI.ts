import { create } from 'zustand';

interface State {
    isPagosModalOpen: boolean;
    togglePagosModal: () => void;
}

export const useDashboardUIStore = create<State>((set) => ({
  isPagosModalOpen: false,
  togglePagosModal: () => {
    set( state => ({isPagosModalOpen: !state.isPagosModalOpen}) ) ;
  },
}));