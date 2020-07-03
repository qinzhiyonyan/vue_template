export const getAppName = () => {
  return new Promise((resolve, reject) => {
    const err = null
    setTimeout( ()=> {
      if(!err) resolve({code:200, info: {appName:'aaa'}})
      else reject(err)
    }, 1000)
  })
}
