import React, { useState } from 'react';
import { IoIosAddCircleOutline } from 'react-icons/io';
import Paginator from '../paginator/Paginator';
import SearchInput from '../search-input/SearchInput';
import { FleetTable } from '../table/FleetTable';

const ITEMS_PER_PAGE = 10;
const headerData = [
  'Sl no.',
  'Vehicle No',
  'Vehicle Name',
  'Device Status',
  'Device Parameter',
  'Ideal Value',
  'Action',
];
// const data = {
//   sl: Math.floor(Math.random() * 39),
//   vehicle_no: '1234',
//   vehicle_name: 'siddharth',
// };

const myArr = new Array(100).fill().map((e, i) => {
  return {
    sl: i,
    vehicle_no: '1234',
    vehicle_name: 'siddharth',
  };
});

// const myArr = Array.from(
//   {
//     length: 50,
//   },
//   () => data
// );

const Dashboard = (props) => {
  const [page, setPage] = useState(1);
  const displayedUsers = [...myArr].slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE
  );
  return (
    <div>
      <div className=' row'>
        <div className='nav__list nav__list--primary'>
          <ul class='breadcrumb'>
            <li>
              <a href={() => {}}>Home</a>
            </li>
            <li>
              <a href={() => {}}>Organization</a>
            </li>
            <li>
              <li>manage Fleet</li>
            </li>
          </ul>
          <SearchInput></SearchInput>
        </div>
        <div className='nav__list nav__list--secondary row-flex'>
          <button className='button button--icon'>
            {' '}
            <IoIosAddCircleOutline className='nav__icon'></IoIosAddCircleOutline>
            Add New
          </button>
          <button className='button button--icon'>
            {' '}
            <IoIosAddCircleOutline className='nav__icon'></IoIosAddCircleOutline>
            Bulk Vehicle Entry
          </button>
        </div>
      </div>

      <FleetTable headerData={headerData} data={displayedUsers}></FleetTable>
      <Paginator
        setPage={setPage}
        selectedPage={page}
        itemsPerPage={ITEMS_PER_PAGE}
        totalItems={myArr.length}
      ></Paginator>
    </div>
  );
};

Dashboard.propTypes = {};

export default Dashboard;
