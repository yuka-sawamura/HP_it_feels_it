import { ReactNode } from "react";

export type Staff = {
  date: ReactNode;
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  image: {
    url: string;
    height: number;
    width: number;
  };
  name: string;
  position: string;
  intro: string;
  removal: boolean;
};

export type Gender = "women" | "men";

export type MenuItem = {
  image: any;
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  menu: string;
  thumbnail: {
    url: string;
    height: number;
    width: number;
  };
  price: number;
  gender: Gender;
};

export type HairMenu = {
  id: string;
  createdAt: string;
  updatedAt: string;
  category: string[];
  label: string;
  pricing: string;
  tilde?: boolean;
};
