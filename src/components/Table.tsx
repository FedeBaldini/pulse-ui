import { CSSProperties, ReactElement, ReactNode, useEffect } from "react";

import classNames from "classnames";

import { useChildren } from "../hooks";
import {
  WithChildren,
  WithOptionalChildren,
  WithOptionalClassname
} from "../types";

const TABLE_GRID_COLUMN_CLASSES = [
  "grid grid-cols-[repeat(var(--column-count),1fr)]"
];

type Header = {
  property: string;
  text?: ReactNode;
};

export interface TableProps extends WithOptionalClassname, WithChildren {
  headers: Header[];
}

export function Table({ headers, className, children }: TableProps) {
  const { getChildrenOfType } = useChildren(children);
  const rows = getChildrenOfType(Table.Row) as ReactElement<TableRowProps>[];

  useEffect(() => {
    if (!rows) {
      throw new Error(
        "You must provide at least one Table.Row as Table component child."
      );
    }
  }, [rows]);

  if (!rows) return null;

  return (
    <>
      <div className="flex flex-col gap-2 md:gap-4 lg:hidden">
        {rows.map((row, index) => (
          <div
            key={index}
            className={classNames(
              "rounded-generic border border-neutral-light odd:bg-neutral-extra-light dark:odd:text-dark-primary",
              "px-2 py-4 md:px-4 md:py-6 grid grid-cols-1 gap-2"
            )}
          >
            {row.props.children.map((child, index) => {
              const header = headers.find(
                ({ property }) => property === child.props.property
              );
              return (
                <Table.Cell
                  key={index}
                  className="grid grid-cols-1 gap-2 py-0"
                  property={child.props.property}
                >
                  <h4
                    className="text-lg font-semibold leading-none"
                    children={header?.text}
                  />
                  {child.props.children}
                </Table.Cell>
              );
            })}
          </div>
        ))}
      </div>
      <div
        className={classNames(
          TABLE_GRID_COLUMN_CLASSES,
          "hidden lg:block rounded-generic border border-neutral-light",
          className
        )}
        style={{ "--column-count": headers.length } as CSSProperties}
      >
        <Table.Row className="rounded-t-generic">
          {headers.map((header, index) => (
            <Table.Cell
              key={index}
              property={header.property}
              className="font-semibold text-lg"
            >
              {header.text}
            </Table.Cell>
          ))}
        </Table.Row>
        {rows}
      </div>
    </>
  );
}

interface TableRowProps extends WithOptionalClassname {
  children: ReactElement<TableCellProps>[];
}

function TableRow({ children, className }: TableRowProps) {
  return (
    <div
      className={classNames(
        TABLE_GRID_COLUMN_CLASSES,
        "col-[span_var(--column-count)] px-4",
        "odd:bg-neutral-extra-light dark:even:bg-white dark:text-dark-primary border-b border-neutral-light last:border-none last:rounded-b-generic",
        className
      )}
    >
      {children}
    </div>
  );
}

interface TableCellProps extends WithOptionalChildren, WithOptionalClassname {
  property: string;
  align?: "left" | "center" | "right";
}

function TableCell({
  property,
  children,
  className,
  align = "left"
}: TableCellProps) {
  return (
    <div
      className={classNames(
        "p-2 flex items-center",
        {
          "justify-start": align === "left",
          "justify-center": align === "center",
          "justify-end": align === "right"
        },
        className
      )}
      data-column={property}
    >
      {children}
    </div>
  );
}

Table.Row = TableRow;
Table.Cell = TableCell;
