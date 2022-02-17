import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { requestApiData } from '../store/actions'

const User = ({}) => {
  const { user } = useSelector((state) => state.data)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(requestApiData())
  }, [])

  console.log(user)

  if (!user) {
    return <div>loading...</div>
  }

  return (
    <div>
      <div>{user.gender}</div>
      <div>{user.dob.age}</div>
      <div>{user.email}</div>
      <div>{user.name.first}</div>
      <div>{user.phone}</div>
      <div>{user.registered.date}</div>
    </div>
  )
}

export default User
