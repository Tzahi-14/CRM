import React, { useState, useEffect } from 'react'
import { inject, observer } from 'mobx-react'
import { Paper, Table, TableContainer, TablePagination } from '@material-ui/core'
import TableHeaders from './TableHeaders'
import Clients from './Clients'
import UpdateClientPopUp from './UpdateClientPopUp'
import ClientSearch from './ClientSearch'

const ClientsTable = inject("company")(observer((props) => {

    let [updatePopUp,setUpdatePopUp] = useState({ open:false , clientToUpdate: {}})
    let [page,setPage] = useState(0)
    let [rowsPerPage,setRowsPerPage] = useState(10)

    const handleClick = (objValue)=>{
        setUpdatePopUp(objValue)
    }

    const handleUpdate = (data)=>{
        console.log(data)
        updatePopUp.clientToUpdate.updateClient(data.firstName,data.lastName,data.country)
        // updatePopUp.clientToUpdate.updateClientList(data.firstName,data.lastName,data.country)
        setUpdatePopUp({open:false, clientToUpdate: {}})
    }

    const handleChangePage =(event,newPage)=>{
        // console.log(e)
        console.log(page)
        console.log(newPage)
        console.log("hey")
        setPage(newPage)
    }

    const handleChangeRowsPerPage = (e)=>{
        setRowsPerPage(e.target.value)
        setPage(0)
    }


    // console.log(props.company.clientList.length)

    return (
        
        <Paper >
           {/* { props.company.clientList.map(client=> client)} */}
        {/* <Paper className={classes.root}> */}
            <TableContainer > 
            {/* <TableContainer className={classes.container}> */}
            {/* {props.company.clientList.map(client=> <UpdateClientPopUp click={handleClick} update={handleUpdate} open={updatePopUp.open} client={client}/>)} */}
                <UpdateClientPopUp click={handleClick} update={handleUpdate} open={updatePopUp.open} />
                <Table stickyHeader>
                    <TableHeaders />
                    <Clients page={page} rowsPerPage={rowsPerPage} click={handleClick} />
                </Table>
            </TableContainer>
            <TablePagination
            
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={props.company.clientList.length}
                rowsPerPage={rowsPerPage}
                // rowsPerPage="50"
                page={page}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
            />
        </Paper>

    )

}))

export default ClientsTable