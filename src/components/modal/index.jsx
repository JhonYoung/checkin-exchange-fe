import { Component } from 'react'
import { View, Text, Image } from '@tarojs/components'
import './index.less'
import home3Img from '@/assets/home/home-3.png'
import modalWrapIcon from '@/assets/components/modal-wrap.png'

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

  componentDidShow () {}

  componentDidHide () {}

  render () {
    const {btns, text, imgSrc} = this.props;
    return (
      <View className='ce-modal'>
        <View className='main-content'>
          <Image src={imgSrc} className='main-img'></Image>
          <Image src={modalWrapIcon} className='main-back'></Image>
          <View className='modal-desc'>
            {text}
          </View>
        </View> 
        <View className="modal-btn-wrap">
          {
            btns.map(btn => {
              return (
                <View className='modal-btn' onClick={btn.callback} key={btn.name}>
                  <Image src={home3Img} className='home-img-3'></Image>
                  {btn.text}
                </View> 
              )
            })
          }
        </View>
      </View>
    )
  }
}
