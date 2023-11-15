const URL = 'https://ws.audioscrobbler.com/2.0/?method=user.gettopartists&user=rj&api_key=447f428bae0306390faf259c7587d390&format=json'

function getMusicData(){
  return fetch(`${URL}`,{
    method: 'GET',
    headers: {
      Accept: 'application/json','Content-Type':'application/json'
    }
  })
  .then(response=> response.json())
  .then(data=>data.topartists.artist)
  .then(artists => artists.map(artist =>{
    return{
      id: artist.mibd,
      name:artist.name,
      image:artist.image[0]['#text']
    }
  }))
}

export {getMusicData}
