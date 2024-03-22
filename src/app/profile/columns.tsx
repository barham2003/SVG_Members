"use client";

import { ColumnDef } from "@tanstack/react-table";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Activity = {
  id: string;
  role: string;
  title: string;
  points: number;
  project: {
    date: Date;
    title: string;
  };
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
  {
    accessorKey: "project.date",
    header: "Date",
    cell: ({ row }) => {
      const date = row.original.project.date;

      let formatted;
      if (date instanceof Date || typeof date === "string") {
        formatted = new Date(date).toLocaleDateString();
      } else {
        formatted = new Date().toLocaleDateString();
      }

      return <span>{formatted}</span>;
    },
  },
];

export const Krdcolumns: ColumnDef<Activity>[] = [
  {
    accessorKey: "project.date",
    header: "بەروار",
    cell: ({ row }) => {
      const date = row.original.project.date;

      let formatted;
      if (date instanceof Date || typeof date === "string") {
        formatted = new Date(date).toLocaleDateString();
      } else {
        formatted = new Date().toLocaleDateString();
      }

      return <span>{formatted}</span>;
    },
  },

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
