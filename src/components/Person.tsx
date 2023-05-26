import React from 'react'
import { PersonProps } from '../types/Person.type'

export const Person = ({person}: PersonProps) => {
  return (
    <h2>{person.firstName} {person.lastName}</h2>
  )
}
