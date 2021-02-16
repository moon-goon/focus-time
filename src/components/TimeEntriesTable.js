import React, { useState, useEffect } from 'react';
import MaterialTable from 'material-table'

export default function Entries(props) {

  const [columns, setColumns] = useState([
    { title: '', field: 'id', hidden: true },
    { title: 'Task', field: 'task' },
    { title: 'Note', field: 'note' },
    { title: 'Duration', field: 'duration' },
    { title: 'Created At', field: 'createdAt', defaultSort: 'desc' },
  ]);

  const [data, setData] = useState([]);

  const handleChange = (id) => {
    let entries = JSON.parse(localStorage.getItem('ft_entries'));
    let newEntries = entries.filter(entry => {
      return entry.id !== id;
    })
    setData(newEntries)
    localStorage.setItem('ft_entries', JSON.stringify(newEntries))
    props.handleChange(newEntries);
  }

  useEffect(() => {

    setData(props.data)

  }, [props])

  return (
    <MaterialTable
      title=""
      columns={columns}
      data={data}
      options={
        { 'padding' : 'dense', }
      }
      editable={{
        onRowDelete: oldData =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              resolve(handleChange(oldData.id));
            }, 1000)
          }),
      }}
    />
  )
}
