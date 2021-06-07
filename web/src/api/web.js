import service from '@/utils/request'

export const getMainCategory = (data) => {
  return service({
    url: '/api/getMainCategory',
    method: 'get',
    data
  })
}

export const getArticleList = (data) => {
  return service({
    url: '/api/getArticleList',
    method: 'post',
    data
  })
}

export const getArticleDetail = (data) => {
  return service({
    url: '/api/getArticleDetail',
    method: 'post',
    data
  })
}

export const getIndexArticleList = (data) => {
  return service({
    url: '/api/getIndexArticleList',
    method: 'post',
    data
  })
}
