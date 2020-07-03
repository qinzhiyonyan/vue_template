export default store => {
  console.log('store初始化了');
  if(localStorage.state) store.replaceState(JSON.parse(localStorage.state))
  store.subscribe((mutation, state) => {
    localStorage.state = JSON.stringify(state)
  })
}
