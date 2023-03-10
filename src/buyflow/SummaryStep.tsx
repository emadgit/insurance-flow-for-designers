import React from 'react'
import { Link } from 'react-router-dom'
import { ProductIds } from './Buyflow';
interface SummaryStepProps {
  collectedData: {
    email: string
    age: number
    name?: string;
    pId: string
  }
}

export const SummaryStep: React.FC<SummaryStepProps> = (props) => {
  return (
    <>
      {props.collectedData.pId === ProductIds.desIns && <div>Name: {props.collectedData.name}</div>}
      <div>Email: {props.collectedData.email}</div>
      <div>Age: {props.collectedData.age}</div>
      <div>
        <Link to="/purchased=dev_ins">Purchase</Link>
      </div>
    </>
  )
}
