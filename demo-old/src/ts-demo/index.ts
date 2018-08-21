/** 这是User的接口 */
interface User {
  /** 这是用户名称 */
  name: string
  age: number
}

const user: User = {
  name: 'jake',
  age: 13
}

/**
 * @
 */
const defaultValue = {
  timeout: 50
}

type DefaultValue = typeof defaultValue

// =======================================

interface Dinner1 {
  fish?: number
  bear?: number
}

type Dinner2 = {
  fish: number
} | {
  bear: number
}

const d1: Dinner1 = {}

d1.bear = 12

const d2: Dinner2 = {
  bear: 12,
  fish: 32
}

if ('fish' in d2) {
  console.log('fish is in d2')
} else {
  console.log('fish is not in d2')
}

interface Address {
  name: string
  city: string
  street: string
}

interface Person {
  addr: Address
}

interface Food {
  name: string
}

interface API {
  '/user': { name: string },
  '/menu': { foods: Food[] }
}

/** 这是Restful API */
const get = <URL extends keyof API>(url: URL): Promise<API[URL]> => {
  return fetch(url).then(res => res.json())
}

get('/user').then(user => user.name)
get('/menu').then(menu => menu.foods)

function $<T extends HTMLElement>(id: string): T {
  return document.getElementById(id)
}

$<HTMLInputElement>('input').value
