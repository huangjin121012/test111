import Service from '@/utils/request'

export function loginUnit(data) {
  return Service({
    url: '/system/unit-login',
    method: 'POST',
    data
  })
}

export function login(data) {
  return Service({
    url: '/system/login',
    method: 'POST',
    data
  })
}

// 模板
export function getConfigsByProductId(productId) {
  return Service({
    url: '/manager/getConfigsByProductId',
    params: {
      productId: productId 
    }
  })
}
export function getAllAndroidPlugins() {
  return Service({
    url: '/manager/getAndroidPlugin ',
    method: 'GET'
  })
}
export function addNewAndroidPlugin(data) {
  return Service({
    url: '/manager/addAndroidPlguin',
    method: 'POST',
    data: JSON.stringify(data)
  })
}
