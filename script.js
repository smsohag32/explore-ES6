document.getElementById('btn').addEventListener('click', function(){
    const friends = document.getElementsByClassName('friends');
    for (const friend of friends){
        friend.style.backgroundColor = 'blue';
    }
});


document.getElementById('center-btn').addEventListener('click', function(){
    const thirdElement = document.getElementById('third');
    thirdElement.style.textAlign = 'center';
})

document.getElementById('add').addEventListener('click', function(){
    const container = document.getElementById('allFriends');
    const friend = document.createElement('div');
    friend.innerHTML = `
    <h3 class = "friend-name"> friends 6 </h3>
    <p> lorem 3 </p>
    `
    friend.classList.add('friends')
    container.appendChild(friend);
    console.log('hello')
})