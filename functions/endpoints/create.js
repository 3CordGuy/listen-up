import {hri} from 'human-readable-ids'

export async function onRequestPost(request) {
  const endpoint = {
    updatedAt: new Date(),
    id: hri.random(),
    received: 0,
  }

  console.log(request)

  return new Response(JSON.stringify(endpoint));
}
