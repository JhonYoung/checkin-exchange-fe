import { Component } from 'react'
import { View, Image } from '@tarojs/components'
import Taro from '@tarojs/taro'
import './index.less'
import home2Img from '@/assets/home/home-2.png'
import home1Img from '@/assets/home/home-1.png'
import home3Img from '@/assets/home/home-3.png'
import CeModal from '@/components/modal'


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
    const text = "恭喜你获得：皮肤碎片1个";
    const imgSrc = "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic.netbian.com%2Fuploads%2Fallimg%2F210826%2F215714-16299862349221.jpg&refer=http%3A%2F%2Fpic.netbian.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1645022658&t=0312ffd1eabeea1f89d29525296d2c55"

    return (
      <View className='home'>
        {
          showModal ? (
            <CeModal btns={btns} text={text} imgSrc={imgSrc}></CeModal>
          ) : (
            <>
              <Image src={home1Img} className='home-img-1'></Image>
                <Image src={home2Img} className='home-img-2'></Image>
                
                <View className='get-btn' onClick={() => this.getImg()}>
                  <Image src={home3Img} className='home-img-3'></Image>
                  立即领取
                </View>
            </>
          )
        }
      </View>
    )
  }
}
