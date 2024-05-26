// Assingment No:40. Album
function makeAlbum(artistName, albumTitle, numOfTracks) {
    const album = {
        artistName: artistName,
        albumTitle: albumTitle
    };
    if (numOfTracks !== undefined) {
        album.numOfTracks = numOfTracks;
    }
    return album;
}
let album1 = makeAlbum('Alka Yagnik', 'Musical Delight');
let album2 = makeAlbum('Arijit Singh', 'Love Dose ');
let album3 = makeAlbum('Shreya Ghoshal', 'Hamari Adhuri Kahani', 6); // with number of tracks
console.log(album1);
console.log(album2);
console.log(album3);
export {};
