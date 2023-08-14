export type Id = string | number;

export type Column = {
  index: string;
  id: Id;
  title: string;
};

export type Task = {
  id: Id;
  columnId: Id;
  content: string;
  division: string;
};
