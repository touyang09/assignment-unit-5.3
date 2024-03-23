console.log('***** Music Collection *****')
// Safe Zone -- Write code below this line
//- Create an empty array named `myCollection`.

const myCollection = [ ]; 

// Create a function named `addToCollection`
function addToCollection(collection, title, artist, yearPublished) {
    //Create a new object having the above properties.
    let album = { 
      title: title,
      artist: artist,
      yearPublished: yearPublished,
    };
    // Add the new object to the end of the `collection` array.
    collection.push(album);

    //return newly created object 
    return album;
}

// Use and Test the `addToCollection` function:
// Add 6 albums to the `myCollection` array. Aim to have a mix of both same and different artists and published years. 
// (Feel free to share your musical interests, or make stuff up. Totally fine either way.)
// console.log each album as added using the function's returned value.
// After all are added, console.log the `myCollection` array.
console.log('Adding Album 1:', addToCollection(myCollection, 'The Chronic', 'Dr. Dre', 1992));
console.log('Adding Album 2:', addToCollection(myCollection, 'The Chronic II', 'Dr. Dre', 2001));
console.log('Adding Album 3:', addToCollection(myCollection, 'Straight Out of Compton', 'NWA', 1988));
console.log('Adding Album 4:', addToCollection(myCollection, 'Fallen Embers', 'Illenium', 2021));
console.log('Adding Album 5:', addToCollection(myCollection, 'Hit Collections', 'Stevie B', 2014));
console.log('Adding Album 6:', addToCollection(myCollection, 'Greatest Hits', 'DJ Tou Yang', 2024));


// Create a function named `showCollection`. This function should:
// Take in a `collection` parameter. (This allows it to be reused to show any array of album objects.)
function showCollection(collection) {
  // Loop through the `collection` and `console.log` each album's information formatted **within a single string**, 
  // like: `TITLE by ARTIST, published in YEARPUBLISHED`.
  for (let album of collection) {
    console.log(`${album.title} by ${album.artist}, published in ${album.yearPublished}`);
  }

}





// PLEASE DO NOT MODIFY THIS. Just leave it down here at the bottom. Think of it
// as a lil' chunk of friendly code that you don't need to understand right now.
// (It's used for automated testing.)
try {
  module.exports = {
    myCollection: typeof myCollection !== 'undefined' ? myCollection : undefined,
    addToCollection: typeof addToCollection !== 'undefined' ? addToCollection : undefined,
    showCollection: typeof showCollection !== 'undefined' ? showCollection : undefined,
    findByArtist: typeof findByArtist !== 'undefined' ? findByArtist : undefined,
    search: typeof search !== 'undefined' ? search : undefined,
  }
} catch (e) {
  // Do nothing
}
