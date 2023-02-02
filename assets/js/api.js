async function fetchProfileData(){
    const url = 'https://raw.githubusercontent.com/FrancioXavier/Presente/main/data/photos.json';
    const fetching = await fetch(url);

    return await fetching.json()
}