import { Button } from '@mui/material'
import React from 'react'

function EmailSignup({onBack}) {
  return (
    <div>
      <h2>email sign up</h2>
      <Button onClick={onBack}> Go Back</Button>
    </div>
  )
}

export default EmailSignup
