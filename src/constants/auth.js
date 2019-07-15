export const CLIENT_ID = '71d3f41f6bfe497e8033de5677ca0058';
export const REDIRECT_URI= `${window.location.protocol}//${window.location.host}/callback`;

export const SCOPES = [
  'user-read-private',
  'user-read-email',
  'user-library-read',
  'playlist-read-private',
  'user-read-recently-played',
  'user-read-currently-playing']
export const STATE = 'state-attempt-musyc-auth'