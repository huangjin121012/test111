import Service from '@/utils/request'

export function add(evaluation_id, data) {
  return Service({
    url: `/evaluation/${evaluation_id}/patent/add`,
    method: 'POST',
    data
  })
}

export function deleteById(evaluation_id, id) {
  return Service({
    url: `/evaluation/${evaluation_id}/patent/delete/${id}`,
    method: 'DELETE',
  })
}

export function updateById(evaluation_id, id) {
  return Service({
    url: `/evaluation/${evaluation_id}/patent/${id}`,
    method: 'PUT'
  })
}

export function getById(evaluation_id, id) {
  return Service({
    url: `/evaluation/${evaluation_id}/patent/${id}`,
    method: 'GET'
  })
}

export function list(evaluation_id) {
  return Service({
    url: `/evaluation/${evaluation_id}/patent/list`,
    method: 'GET',
  })
}
