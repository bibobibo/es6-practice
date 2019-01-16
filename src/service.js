const getAvatar = function (url, success, error) {
  console.log('send request to url:', url)

  setTimeout(function () {
    const random = Math.random()
    const avatarLink = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIpbMm03sA6nm5sj597PrJR0V6L4QvEsvKY8Q3i3lBehtyKDA2YQ'

    if (random < 0.005) {
      error('error message from getAvatar')
    } else {
      success(avatarLink)
    }
  }, 1000)
}

const getMembers = function (url, success, error) {
  console.log('send request to url:', url)
  
  setTimeout(function () {
    const random = Math.random()
    const members = [
      {
        name: '王大锤',
        relationship: '亲属',
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
      },
      {
        name: '范伟',
        relationship: '同事',
        status: '已加入'
      },
      {
        name: '王二锤',
        relationship: '亲属',
        status: '已加入'
      },
      {
        name: '赵本山',
        relationship: '同事',
        status: '已加入'
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