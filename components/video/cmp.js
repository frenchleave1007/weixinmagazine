// components/video/cmp.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    videoSrc: String, // 视频地址
    posterSrc: String, // 海报地址
    duration: String, // 视频长度
    mainTitle: String, // 文字
    videoId: String // videoID
  },

  /**
   * 组件的初始数据
   */
  data: {
    showPoster: true
  },
  attached() {
    this._getVideoInfo()
  },
  /**
   * 组件的方法列表
   */
  methods: {
    onPlay() {
      this._toggleVideoPoster()
      this.video.play()
    },
    onMaskTap() {
      this._toggleVideoPoster()
      this.video.seek(0)
      this.video.stop()
    },
    _toggleVideoPoster() {
      this.setData({
        showPoster: !this.data.showPoster
      })
    },
    _getVideoInfo() {
      const id = this.properties.videoId
      this.video = wx.createVideoContext(id, this)
    },
    onVideoEnd() {
      this._toggleVideoPoster()
    }
  }
})
