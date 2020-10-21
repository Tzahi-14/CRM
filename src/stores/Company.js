import { observable, action, computed, makeObservable } from 'mobx'
import Client from './Client'

export default class Company {
    clientList = []
    constructor() {
        makeObservable(this, {
            clientList: observable,
            numItems: computed,
            getClientList: action,
            // updateList: action
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
            const person = new Client(a._id, firstName,lastName, a.email, a.firstContact, a.emailType, a.sold, a.owner, a.country)
            this.clientList.push(person)
        });
    }

    // updateClientList(id, text) {
    //     console.log(id)
    //     console.log(text)
    //     const person = this.list.find(p => p.id === id)
    //     person.text = text
    // }

}

