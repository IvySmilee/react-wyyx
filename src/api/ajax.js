/*ajax请求函数模块
* 返回值是 Promise对象，返回的数据已经进行了处理，response.data
*   不用像之前一样，现在就已经是要获取的数据了，then接收即可。
* */
import axios from 'axios'
const baseUrl='';
//url='http://localhost:8080'
export default function ajax(url='',data={},type='GET'){
  //返回一个新的promise函数
  return new Promise(function (resolve,reject){
    let promise;//初始化promise
    url=baseUrl+url;

    //判断发送请求的方式，传入参数
    if(type==='GET'){//发送get请求
      //query参数拼串
      let paramsStr='';
      Object.keys(data).forEach(key=>{
        paramsStr+=key+'='+data[key]+'&';
      });
      if(paramsStr!==''){
        paramsStr='?'+paramsStr.substring(0,paramsStr.length-1);
        url=url+paramsStr;
      }
      //使用axios发送get请求
      promise=axios.get(url);
    }else{//发送post请求
      promise=axios.post(url,data);
    }

    //promise的回调
    promise.then(res=>{//请求的成功返回
      resolve(res.data);
    })
      .catch(err=>{//请求的失败返回
        reject(err);
      })
  })
}
