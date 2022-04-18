import React, { Component } from 'react'
import MySwiper from './swiper/Swiper'
import MySwiperItem from './swiper/SwiperItem'
import axios from 'axios'

export default class App extends Component {
  state = {
    list: []
  }

  componentDidMount() {
    // setTimeout(() => {
    //   this.setState({
    //     list: ['aaa', 'bbb', 'ccc', 'ddd']
    //   })
    // }, 1000)

    axios({
      url: 'https://apipc-xiaotuxian-front.itheima.net/home/banner'
    }).then((res) => {
      console.log(res.data.result)
      this.setState({ list: res.data.result })
    })
  }

  render() {
    return (
      <div>
        <MySwiper loop={false}>
          {this.state.list.map((item) => (
            <MySwiperItem key={item.id}>
              <img src={item.imgUrl} alt="slide-img" style={{ width: '100%' }} />
            </MySwiperItem>
          ))}
        </MySwiper>
      </div>
    )
  }
}
