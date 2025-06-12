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

export type MenuItem = {
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
};
