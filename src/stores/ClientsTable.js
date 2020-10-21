import { observable, makeObservable, action} from 'mobx'

export default class ClientsTable{
    popup
    page
    rowsPerPage
    constructor(_popup,_page,_rowsPerPage) {
        this.popup=_popup,
        this.page=_page,
        this.rowsPerPage=_rowsPerPage,

        makeObservable(this, {
            popup: observable,
            page: observable,
            rowsPerPage: observable,
        })
    }

    handleClick(val) {
        this.popup = val
    }

    handleUpdate(data){
        this.popup.clientToUpdate.updateClient(data.)
    }



}
