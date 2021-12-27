export async function onRequestPost({request, params }) {

  console.log('Endpoint', params.id)
  console.log('BODY', request.body)

  // Do something with params.id with pusher api

  return new Response(request.body);
}
