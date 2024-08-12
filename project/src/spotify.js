
const clientId = 'f0898e3e60f74120bd99b3a0421b2140'; 
const redirectUri = 'http://localhost:3000/'; 
const scopes = [
  'user-top-read',
  'playlist-read-private',
  'playlist-modify-public',
  'playlist-modify-private'
];

export function authorize() {
  const authUrl = `https://accounts.spotify.com/authorize?response_type=token&client_id=${clientId}&scope=${scopes.join('%20')}&redirect_uri=${encodeURIComponent(redirectUri)}`;
  window.location.href = authUrl;
}

export function getAccessToken() {
  const hash = window.location.hash;
  let accessToken = null;
  if (hash) {
    const params = new URLSearchParams(hash.substring(1));
    accessToken = params.get('access_token');
  }
  return accessToken;
}

export async function fetchWebApi(endpoint, method = 'GET', body) {
  const token = getAccessToken();
  if (!token) return null;

  try {
    const res = await fetch(`https://api.spotify.com/${endpoint}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      method,
      body: JSON.stringify(body),
    });
    if (!res.ok) {
      throw new Error('Network response was not ok');
    }
    return await res.json();
  } catch (error) {
    console.error('Fetch error:', error);
    return null;
  }
}

export async function setTopTracks() {
  return (await fetchWebApi('v1/me/top/tracks?time_range=medium_term&limit=10', 'GET')).items;
}

export async function getRecommendations(seedTracks) {
  return (await fetchWebApi(`v1/recommendations?limit=10&seed_tracks=${seedTracks.join(',')}`, 'GET')).tracks;
}

