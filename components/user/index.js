Component({
  properties:{
    isSortTop: {
      type: Boolean,
      value: true  
    },
    title:{
       type: String,
       value: "DooKa",
    }
  },
  data: {
    iconBtnLists:[
      {label:'扫描上班',url:''},
      {label:'设备',url:'/pages/equipment/index'},
      {label:'文字3',url:''},
      {label:'文字4',url:''},
      {label:'文字5',url:''}
    ],
    goldLists:[
      {
        title: '本月金矿',
        total: 123333,
        informations:[
          {label: 'WT',value:'111'},
          {label: 'OTC01',value:'3'},
          {label: 'OTC02',value:'--'},
          {label: 'OTC01',value:'--'},
          {label: 'OTC02',value:'--'},
        ],
        zans:[
          {icon:'good-job-o', value:'0'},
          {icon:'flower-o', value:'0'},
          {icon:'diamond-o', value:'0'},
        ],
      },
      {
        title: '本班金矿',
        total: 123,
        informations:[
          {label: 'WT',value:'--'},
          {label: 'OTC01',value:'--'},
          {label: 'OTC02',value:'--'},
          {label: 'OTC01',value:'--'},
          {label: 'OTC02',value:'--'}
        ],
        zans:[
          {icon:'good-job-o', value:'0'},
          {icon:'flower-o', value:'0'},
          {icon:'diamond-o', value:'0'},
        ],
      }
    ],    
    tipsLists:[
      {label: 'WT',value:'--'},
      {label: 'OTC01',value:'--'},
      {label: 'OTC02',value:'--'},
      {label: 'OTC01',value:'--'},
      {label: 'OTC02',value:'--'}
    ],
    effective: 3,
    effectiveLists:[
      {label:'力量',value:123},
      {label:'信誉',value:123},
      {label:'经验',value:123},
    ],
    stepsCalendar:[
      {
        label: '步骤一',
        desc: '描述信息描述信息描述信息描述信息描述信息描述信息,描述信息描述信息,描述信息描述信息描述信息描述信息描述信息',
        date:'2023-01-01 11:11:11',
        state: 'success',
      },
      {
        label: '步骤二',
        desc: '描述信息',
        date:'2023-01-01 11:11:11',
        state: 'error',
      },
      {
        label: '步骤三',
        desc: '描述信息',
        date:'2023-01-01 11:11:11',
        state: 'complete',
      }
    ]
  }
})
