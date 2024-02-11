async function fetchProfileData(){
    const url = 'https://raw.githubusercontent.com/FrancioXavier/presente-novo/main/data/photos.json';
    const response = await fetch(url)
    const profileData = await response.json();
    return profileData;
}


