import React, { useState } from 'react'
import { inject, observer } from 'mobx-react'
import { Button, Input } from '@material-ui/core'

const AddActions = inject('company')(observer((props) => {

    
    console.log(props)
    return (
        <div>
            <h1>Add Client</h1>
            <div>First name : <Input placeholder="First Name" /> </div>
            <div>Last name : <Input placeholder="Last Name" /> </div>
            <div>Country : <Input placeholder="Country" /> </div>
            <div>Owner : <Input placeholder="Owner" /> </div>
            <Button > Add New Client</Button>
        </div>
    )
}))

export default AddActions