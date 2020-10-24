import React, { useState, useEffect } from 'react'
import { inject, observer } from 'mobx-react'
import Snackbar from "@material-ui/core/Snackbar"
import ClientRow from './ClientRow'
import { TableBody } from '@material-ui/core'
import TableHeaders from './TableHeaders'
import UpdateClientPopUp from './UpdateClientPopUp'

const Clients = inject('company')(observer((props) => {

    return (
        <TableBody>
            {console.log(props)}
            {props.company.clientList.map(client => <ClientRow key={client.id} client={client} click={props.click}/> )}
            {/* {props.company.clientList.map(client => <UpdateClientPopUp key={client.id} clientData={client} /> )} */}
        </TableBody>
        // <TableBody>
        //     {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
        //         return (
        //             <ClientRow key={row.id} client={row} click={props.click} />
        //         )
        //     })}
        // </TableBody>

    )


}))

export default Clients