import { observable, action, computed, makeObservable } from 'mobx'
import Client from './Client'

export default class Company {
    clientList = []
    constructor() {
        makeObservable(this, {
            clientList: observable,
            numItems: computed,
            getClientList: action,
            // updateClient: action
        })
    }
    get numItems() {
        return this.clientList.length
    }

    getClientList(data) {
        data.forEach(a => {
            const fullName = a.name.split(" ")
            const firstName = fullName[0]
            const lastName = fullName[1]
            const person = new Client(a._id, firstName, lastName, a.email, a.firstContact, a.emailType, a.sold, a.owner, a.country)
            this.clientList.push(person)
        });
    }

    // updateClient(id, _firstName, _lastName, _country) {
    //     let findId = this.clientList.find(a => a.id === id)
    //     console.log(findId)
    //     if (findId) {
    //         findId.firstName = _firstName
    //         findId.lastName = _lastName
    //         findId.country = _country
    //     }
    // }

    addClient = () => {
        const client = new Client()
    }

    // updateClientList(data) {
    //     console.log(data)

    //     // const person = this.list.find(p => p.id === id)
    //     // person.text = text
    // }

}

