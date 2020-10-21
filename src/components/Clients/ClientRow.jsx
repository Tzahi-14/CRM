import React, { useState, useEffect } from 'react'
import { inject, observer } from 'mobx-react'
import { TableCell, TableRow } from '@material-ui/core'
import ClientsTable from './ClientsTable'
import UpdateClientPopUp from './UpdateClientPopUp'


const ClientRow = inject('company')(observer((props) => {

    const clientList = props.company.clientList

    console.log(props)
    console.log(clientList)
    // const name = clientList.name.split(" ")
    // const firstName = name[0]
    // const lastName = name[1]
    return (
        <div>
            
        <span>{clientList.id}</span>
        <span>{clientList.firstName}</span>
        <span>{clientList.lastName}</span>
        </div>
        // <TableRow key={clientList.id}>
        //     <TableCell>{clientList.firstName}</TableCell>
        //     <TableCell>{clientList.lastName}</TableCell>
        //     <TableCell>{clientList.email}</TableCell>
        //     <TableCell>{clientList.firstContact}</TableCell>
        //     <TableCell>{clientList.emailType}</TableCell>
        //     <TableCell>{clientList.sold}</TableCell>
        //     <TableCell>{clientList.owner}</TableCell>
        //     <TableCell>{clientList.country}</TableCell>
        // </TableRow>
    )

}))

export default ClientRow
