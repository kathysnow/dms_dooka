function setTabBarIndex(o){
  if (typeof o.getTabBar === 'function' &&
    o.getTabBar()) {
    let ind = 0;
    const arr = o.getTabBar().data.list;
    arr.forEach((element,index) => {
      if(element.pageCode == o.data.pageName) ind = index;
    });
    o.getTabBar().setData({
      selected: ind
    })
  }
}
export default {
  setTabBarIndex
}