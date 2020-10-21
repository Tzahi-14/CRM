import { observable, makeObservable, action } from 'mobx'

export default class Person {
    id
    firstName
    lastName
    email
    firstContact
    emailType
    sold
    owner
    country
    constructor(_id,_firstName,_lastName,_email,_firstContact,_emailType,_sold,_owner,_country){
        this.id = _id
        this.firstName = _firstName
        this.lastName = _lastName
        this.email = _email
        this.firstContact = _firstContact
        this.emailType = _emailType
        this.sold = _sold
        this.owner = _owner
        this.country = _country
        makeObservable(this, {
            id: observable,
            firstName: observable,
            lastName: observable,
            email: observable,
            firstContact: observable,
            emailType: observable,
            sold: observable,
            owner: observable,
            country: observable,
            updateClient : action
        })
    }
    updateClient (firstName,lastName,country){
       this.firstName=firstName
       this.lastName = lastName
       this.country = country
    }

}

