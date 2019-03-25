/*ajax请求模块,返回值：promise对象*/
import axios from "axios"
export default function ajax(url:"",data={},type="GET"){//向外暴露ajax函数
    return new Promise(function (resolve, reject) {//返回promise对象(异步返回的数据是：response.data)，接收函数的函数叫高阶函数
       //执行异步ajax请求
    let promise;
    if (type === 'GET') { // 准 备 url query 参 数 数 据
      let dataStr = '' // 数 据 拼 接 字 符 串
      Object.keys(data).forEach(key => {
        dataStr += key + '=' + data[key] + '&'
      });
      if (dataStr !== '') {
        dataStr = dataStr.substring(0, dataStr.lastIndexOf('&'))
        url = url + '?' + dataStr
      }
      // 发 送 get 请 求
      promise = axios.get(url)
    } else {
      // 发 送 post 请 求
      promise = axios.post(url, data)
    }
      //成功调用resolve(）
      promise.then(function(response){
        resolve(response.data)
      }).catch(function(error){
        reject(error) //失败调用reject（）
      });
    });
  }
