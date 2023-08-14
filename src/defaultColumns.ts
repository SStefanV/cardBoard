import { Column, Task } from "./types";

export const defaultCols: Column[] = [
  {
    id: "2001",
    title: "Stefan Vasilica",
    index: "1",
  },
  {
    id: "todo",
    title: "Work To Do",
    index: "2",
  },
  {
    id: "done",
    title: "Done",
    index: "3",
  },
];

export const defaultTasks: Task[] = [
  {
    id: "1",
    columnId: "2001",
    content: "logroño-saica     5:20",
    division: "fab",
  },
  {
    id: "2",
    columnId: "2001",
    content: "saica-logroño     6:20",
    division: "fab",
  },
  {
    id: "3",
    columnId: "2001",
    content: "logroño-zaragoza     6:45",
    division: "log",
  },
  {
    id: "4",
    columnId: "2001",
    content: "zaragoza-logroño     10:15",
    division: "log",
  },
  {
    id: "5",
    columnId: "todo",
    content: "Develop user registration ",
    division: "inter",
  },
  {
    id: "6",
    columnId: "todo",
    content: "Conduct security testing",
    division: "inter",
  },
];
