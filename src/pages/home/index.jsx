import { Component } from 'react'
import { View, Text, Image } from '@tarojs/components'
// import { AtProgress,  AtNoticebar } from 'taro-ui'
import './index.less'
import home2Img from '@/assets/home/home-2.png'

import boxImg from '@/assets/home/box.png'
import home3Img from '@/assets/home/home-3.png'
import bgImg from '@/assets/home/bg.png'
import yellowImg from '@/assets/home/yellow.png'

export default class Index extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };
  }
  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () {}

  getImg () {
    this.setState({showModal: true});
  }

  render () {
    const {showModal} = this.state;
    console.log('showModal=========>', this.state)
    const btns = [
      {
        text: '放入背包',
        callback: () => {
          console.log('放入背包, click...')
          Taro.switchTab({
            url: '/pages/home/index'
          })
        },
      },
      {
        text: '打开盲盒',
        callback: () => {
          console.log('打开盲盒, click...')
          Taro.switchTab({
            url: '/pages/home/index'
          })
        },
      }
    ]

    return (
      <View className='home'>
        <Image src={bgImg} className='home-bg'></Image>
        <Image src={yellowImg} className='yellow-img'></Image>
        <Image src={boxImg} className='box-img'></Image>
        
        {/* <AtProgress percent={50} status='progress' /> */}
        <View className='btn-wrap'>
        {
          btns.map(btn => {
            return (
              <View className='get-btn' onClick={btn.callback} key={btn.name}>
                <Image src={home3Img} className='home-img-3'></Image>
                {btn.text}
              </View> 
            )
          })
        }
        </View>

        {/* <AtNoticebar marquee>
          这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏
        </AtNoticebar> */}
      </View>
    )
  }
}
