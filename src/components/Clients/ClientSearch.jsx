import React, { useState, useEffect } from 'react'
import { inject, observer } from 'mobx-react'
import { Button, Input } from '@material-ui/core'
import ClientsTable from './ClientsTable'

const ClientSearch = inject('company')(observer((props) => {
    const [search,setSearch] = useState("")
    const [firstName,setFirstName] = useState("")
    const [country,setCountry] = useState("")
    const [owner,setOwner] = useState("")

    const inputHandler = (e)=>{
        const {value,name} = e.target
        // setSearch(value)
        // console.log(value)
        if (name ==="setFirstName"){
            setFirstName(value)
            console.log(value)
        }
        else if(name==="setCountry"){
            setCountry(value)
        }
        else if(name==="setOwner"){
            setOwner(value)
        }
    }

    return (
        <div>
            <Input type="text" placeholder="Search client" name="setSearch" value={search} onChange={inputHandler} />
            <select name="" id="">
                <option name="setFirstName" value={firstName} onChange={inputHandler}>First name</option>
                <option name="setCountry" value={country} onChange={inputHandler}>Country</option>
                <option name="setOwner" value={owner} onChange={inputHandler}>Owner</option>
            </select>
        </div>
    )

}))

export default ClientSearch