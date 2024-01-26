export interface iComment {
  id: number;
  content: string;
  user: string;
  removeComment: (id: number) => void;
}