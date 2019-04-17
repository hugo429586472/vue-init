export const Mock = require('mockjs')

export const users = [
  {
    id: 1,
    username: 'hugo',
    account: 'hugo',
    password: '123456',
    role: 'manager',
    role_id: 1
  },
  {
    id: 2,
    username: 'sherlock',
    account: 'sherlock',
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
      name: 'events',
      title: '活动列表'
    },
    {
      name: 'audit_list',
      title: '审核列表',
      children: [
        {name: 'pending_audit_list',title: '待审核列表'},
        {name: 'audited_list',title: '已审核列表'}
      ]
    },
    {
      name: 'setting',
      title: '权限设置',
      href: 'xxx'
    },
    {
      name: 'applicants',
      title: '申报列表'
    },
    {
      name: 'users',
      title: '用户列表'
    }
  ],
  'user': [
    {
      name: 'test1',
      title: '活动列表'
    },
    {
      name: 'test3',
      title: '权限设置',
      href: 'xxx'
    },
    {
      name: 'test4',
      title: '用户列表'
    }
  ]
}
