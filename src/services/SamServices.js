
export default class SamServices {

    constructor(){
        this._apiBase = 'https://social-network.samuraijs.com/api/1.0/'
    }

    getResoure = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`)

        if(!res.ok){
            throw new Error(`Could not fetch ${url}, received ${res.status}`)
        }

        return res.json()
    }

    getUserProfile = async (id) => {
        const res = await this.getResoure(`profile/${id}`)
        return res
    }

    getUsers = async (page, pageSize) => {
        const res = await this.getResoure(`users?page=${page}&count=${pageSize}`)
        return res
    }


}