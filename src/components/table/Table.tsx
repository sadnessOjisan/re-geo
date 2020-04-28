import * as React from "react";
import styled from "styled-components";

interface Props {
  className?: string;
  headers: React.ReactNode[];
  rows: React.ReactNode[][];
}

const Table = (props: Props) => {
  const { headers, rows } = props;
  return (
    <STable>
      <Thead>
        <Tr>
          {headers.map((header) => (
            <Th>{header}</Th>
          ))}
        </Tr>
      </Thead>
      <Tbody>
        {rows.map((row, ridx) => (
          <Tr>
            {row.map((d) => (
              <Td ridx={ridx}>{d}</Td>
            ))}
          </Tr>
        ))}
      </Tbody>
    </STable>
  );
};

const STable = styled.table`
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
`;

const Thead = styled.thead`
  display: table-header-group;
  vertical-align: middle;
  border-color: inherit;
`;

const Tr = styled.tr`
  display: table-row;
  vertical-align: inherit;
  border-color: inherit;
`;

const Th = styled.th`
  border-top: 0;
  vertical-align: bottom;
  border-left: 1px solid #008000;
  font-weight: bold;
  padding: 8px;
  line-height: 20px;
  text-align: left;
  display: table-cell;
`;

const Tbody = styled.tbody`
  display: table-row-group;
  vertical-align: middle;
  border-color: inherit;
  border-collapse: separate;
`;

const Td = styled.td<{ ridx: number }>`
  background-color: ${(props: { ridx: number }) =>
    props.ridx % 2 === 0 && "#000"};
  border-left: 1px solid #008000;
  padding: 8px;
  line-height: 20px;
  text-align: left;
  vertical-align: top;
  border-top: 1px solid #008000;
  display: table-cell;
`;

export default Table;
