import React from 'react'

function Welcome({ user }) {
  return (
    <div>Welcome-{user.username}
      Pass={user.pass}
    </div>
  )
}

export default Welcome