const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app) {
  app.use(
    '/ajax',
    createProxyMiddleware({
      target: 'https://i.maoyan.com',
      changeOrigin: true
    })
  )

  // 可以寫很多個代理

  // app.use(
  //   '/ajax2',
  //   createProxyMiddleware({
  //     target: 'https://i2.maoyan.com',
  //     changeOrigin: true
  //   })
  // )

  // app.use(
  //   '/ajax3',
  //   createProxyMiddleware({
  //     target: 'https://i3.maoyan.com',
  //     changeOrigin: true
  //   })
  // )
}

// https://i.maoyan.com/ajax/comingList?ci=1&limit=10&movieIds=&token=&optimus_uuid=0213411066DB11EC97E5B17F51643A714D3DCE91F9A042A0B8038AF6545D2CFB&optimus_risk_level=71&optimus_code=10
