Component({
  properties:{
    title: {
      type: String,
      value: "--"
    },
    effectiveLists: {
      type: Array,
      value: []
    },
    effective:{
      type: Number,
      value: 0
    }
  },
  data: {
    allItem: 5,
    effectiveTotal: 0
  },
  lifetimes:{
    attached(){
      let intNum = this.data.effective;
      if(intNum>this.data.allItem) inNum = Math.round(intNum/this.data.allItem);
      this.setData({effectiveTotal: intNum})
    }
  }
})

