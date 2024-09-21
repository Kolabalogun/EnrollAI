/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export interface TableColumn<T> {
  header: string;
  accessor: keyof T | ((row: T) => React.ReactNode);
  className?: string;
  flex?: number;
  headClassName?: string;
}

interface TableComponentProps<T> {
  footerTxt: string;
  columns: TableColumn<T>[];
  data: T[];
  footerOnSumbit?: () => void;
  emptyMessage?: string; // Add a prop for the empty message
}

export function TableComponent<T>({
  footerTxt,
  columns,
  data,
  footerOnSumbit,
  emptyMessage = "No data available", // Default empty message
}: TableComponentProps<T>) {
  // Type guard to ensure the value is a valid ReactNode
  const isReactNode = (value: any): value is React.ReactNode => {
    return (
      typeof value === "string" ||
      typeof value === "number" ||
      React.isValidElement(value) ||
      Array.isArray(value)
    );
  };

  return (
    <div className="mt-3 flex-1 ">
      <Table>
        <TableCaption>
          <p
            onClick={footerOnSumbit}
            className="text-right text-blue text-xs font-medium cursor-pointer"
          >
            {footerTxt}
          </p>
        </TableCaption>
        <TableHeader className="[&_tr]:border-0 bg-[#f2f4f7]">
          <TableRow>
            {columns.map((col, idx) => (
              <TableHead
                key={idx}
                style={{ flex: col.flex || 0 }}
                className={col.headClassName}
              >
                {col.header}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody className="[&_tr:last-child]:border-b-[1px] mb-10 remove-scrollbar">
          {data.length === 0 ? (
            <TableRow>
              <TableCell
                colSpan={columns.length}
                className="text-center text-gray-500"
              >
                {emptyMessage}
              </TableCell>
            </TableRow>
          ) : (
            data.map((row, rowIndex) => {
              // Ensure row is correctly typed as T
              const typedRow = row as T & { level?: string };

              return (
                <TableRow key={rowIndex}>
                  {columns.map((col, colIndex) => {
                    let value: React.ReactNode;
                    if (typeof col.accessor === "function") {
                      value = col.accessor(typedRow);
                    } else {
                      value = typedRow[
                        col.accessor as keyof T
                      ] as React.ReactNode; // Use type assertion
                    }

                    // Ensure value is a ReactNode
                    if (!isReactNode(value)) {
                      value = String(value); // Fallback to string conversion if necessary
                    }

                    return (
                      <TableCell
                        style={{ flex: col.flex || 0 }}
                        key={colIndex}
                        className={col.className}
                      >
                        {value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })
          )}
        </TableBody>
      </Table>
    </div>
  );
}
