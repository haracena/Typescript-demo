import React from 'react'

type StatusProps = {
    status: 'loading' | 'success' | 'error'; // solo permite que sea cualquiera de estos stings
}

export const Status = (props: StatusProps) => {
    let message;
    if (props.status === 'loading') {
        message = 'Loading...'
    } else if (props.status === 'success') {
        message = 'Data fetched successfully!'
    } else if (props.status === 'error') {
        message = 'Error fetching data'
    }

  return (
    <h2>Status - {message}</h2>
  )
}
