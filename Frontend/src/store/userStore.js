import {create} from "zustand";
import { configurePersist } from "zustand-persist";
const { persist } = configurePersist({
  storage: localStorage,
});
const userStore = create(
  persist(
    {
      key: "userStore",
    },
    (set) => ({
      authenticated: false,
      gUser: null,
      login: (userData) => set({ gUser: userData, authenticated: true }),
      logout: () => set({gUser:null, authenticated: false }),
    })
  )
);
export default userStore;
