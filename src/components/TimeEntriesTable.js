import React, { useState, useEffect } from 'react';
import MaterialTable from 'material-table'

export default function Entries(props) {

  const { useState } = React;

  const [columns, setColumns] = useState([
    {
      title: 'Task', field: 'task',
      editComponent: props => (
        <input
          type="text"
          value={props.value}
          onChange={e => props.onChange(e.target.value)}
        />
      )
    },
    { title: 'Note', field: 'note' },
    { title: 'Duration', field: 'duration' },
    { title: '', field: 'isTicking', hidden: true },
    { title: 'Created At', field: 'createdAt' },
  ]);

  const [data, setData] = useState([
    { task: 'test 1', note: 'Test Note', duration: 12123, createdAt: 123123 },
    { task: 'test 2', note: 'Test Note', duration: 12123, createdAt: 123123 },
    { task: 'test 3', note: 'Test Note', duration: 12123, createdAt: 123123 },
  ]);

  useEffect(() => {

  });

  return (
    <MaterialTable
      title="Time Entries"
      columns={columns}
      data={data}
      editable={{
        // onRowAdd: newData =>
        //   new Promise((resolve, reject) => {
        //     setTimeout(() => {
        //       setData([...data, newData]);
              
        //       resolve();
        //     }, 1000)
        //   }),
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              const dataUpdate = [...data];
              const index = oldData.tableData.id;
              dataUpdate[index] = newData;
              setData([...dataUpdate]);

              resolve();
            }, 1000)
          }),
        onRowDelete: oldData =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              const dataDelete = [...data];
              const index = oldData.tableData.id;
              dataDelete.splice(index, 1);
              setData([...dataDelete]);

              resolve();
            }, 1000)
          }),
      }}
    />
  )
}
