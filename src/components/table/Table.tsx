import * as React from "react";
import styled from "styled-components";

interface PassedProps {
  headers: React.ReactNode[];
  rows: React.ReactNode[][];
}

interface Props extends PassedProps {
  className?: string;
}

const Component = (props: Props) => {
  const { headers, rows } = props;
  return (
    <table>
      <thead>
        <tr>
          {headers.map((header, idx) => (
            <th key={idx}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, ridx) => (
          <tr key={ridx}>
            {row.map((d, rridx) => (
              <td key={rridx}>{d}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const StyledComponent = styled(Component)`
  border: 1px solid #008000;
  border-collapse: separate;
  border-left: 0;
  border-radius: none;
  width: 100%;
  margin-bottom: 20px;
  max-width: 100%;
  background-color: transparent;
  border-spacing: 0;
  display: table;
  font-size: 16px;
  line-height: 20px;
  color: #ff0;
  & > thead {
    display: table-header-group;
    vertical-align: middle;
    border-color: inherit;
  }
  & tr {
    display: table-row;
    vertical-align: inherit;
    border-color: inherit;
  }
  & th {
    display: table-row;
    vertical-align: inherit;
    border-color: inherit;
  }
  & tbody {
    display: table-row-group;
    vertical-align: middle;
    border-color: inherit;
    border-collapse: separate;
  }
  & tr td {
    border-left: 1px solid #008000;
    padding: 8px;
    line-height: 20px;
    text-align: left;
    vertical-align: top;
    border-top: 1px solid #008000;
    display: table-cell;
  }
  & tr:nth-child(even) td {
    background-color: #000;
  }
`;

export const Table = StyledComponent;
