const Request = require('../utils/request.js')

class IndexApi extends Request{
  getArticleList() {
    return this.getData({
      url: '/getIndexArticleList/0/0'
    })
  }
  getMarkList() {
    return this.getData({
      url: '/getMarkTypeList/0'
    })
  }
  getRecommendList() {
    return this.getData({
      url: '/getRecommentInfo/0'
    })
  }
}

module.exports = IndexApi
