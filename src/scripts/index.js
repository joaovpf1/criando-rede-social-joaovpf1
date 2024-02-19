import {suggestUsers, posts} from './database.js';

function renderSuggestUsers(array){
    const divContainer = document.querySelector('.suggest__container');
    divContainer.innerHTML="";

    for(let i =0; i<array.length; i++){
        const suggest = array[i];
         createSuggestCard(suggest, divContainer);
    }
}

function createSuggestCard(suggest, divContainer){
    const divWraper = document.createElement('div');
    const divProfileGroup = document.createElement('div');
    const imgProfile = document.createElement('img');
    const divProfile = document.createElement('div');
    const h2Profile = document.createElement('h2');
    const pProfile = document.createElement('p');
    const bttnProfile = document.createElement('button');

    divWraper.classList.add('div-wraper')
    divProfileGroup.classList.add('div-profile')
    imgProfile.classList.add('profile-pic');
    divProfile.classList.add('text-group');
    h2Profile.classList.add('title-profile');
    pProfile.classList.add('text-profile');
    bttnProfile.classList.add('bttn-profile');

    imgProfile.src= suggest.img;
    imgProfile.dataset.profileId = suggest.id;
    h2Profile.innerText = suggest.user;
    pProfile.innerText = suggest.stack;
    bttnProfile.innerText = 'Seguir' //////////////////////////////////////////////////

    divWraper.append(divProfileGroup, divProfile, bttnProfile)
    divProfileGroup.append(imgProfile, divProfile)
    divProfile.append(h2Profile, pProfile);
    divContainer.append(divWraper);
}

renderSuggestUsers(suggestUsers);


function renderPost (array){
    const divContainerPost = document.querySelector('.posts__content');
    divContainerPost.innerHTML="";

    for(let i =0; i<array.length; i++){
        const suggest = array[i];
        createPost(suggest, divContainerPost);
    }
    
}

function createPost(obj, divContainerPost){
    const modalController = document.querySelector('.modal__container');
    //profile
    const boxContainer = document.createElement('div');
    const divWraper = document.createElement('div');
    const divProfileGroup = document.createElement('div');
    const imgProfile = document.createElement('img');
    const divProfile = document.createElement('div');
    const h2Profile = document.createElement('h2');
    const pProfile = document.createElement('p');
    
    //post texts
    const divText = document.createElement('div');
    const titlePost = document.createElement('h2');
    const pText = document.createElement('p');
    //buttons
    const divBttn = document.createElement('div');
    const openBttn = document.createElement('button');
    const likeBttn = document.createElement('button');
    const pLike = document.createElement('p');

    //classlist profile
    boxContainer.classList.add('div-post__container')
    divWraper.classList.add('div-wraper')
    divProfileGroup.classList.add('div-profile')
    imgProfile.classList.add('profile-pic');
    divProfile.classList.add('text-group');
    h2Profile.classList.add('title-profile');
    pProfile.classList.add('text-profile');
    //classlist texts
    divText.classList.add('div__post-text');
    titlePost.classList.add('title-post');
    pText.classList.add('post-text');
    //classList bttn
    divBttn.classList.add('posts__bttn')
    openBttn.classList.add('modal__bttn');
    likeBttn.classList.add('like-bttn')
    pLike.classList.add('like-number')
    
    //Content profile
    imgProfile.src= obj.img;
    imgProfile.dataset.profileId = obj.id;
    h2Profile.innerText = obj.user;
    pProfile.innerText = obj.stack;
    //content texts
    titlePost.innerText = obj.title;
    pText.innerText = obj.text;
    //content bttn
    openBttn.innerText = 'Abrir Post';
    // likeBttn.innerText = 'x'
    pLike.innerText = obj.likes;

    boxContainer.append(divWraper, divText, divBttn);
    divWraper.append(divProfileGroup, divProfile);
    divProfileGroup.append(imgProfile, divProfile);
    divProfile.append(h2Profile, pProfile);
    divText.append(titlePost, pText);
    divBttn.append(openBttn, likeBttn, pLike);

    divContainerPost.append(boxContainer);
    openBttn.addEventListener('click', function(e){
        e.preventDefault()
        
        renderModalPosts(obj);
        modalController.showModal() 
        closeModal()
    })
}

renderPost(posts);


function renderModalPosts(obj){
    const modalContainer = document.querySelector('.modal__container');
    modalContainer.innerHTML="";

    createModalPosts(obj, modalContainer);
}

function createModalPosts(obj, modalContainer){
    //profile
    const divWraper = document.createElement('div');
    const divProfileGroup = document.createElement('div');
    const imgProfile = document.createElement('img');
    const divProfile = document.createElement('div');
    const h2Profile = document.createElement('h2');
    const pProfile = document.createElement('p');
    //post texts
    const divText = document.createElement('div');
    const titlePost = document.createElement('h2');
    const pText = document.createElement('p');
    //buttons
    const closeBttn = document.createElement('button');

    //classlist profile
    divWraper.classList.add('div-wraper')
    divProfileGroup.classList.add('div-profile')
    imgProfile.classList.add('profile-pic');
    divProfile.classList.add('text-group');
    h2Profile.classList.add('title-profile');
    pProfile.classList.add('text-profile');

    //classlist texts
    divText.classList.add('modal-div-text');
    titlePost.classList.add('modal-title');
    pText.classList.add('modal-text');
    //classList bttn
    closeBttn.classList.add('close-bttn');

    
    //Content profile
    imgProfile.src= obj.img;
    imgProfile.dataset.profileId = obj.id;
    h2Profile.innerText = obj.user;
    pProfile.innerText = obj.stack;
    //content texts
    titlePost.innerText = obj.title;
    pText.innerText = obj.text;
    //content bttn
    closeBttn.innerText = 'X';
    
    divWraper.append(divProfileGroup, divProfile)
    divProfileGroup.append(imgProfile, divProfile)
    divProfile.append(h2Profile, pProfile);
    divText.append(titlePost, pText);
    modalContainer.append(divWraper, divText, closeBttn);

    closeBttn.addEventListener('click', function(){
        modalContainer.close()
    })
}


function changeToFollowed(){
    const followBttn =document.querySelectorAll('.bttn-profile');

    for(let i =0; i<followBttn.length;i++){
        followBttn[i].addEventListener('click', function(){
            if(followBttn[i].classList == 'bttn-profile'){
                followBttn[i].classList = 'bttn-profile--active';
                followBttn[i].innerText = 'Seguindo';
            }else{
                followBttn[i].classList = 'bttn-profile';
                followBttn[i].innerText = 'Seguir';
            }
        })
    }
}

changeToFollowed()

function turnLikeBttnRed(){
    const likeBttn = document.querySelectorAll('.like-bttn'); 
    for(let i =0; i<likeBttn.length;i++){
        likeBttn[i].addEventListener('click', function(){
            if(likeBttn[i].classList == 'like-bttn'){
                likeBttn[i].classList = 'like-bttn-active';
            }else{
                likeBttn[i].classList = 'like-bttn';
            }
        })
    }

}
turnLikeBttnRed()