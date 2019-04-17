export const Mock = require('mockjs')

export const users = [
  {
    id: 1,
    username: '雨果',
    account: 'hugo',
    password: '123456',
    role: 'manager',
    role_id: 1
  },
  {
    id: 3,
    username: '测试管理',
    account: 'admin',
    password: '123456',
    role: 'manager',
    role_id: 1
  },
  {
    id: 4,
    username: '测试普通',
    account: 'user',
    password: '123456',
    role: 'user',
    role_id: 2
  }
]

export const roles = [
  'manager',
  'user',
  'admin'
]

export const menus = {
  'manager': [
    {
      name: 'list1',
      title: '列表'
    },
    {
      name: 'list2',
      title: '列表2',
      children: [
        {name: 'sub_list1',title: '子列表1'},
        {name: 'sub_list2',title: '子列表2'}
      ]
    }
  ],
  'user': [
    {
      name: 'list1',
      title: '列表'
    }
  ]
}
