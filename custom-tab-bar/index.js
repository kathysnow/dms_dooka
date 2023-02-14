Component({
  data: {
    selected: 0,
    color: "#acb5c6",
    selectedColor: "#fb9300",
    list: [{
      pagePath: "/pages/home/index",
      iconPath: "/image/attendance.png",
      selectedIconPath: "/image/attendance_hover.png",
      pageCode: "home",
      text: "打卡"
    }, {
      pagePath: "/pages/equipment/index",
      iconPath: "/image/equipment.png",
      selectedIconPath: "/image/equipment_hover.png",
      pageCode: "equipment",
      text: "设备"
    }, {
      pagePath: "/pages/task/index",
      iconPath: "/image/task.png",
      selectedIconPath: "/image/task_hover.png",
      pageCode: "task",
      text: "任务"
    }, {
      pagePath: "/pages/school/index",
      iconPath: "/image/school.png",
      selectedIconPath: "/image/school_hover.png",
      pageCode: "school",
      text: "学院"
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