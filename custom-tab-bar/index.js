Component({
  data: {
    selected: 2,
    color: "#acb5c6",
    selectedColor: "#fb9300",
    list: [{
      pagePath: "/pages/home/index",
      pageCode: "home",
      text: "首页"
    }, {
      pagePath: "/pages/attendance/index",
      iconPath: "/image/attendance.png",
      selectedIconPath: "/image/attendance_hover.png",
      pageCode: "attendance",
      text: "打卡"
    }, {
      pagePath: "/pages/calendar/index",
      iconPath: "/image/calendar.png",
      selectedIconPath: "/image/calendar_hover.png",
      pageCode: "calendar",
      text: "日历"
    }, {
      pagePath: "/pages/user/index",
      iconPath: "/image/user.png",
      selectedIconPath: "/image/user_hover.png",
      pageCode: "user",
      text: "我的"
    }]
  },
  attached() {
  },
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path
      wx.switchTab({url})
      this.setData({
        selected: data.index
      })
    }
  }
})