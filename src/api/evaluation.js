import Service from '@/utils/request'

export function add( data) {
  return Service({
    url: `/evaluation/add`,
    method: 'POST',
    data
  })
}

export function deleteById(evaluation_id, id) {
  return Service({
    url: `/evaluation/${evaluation_id}/achievement/delete/${id}`,
    method: 'DELETE',
  })
}

export function updateById(evaluation_id, id) {
  return Service({
    url: `/evaluation/${evaluation_id}/achievement/${id}`,
    method: 'PUT'
  })
}

export function getById(evaluation_id, id) {
  return Service({
    url: `/evaluation/${evaluation_id}/achievement/${id}`,
    method: 'GET'
  })
}

export function list(userId) {
  return Service({
    url: `/evaluation/list?userId=`+userId,
    method: 'GET',
  })
}
