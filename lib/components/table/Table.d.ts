import * as React from "react";
interface Props {
    className?: string;
    headers: React.ReactNode[];
    rows: React.ReactNode[][];
}
declare const Table: (props: Props) => JSX.Element;
export default Table;
