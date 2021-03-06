import React, { useState, useEffect } from 'react'
import { inject, observer } from 'mobx-react'
import { TableCell, TableRow } from '@material-ui/core'
import ClientsTable from './ClientsTable'
import UpdateClientPopUp from './UpdateClientPopUp'


const ClientRow = inject('company')(observer((props) => {

    const clientList = props.company.clientList

    // const click = (event) => {
    //     const tableRow =
    //         event.target.tagName === "TR" ? event.target : event.target.closest("tr")
    //     // const rowData = props.rows.find(
    //     //   (row) => row.code === parseInt(tableRow.getAttribute("data-id"))
    //     // )
    //     const rowId = clientList.id
    //     console.log(tableRow)
    //     console.log(props.client.id)
    //     // console.log(rowData)
    //     prompt("enter text")
    //     // props.UpdateClientPopUp(tableRow)
    // }

    const clickRow = () => {
        // console.log(props.client.id)
        console.log(props.client)
    //    return <UpdateClientPopUp id={props.client.id}/>
        props.click({open:true,clientToUpdate: props.client})
    }
    // console.log(props)
    // console.log(clientList)
    const a = props.client
    return (
        <TableRow onClick={()=> clickRow()} person={props.client} >
            <TableCell>{a.firstName}</TableCell>
            <TableCell>{a.lastName}</TableCell>
            <TableCell>{a.email}</TableCell>
            <TableCell>{a.firstContact}</TableCell>
            <TableCell>{a.sold === 1 ? "sold" : "on process"}</TableCell>
            <TableCell>{a.type}</TableCell>
            <TableCell>{a.owner}</TableCell>
            <TableCell>{a.country}</TableCell>
        </TableRow>
        
    
    )

}))

export default ClientRow
