import React, { useState, useEffect } from 'react'
import { inject, observer } from 'mobx-react'
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Input } from '@material-ui/core'

const UpdateClientPopUp = inject("company")(observer((props) => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [country, setCountry] = useState("")

    const inputHandler = (e) => {
        const { value, name } = e.target
        if(name ==='setFirstName'){
            setFirstName(value)
        }
        else if(name==='setLastName'){
            setLastName(value)
        }
        else if(name==='setCountry'){
            setCountry(value)
        }
    }
   
const emptySate = ()=>{
    setCountry("")
}

// const updateData = ()=>{
//     // console.log(props)
//     // console.log(props.clientToUpdate)
//     props.update(props.client.id,firstName,lastName,country) 
// }

const updateData = () =>{
    // props.company.updateClient()
    // props.company.clientList.map(a=>console.log(a.id))

}
// const id = props.company.clientList.map(a=>console.log(a.id))


    return (
        <div>
            {/* {console.log(props)} */}
            <Dialog onClose={() => { props.click(false) }} aria-labelledby="simple-dialog-title" open={props.open}>
                <DialogTitle id="simple-dialog-title">Update</DialogTitle>
                <DialogContent>
                    <Input placeholder="First name" style={{ margin: "1rem" }}  name="setFirstName" value={firstName} onChange={inputHandler}/>
                    <Input placeholder="Last name" style={{ margin: "1rem" }}  name="setLastName" value={lastName} onChange={inputHandler}/>
                    <Input placeholder="Country name" style={{ margin: "1rem" }}  name="setCountry" value={country} onChange={inputHandler}/>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() =>{props.click({open:false, clientToUpdate: {}})}} variant="contained" color="primary" > X</Button>
                    <Button onClick={() =>{props.update({firstName,lastName,country})}} variant="contained" color="primary" > Update</Button>
                    {/* <Button onClick={updateData} variant="contained" color="primary" > Update</Button> */}
                </DialogActions>
            </Dialog>
        </div>
    )

}))

export default UpdateClientPopUp