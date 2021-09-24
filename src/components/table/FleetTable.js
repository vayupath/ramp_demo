import React from 'react';
import { Table, Tbody, Td, Th, Thead, Tr } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import { ReactComponent as Delete } from '../../assets/delete.svg';
import { ReactComponent as Edit } from '../../assets/edit.svg';
const FleetTable = ({ data, headerData }) => {
  return (
    <Table>
      <Thead>
        <Tr>
          {headerData.map((headerText) => {
            return <Th className='table__header'>{headerText}</Th>;
          })}
        </Tr>
      </Thead>
      <Tbody>
        {data.map((row) => {
          console.log(row.keys);
          return (
            <Tr className='table__row'>
              {Object.keys(row).map((key) => {
                return (
                  <Td className='table__cell'>
                    <span>{row[key]}</span>
                  </Td>
                );
              })}
              <Td>
                <button className='button'>N/A</button>
              </Td>
              <Td>
                <button className='button'>Configuration</button>
              </Td>
              <Td>
                <button className='button'>Define</button>
              </Td>
              <Td>
                <Edit style={{ cursor: 'pointer' }} />
                <span />
                <Delete style={{ cursor: 'pointer' }} />
              </Td>
            </Tr>
          );
        })}
      </Tbody>
    </Table>
  );
};

FleetTable.propTypes = {};

export { FleetTable };
