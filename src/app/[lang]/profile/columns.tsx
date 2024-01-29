"use client";

import { ColumnDef } from "@tanstack/react-table";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Activity = {
  id: string;
  role: string;
  title: string;
  points: number;
};

export const columns: ColumnDef<Activity>[] = [
  {
    accessorKey: "project.name",
    header: "Title",
  },
  {
    accessorKey: "role",
    header: "Role",
  },
  {
    accessorKey: "points",
    header: "Points",
  },
];

export const Krdcolumns: ColumnDef<Activity>[] = [
  {
    accessorKey: "points",
    header: "پۆینت",
  },
  {
    accessorKey: "role",
    header: "ڕۆڵ",
  },

  {
    accessorKey: "project.name",
    header: "پڕۆژە",
  },
];
