

function updatePhotos(photoData){
    const photo = document.getElementById('photos');
    photo.innerHTML = photoData.photo.map(photo => {
        `
        ${photo}
        `
    });
    
}

(async () => { 

    const photoData = await fetchProfileData();
    updatePhotos(photoData)
})()

{/* <li class="item">
          <div>
            <div class="polaroid"><img src="${photo.image}">
              <div class="caption">${photo.description}</div>
            </div>
          </div>
        </li> */}