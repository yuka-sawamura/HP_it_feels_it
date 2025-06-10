export type Staff = {
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
