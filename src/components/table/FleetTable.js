import React from 'react';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';
import { Table, Tbody, Td, Th, Thead, Tr } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
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
                <AiFillEdit className='table__button--action' />
                <span />
                <AiFillDelete className='table__button--action' />
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
