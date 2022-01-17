export default {
  pages: [
    'pages/home/index',
    'pages/exchange/index',
    'pages/mine/index',
    'pages/activity/index',
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    list: [
      {
        pagePath: "pages/home/index",
        text: "首页",
        iconPath: 'assets/home.png',
        selectedIconPath: 'assets/home-active.png',
        color: '#666666',
        selectedColor: '#222222'
      },
      {
        pagePath: "pages/exchange/index",
        text: "兑换",
        iconPath: 'assets/exchange.png',
        selectedIconPath: 'assets/exchange-active.png',
        color: '#666666',
        selectedColor: '#222222'
      },
      {
        pagePath: "pages/mine/index",
        text: "我的",
        iconPath: 'assets/mine.png',
        selectedIconPath: 'assets/mine-active.png',
        color: '#666666',
        selectedColor: '#222222'
      }
    ]
  },
}
