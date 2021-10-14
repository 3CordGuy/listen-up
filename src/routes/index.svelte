<script>
  import Layout from "../layout/main.svelte";
</script>

<svelte:head>
	<title>Listen Up | Super Simple Webhook Testing</title>
  <meta name="description"
    content="Test your webhooks by using a simple generated endpoint and see your HTTP request come through in realtime." />
</svelte:head>

<Layout>

  <div slot="body" class="w-2/3 bg-gray-100 h-screen flex flex-col p-24 justify-center items-center" >
    <div class="bg-indigo-200 p-4 rounded">
      <h1 class="text-xl font-bold mb-2">How do I use this?</h1>
      <p>Create a webhook endpoint, then make an HTTP <strong>POST</strong> request to it. We will catch the data. <small><em>Don't worry. Your data doesn't persist</em></small>.</p>
      <img class="mt-4" src="./listen-up-screen.png" alt="listen-up realtime webhook tool">
      <h1 class="text-xl font-bold mt-4 mb-2">What is this good for?</h1>
      <p>Listen Up can be a tool for testing if your webhook/web callback or server is sending information properly. <strong>In other words, it catches data you throw at it</strong>. This data is displayed in realtime using websockets and easily visible.</p>
      <p class="mt-4">No need to hunt for data in a database to see if the proper data is coming across.</p>
      <p class="mt-4"><em>Give it a try!</em></p>
    </div>
  <!--/#app-->
</div>
</Layout>