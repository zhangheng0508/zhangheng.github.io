//index.js
//获取应用实例
const app = getApp()
Page({
  data: {
    imgUrls: [
      '/pages/image/sg.jpg',
      '/pages/image/sgg.jpg',
      '/pages/image/shuigou.jpg',
      '/pages/image/ssg.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 1000,
    circular:true,
    proList:[{
      proName:"红苹果",
      proplaisi:13.08
    },
      {
        proName: "红苹果",
        proplaisi: 13.08
      },
      {
        proName: "红苹果",
        proplaisi: 13.08
      },
      {
        prName: "红苹果",
        proplaisi: 13.08
      },
      {
        proName: "红苹果",
        proplaisi: 13.08
      },
      {
        proName: "红苹果",
        proplaisi: 13.08
      }]
  }
})