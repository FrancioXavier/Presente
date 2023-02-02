async function fetchProfileData(){
    const url = 'https://raw.githubusercontent.com/FrancioXavier/Presente/main/data/photos.json?token=GHSAT0AAAAAAB6IIMOOHHLMEWJ2A6FNWY6GY632IXQ';
    const fetching = await fetch(url);

    return await fetching.json()
}