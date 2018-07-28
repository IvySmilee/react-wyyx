import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
import {getCaptcha} from '../../redux/actions'

// import pic from './images/search.png'
import './Login.less'
import Header from '../../components/Header/Header'

class Login extends Component {
  state={
    errShow:false,
    phoneL:0,
    timeOut:0,
    click:true,
    cap:'',
    isPhone:false
  };
  change=(e)=>{
    // console.log(e.target.value);
    let val=e.target.value;
    let show=false;
    if(!val){
      //如果没有输入手机号，不显示错误
      show = false;
      this.setState({
        errShow:show,
      })
    }else{ //如果有输入手机号进入判断
      if(/[a-zA-Z]+/.test(val) || !/^[1]/.test(val)){
        //如果输入的包含字母报错
        console.log(2);
        show = true;
        this.setState({
          errShow:show,
        })
      }else {
        //若果没有字母，正则验证手机号，确定是否显示错误
        console.log(3);
        show = !/^[1][3,4,5,7,8][0-9]{9}$/.test(val);
        this.setState({
          errShow:show,
          isPhone:!show
        })
      }
    }
  };
  reqCaptcha=()=>{
    // console.log(this);
    // console.log(0);
    // console.log(this.state.click,this.state.timeOut === 0 ,this.state.isPhone);
    if(this.state.click && this.state.timeOut===0 && this.state.isPhone){
      clearInterval(this.time2);
      this.setState({
        timeOut:10,
        click:false
      });
      //延时发送请求
      setTimeout(()=>{
        this.props.getCaptcha();
        this.setState({
          cap:this.props.captcha
        });
      },Math.floor((Math.random()*6+4)*1000));
      let time2=setInterval(()=>{
        this.refs.btn.innerHTML=`已发送${this.state.timeOut}s`;
        this.state.timeOut--;
        if(this.state.timeOut<0){
          this.refs.btn.innerHTML=`获取验证码`;
          this.setState({
            timeOut:0,
            click:true,
          });
          clearInterval(time2);
          return
        }
      },1000);
    }
  };
  login=()=>{
    if(this.state.cap){
      this.props.history.replace('/app/profile')
    }
  };
  componentWillUnmount(){
    clearInterval();
    clearTimeout()
  }
  render() {
    // console.log('render',this.state.errShow)
    const captcha=this.props.captcha;
    // console.log(captcha);
    return (
      <div className="phone-login">
        <Header/>
        <div className="pl-content">
          <div className="logo">
            <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt=""/>
          </div>
          <form className="login-form" autoComplete={'off'}>
            {/*错误提示*/}
            {
              this.state.errShow? <div className="err">请输入正确的手机号</div> : ''
            }
            <div className="input-wrap">
              <label  className="label" htmlFor={'tel'}>请输入手机号</label>
              <input className="txt" id="tel" type="text" placeholder="请输入手机号" maxLength={11}
                     onChange={(e)=>this.change(e)}/>
            </div>
            <div className="captcha-wrap">
              <div className="slide-wrap">
                <div className="img-wrap">
                  <img src='https://captcha.reg.163.com/v2/images/slider.png' alt=""/>
                </div>
                <div className="slide-bg">按住滑块，拖动完成上方拼图</div>
              </div>
            </div>
            <div className="input-wrap">
              <label className="label">请输入短信验证码</label>
              <input className="txt mima" id="text" type="text" placeholder="请输入短信验证码" defaultValue={captcha}/>
                <span className="captcha" onClick={this.reqCaptcha} ref="btn">
                  获取验证码
                </span>
            </div>
            <div className="input-wrap for-help">
              <a className="help" href="">遇到问题？</a>
              <a className="other-login" href="">使用密码验证登录</a>
            </div>
            <div className="input-wrap login-btn" onClick={this.login}>登录</div>
          </form>
          <div className="others">其他登录方式</div>
          <div className="register">
            <span>注册账号</span>
            <i/>
          </div>
        </div>
      </div>

  )
  }
}

export default connect(
  state=>({captcha:state.captcha}), //接收reducer里面的函数的函数返回值
  {getCaptcha} //接收异步action函数
)(Login)