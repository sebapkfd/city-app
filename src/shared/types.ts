export type Tag = {
  id: number;
  name: string;
};

export type Issue = {
  id: number;
  title: string;
  pictures: string[];
  description: string;
  date: string;
  tags: Tag[];
  location: string;
  state: string;
};

export type IssueInfo = {
  id: number;
  title: string;
  pictures: string[];
  date: string;
}

export type Release = {
  id: number;
  title: string;
  content: string;
  date: string;
};