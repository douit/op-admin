import axios from '../axios.js'

/**
 * 菜单管理
 */
export const getList = () => {
    return axios({
        url: `/menu/list`,
        method: 'get',
        params: {}
    })
}
