const sendBtn = document.querySelector('#sendBtn');
const messageIn = document.querySelector('#messageIn');
const messageOut = document.querySelector('#messageOut');
const bodyBcg = document.querySelector('body')

sendBtn.addEventListener('click', sendMsg)

function sendMsg(){
    let content = messageIn.value;
    //console.log(content);
    if(content === ''){
        bodyBcg.style.backgroundColor = '#f3c9c9'
        alert('You did not enter a message.')
    }
    else{
        messageOut.innerHTML = content;
        bodyBcg.style.backgroundColor = 'gray'
    }
    
}