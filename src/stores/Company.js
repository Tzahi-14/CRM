import { observable, action, computed, makeObservable } from 'mobx'
import Client from './Client'
import axios from 'axios'

export default class Company {
    clientList = []
    filteredClientList = []
    constructor() {
        makeObservable(this, {
            clientList: observable,
            filteredClientList: observable,
            numItems: computed,
            getClientList: action,
            // updateClient: action
        })
    }
    get numItems() {
        return this.clientList.length
    }

    async getClientList() {
        const getDataList = await axios.get('http://localhost:4003/clients')
        const temp =[]
        console.log(getDataList.data[0])
        getDataList.data[0].forEach(a => {
            const person = new Client(a.id, a.firstName, a.lastName, a.email, a.firstContact, a.sold, a.type, a.owner, a.country)
            temp.push(person)
        });
        this.clientList = temp
    }

    searchClient (str){
        if(str.length>0){
            let include = this.clientList.filter(client => client.firstName.toLowerCase().includes(str))
            console.log(include)
            this.filteredClientList = include
        }
        else{
            this.filteredClientList = []
        }
    }
    // getClientList(data) {
    //     data.forEach(a => {
    //         const fullName = a.name.split(" ")
    //         const firstName = fullName[0]
    //         const lastName = fullName[1]
    //         const person = new Client(a._id, firstName, lastName, a.email, a.firstContact, a.emailType, a.sold, a.owner, a.country)
    //         this.clientList.push(person)
    //     });
    // }

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

