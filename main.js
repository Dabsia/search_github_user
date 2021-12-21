let username = document.querySelector('input');
let btn = document.querySelector('button');
let img = document.querySelector('img');
let name = document.querySelector('.username');
let followers = document.querySelector('.followersNumber')
let repos = document.querySelector('.repoNumber')
let following = document.querySelector('.followingNumber')
let bio = document.querySelector('.bio')
let twitterHandle = document.querySelector('.location')
let userlocation = document.querySelector('.handle')
let url = document.querySelector('.url')
let work = document.querySelector('.work');
let ErrorMessage = document.querySelector('.errorMessage')

const searchUser =() => {
    if (username.value === ''){
        ErrorMessage.style.display = 'block'
        setTimeout(e => {
            ErrorMessage.style.display = 'none'
        }, 2000)
    }
    else{
        fetch(`https://api.github.com/users/${username.value}`)
        .then(res => res.json())
        .then(data => {
            name.textContent = data.login
            img.src = data.avatar_url
            followers.textContent = data.followers
            repos.textContent = data.public_repos
            following.textContent = data.following
            url.textContent = data.html_url
            if (data.bio === null){
                bio.textContent = 'This user has no Bio'
            }
            else{
                bio.textContent = data.bio
            }
            if (data.twitter_username === null){
                twitterHandle.textContent = 'Not Available'
            }
            else{
                twitterHandle.textContent = data.twitter_username
            }
            if (data.location === null){
                userlocation.textContent = 'Not Available'
            }
            else{
                userlocation.textContent = data.location
            }
            if (data.company === null){
                work.textContent = 'Not Available'
            }
            else{
                work.textContent = data.location
            }
        })
        .catch(e => console.log(e))
    }
    
} 

btn.addEventListener('click', searchUser)


