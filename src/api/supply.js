import Service from '@/utils/request'

export function add(evaluation_id, data) {
  return Service({
    url: `/evaluation/${evaluation_id}/supply/add`,
    method: 'POST',
    data
  })
}

export function deleteById(evaluation_id, id) {
  return Service({
    url: `/evaluation/${evaluation_id}/supply/delete/${id}`,
    method: 'DELETE',
  })
}

export function updateById(evaluation_id, id) {
  return Service({
    url: `/evaluation/${evaluation_id}/supply/${id}`,
    method: 'PUT'
  })
}

export function getById(evaluation_id, id) {
  return Service({
    url: `/evaluation/${evaluation_id}/supply/${id}`,
    method: 'GET'
  })
}

export function list(evaluation_id) {
  return Service({
    url: `/evaluation/${evaluation_id}/supply/list`,
    method: 'GET',
  })
}
