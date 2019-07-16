const urlParams = new URLSearchParams(location.hash.slice(1))

if (urlParams.get("access_token")) {
  // We should get below
  // error
  // state
  console.log('Spotify access has been denied' + urlParams.get("erorr"))
} else {
  // We should get below
  //   access_token
  //   token_type
  //   expires_in
  //   state
  if (opener && opener.spotifyApi) opener.spotifyApi.setAccessToken(urlParams.get("access_token"));
  if (opener && opener.onAuth) opener.onAuth()
  // save token to local storage
  localStorage.setItem('token', urlParams.get("access_token"))
}

window.close()