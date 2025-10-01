import { create } from "zustand";

interface PageState{
    pageIndex: number;
    setPageIndex: (index: number) => void;
} 


export const landingcontroller = create<PageState>((set, get) => ({
    pageIndex: 0,
    setPageIndex: (index) => set({ pageIndex: index }),
}));