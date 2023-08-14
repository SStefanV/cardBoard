import { Column, Task } from "./types";

export const defaultCols: Column[] = [
  {
    id: "2001",
    title: "Stefan Vasilica",
    index: "1",
  },
  {
    id: "doing",
    title: "Work in progress",
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
    division: "fabricas",
  },
  {
    id: "2",
    columnId: "2001",
    content: "saica-logroño     6:20",
    division: "fabricas",
  },
  {
    id: "3",
    columnId: "2001",
    content: "logroño-zaragoza     6:45",
    division: "logroza",
  },
  {
    id: "4",
    columnId: "2001",
    content: "zaragoza-logroño     10:15",
    division: "logroza",
  },
  // {
  //   id: "2",
  //   columnId: "todo",
  //   content:
  //     "Develop user registration functionality with OTP delivered on SMS after email confirmation and phone number confirmation",
  //   division: "inter",
  // },
  // {
  //   id: "3",
  //   columnId: "doing",
  //   content: "Conduct security testing",
  //   division: "fabricas",
  // },
  //   {
  //
];
