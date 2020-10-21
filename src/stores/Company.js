import { observable, action, computed, makeObservable } from 'mobx'
import Client from './Client'

export default class Company {
    list = []
    constructor() {
        makeObservable(this, {
            list: observable,
            numItems: computed,
            getList: action,
            updateList: action
        })
    }
    get numItems() {
        return this.list.length
    }

    getList(data) {
        data.forEach(a => {
            const fullName = a.name.split(" ")
            const firstName = fullName[0]
            const lastName = fullName[1]
            const person = new Client(a._id, firstName,lastName, a.email, a.firstContact, a.emailType, a.sold, a.owner, a.country)
            this.list.push(person)
        });
    }

    // updateList(id, text) {
    //     console.log(id)
    //     console.log(text)
    //     const person = this.list.find(p => p.id === id)
    //     person.text = text
    // }

}

