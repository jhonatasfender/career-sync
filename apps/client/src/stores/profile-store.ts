import { create } from "zustand";
import { devtools } from "zustand/middleware";

import type { ProfileModel } from "../services/profile/profile";
import {
  createProfile,
  deleteProfile,
  fetchProfiles,
  updateProfile,
} from "../services/profile/profile";

type ProfileStore = {
  profiles: ProfileModel[];
  loadProfiles: () => Promise<void>;
  createProfile: (data: Omit<ProfileModel, "id">) => Promise<ProfileModel>;
  updateProfile: (id: string, data: Partial<ProfileModel>) => Promise<ProfileModel>;
  deleteProfile: (id: string) => Promise<void>;
};

export const useProfileStore = create<ProfileStore>()(
  devtools((set) => ({
    profiles: [],

    loadProfiles: async () => {
      const list = await fetchProfiles();
      set({ profiles: list });
    },

    createProfile: async (payload) => {
      const newItem = await createProfile(payload);
      set((state) => ({ profiles: [...state.profiles, newItem] }));
      return newItem;
    },

    updateProfile: async (id, data) => {
      const updated = await updateProfile(id, data);
      set((state) => ({
        profiles: state.profiles.map((p) => (p.id === id ? updated : p)),
      }));
      return updated;
    },

    deleteProfile: async (id) => {
      await deleteProfile(id);
      set((state) => ({
        profiles: state.profiles.filter((p) => p.id !== id),
      }));
    },
  })),
);
