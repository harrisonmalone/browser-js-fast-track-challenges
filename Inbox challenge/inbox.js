function hasNewMessage() {
  // TODO: return true with a probability of 20%.
  return Math.floor((Math.random() * 100)) > 80
}

function newMessage() {
  // TODO: return a random message as an object with two keys, subject and sender
  const senders = ['Harrison Malone', 'Damp Lowlands', 'Matt McKenzie']
  const subjects = ['Learn js', 'Binary is great!', 'Yield']
  const randomIndex = Math.floor(Math.random() * 3)
  const message = {
    subject: subjects[randomIndex],
    sender: senders[randomIndex]
  }
  return message
}

function appendMessageToDom(message) {
  // TODO: append the given message to the DOM (as a new row of `#inbox`)
  const inbox = document.querySelector('#inbox')
  const emailWrapper = document.createElement('div')
  emailWrapper.classList.add('row', 'message', 'unread')
  inbox.prepend(emailWrapper)
  const email = `
    <div class="col-xs-3 col-xs-9">${message.sender}</div>
    <div class="col-xs-3 col-xs-9">${message.subject}</div>
  `
  emailWrapper.insertAdjacentHTML('beforeend', email)
}
const message = newMessage() 
appendMessageToDom(message)
updateCounter()

function updateCounter() {
  let count = 0
  const counter = document.querySelector('#count')
  const inbox = document.querySelector('#inbox')
  const inboxArr = Array.from(inbox.children)
  inboxArr.forEach(function(div) {
    if (div.classList.toString() === 'row message unread') {
      count += 1
    }
  })
  counter.innerText = `(${count})`
}

updateCounter()

function refresh() {
  // TODO: Implement the global refresh logic. If there is a new message,
  //       append it to the DOM. Update the unread counter in title as well.
  if (hasNewMessage())
}

refresh()