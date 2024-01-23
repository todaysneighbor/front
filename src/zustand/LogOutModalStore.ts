import create from 'zustand';

interface LogOutModalStore {
    isLogOutOpen: boolean;
    openLogOutModal: () => void;
    closeLogOutModal: () => void;
}

const useLogOutModalStore = create<LogOutModalStore>((set) => ({
    isLogOutOpen: false,
    openLogOutModal: () => set({ isLogOutOpen: true }),
    closeLogOutModal: () => set({ isLogOutOpen: false }),
  }));
  
  export default useLogOutModalStore;