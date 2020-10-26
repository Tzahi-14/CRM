import { observable, makeObservable, action } from 'mobx'
import axios from 'axios'

export default class Person {
    id
    firstName
    lastName
    email
    firstContact
    sold
    type
    owner
    country
    constructor(_id, _firstName, _lastName, _email, _firstContact, _sold, _type, _owner, _country) {
        this.id = _id
        this.firstName = _firstName
        this.lastName = _lastName
        this.email = _email
        this.firstContact = _firstContact
        this.type = _type
        this.sold = _sold
        this.owner = _owner
        this.country = _country
        makeObservable(this, {
            firstName: observable,
            lastName: observable,
            email: observable,
            firstContact: observable,
            sold: observable,
            type: observable,
            owner: observable,
            country: observable,
            updateClient: action
        })
    }
    async updateClient(firstName,lastName,country) {
        await axios.put(`http://localhost:4003/clientUpdate/${this.id}`,{firstName,lastName,country})
        this.firstName = firstName
        this.lastName = lastName
        this.country = country
    }
    // updateClient (firstName,lastName,country){
    //    this.firstName=firstName
    //    this.lastName = lastName
    //    this.country = country
    // }

}

