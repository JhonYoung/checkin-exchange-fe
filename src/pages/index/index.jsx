import { Component } from 'react'
import { View, Text, Image } from '@tarojs/components'
import './index.less'
import home2Img from '@/assets/home/home-2.png'
import home1Img from '@/assets/home/home-1.png'
import home3Img from '@/assets/home/home-3.png'

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

  componentDidHide () { }

  getImg () {
    this.setState({showModal: true});
  }

  render () {
    const {showModal} = this.state;
    console.log('showModal=========>', this.state)

    return (
      <View className='home'>
        <Image src={home1Img} className='home-img-1'></Image>
        <Image src={home2Img} className='home-img-2'></Image>
        
        <View className='get-btn' onClick={() => this.getImg()}>
          <Image src={home3Img} className='home-img-3'></Image>
          立即领取
        </View>

        {
          showModal ? (
            <View>
              hello
            </View>
          ) : null
        }
      </View>
    )
  }
}
