import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { TableContainer } from "./styles";

type IItemHeade = {
  name: string;
  label: string;
  format?: (value: string) => string | number | boolean;
};

interface ITableProps {
  headerTable: IItemHeade[];
  options: any[];
  onDelete?: (value: string) => void;
  onEdit?: (value: string) => void;
}

const Table: React.FC<ITableProps> = ({
  headerTable,
  options,
  onDelete,
  onEdit,
}) => {
  return (
    <TableContainer>
      <thead>
        <tr>
          {headerTable.map((header, index) => {
            return <th key={index}>{header.label}</th>;
          })}
          <th className="th_action">Ações</th>
        </tr>
      </thead>
      <tbody>
        {options.map((op) => {
          return (
            <tr>
              {headerTable.map(({ name, format }) => {
                return <td>{format ? format(op[name]) : op[name]}</td>;
              })}
              <td>
                <div className="actions">
                  <FaEdit onClick={() => onEdit && onEdit(String(op.id))} />
                  <FaTrash
                    onClick={() => onDelete && onDelete(String(op.id))}
                  />
                </div>
              </td>
            </tr>
          );
        })}
      </tbody>
    </TableContainer>
  );
};

export default Table;
