async function fetchProfileData(){
    const url = 'https://raw.githubusercontent.com/FrancioXavier/Presente/main/data/photos.json';
    const response = await fetch(url)
    const profileData = await response.json();
    return profileData;
}

function updatePhotos(photoData){
    const photo = document.getElementById('photos');
    photo.innerHTML = photoData.content.map(photo =>  `
    <li class="item">
        <div>
            <div class="polaroid"><img src="${photo.image}">
                <div class="caption">${photo.description}</div>
            </div>
        </div>
    </li>
    `).join('');
    
}

(async () => { 

    const photoData = await fetchProfileData();
    updatePhotos(photoData);
})()