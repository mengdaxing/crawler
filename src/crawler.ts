import http from 'http'

export class Crawler {
  go = () => {
    const opt = {
      host: '115.218.121.23',
      port: '9000',
      method: 'POST',
      path: 'http://www.baidu.com',
      headers: {}
    }
    //以下是接受数据的代码
    let body = ''
    const req = http
      .request(opt, function(res) {
        console.log('Got response: ' + res.statusCode)
        res
          .on('data', function(d) {
            body += d
          })
          .on('end', function() {
            console.log(res.headers)
            console.log(body)
          })
      })
      .on('error', function(e) {
        console.log('Got error: ' + e.message)
      })
    req.end()
  }
}
