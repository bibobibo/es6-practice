var getAvatar = function (url, success, error) {
  console.log('send request to url:', url)

  setTimeout(function () {
    var random = Math.random()
    var avatarLink = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIpbMm03sA6nm5sj597PrJR0V6L4QvEsvKY8Q3i3lBehtyKDA2YQ'

    if (random < 0.005) {
      error('error message from getAvatar')
    } else {
      success(avatarLink)
    }
  }, 1000)
}

var getMembers = function (url, success, error) {
  console.log('send request to url:', url)
  
  setTimeout(function () {
    var random = Math.random()
    var members = [
      {
        name: '王大锤',
        relationship: '哥哥',
        status: '已加入'
      },
      {
        name: '大鹏',
        relationship: '朋友',
        status: '已加入'
      },
      {
        name: '乔杉',
        relationship: '朋友',
        status: '预加入'
      }
    ]
  
    if (random < 0.005) {
      error('error message from getMembers')
    } else {
      success(members)
    }
  }, 2000)
}

export { getAvatar, getMembers }