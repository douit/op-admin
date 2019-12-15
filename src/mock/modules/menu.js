/*菜单管理*/

// 获取菜单集合
function getList() {
    const data = {
        "code": 200,
        "data": [
            {
                "id":1,
                "permissionName":"系统管理",
                "permissionUrl":"",
                "permissionIcon":"el-icon-setting",
                "children":[
                    {"id":101,"permissionName":"用户管理","permissionUrl":"/sys/UserManage","permissionIcon":""},
                    {"id":102,"permissionName":"日志管理","permissionUrl":"/sys/LogManage","permissionIcon":""},
                ]
            },

        ]
    }
    return {
        url: '/menu/list', // 拦截路径
        method: 'get', // 请求方法
        response: (params) => {
            return data // 响应数据
        }
    }
}

export default [
    (getList)()
]
