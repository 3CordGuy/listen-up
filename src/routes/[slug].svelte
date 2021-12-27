<script>
  import Layout from "../layout/main.svelte";
  import Header from "../layout/header.svelte"
  import Posts from "../layout/posts.svelte"

  import { posts } from '../stores.js';
  import { navigating, page } from '$app/stores';
  import { onDestroy } from 'svelte'

  let mainPosts = []
  $: currentEndpoint = `https://heylisten.app/${$page.params.slug}`



  const postUnsubscribe = posts.subscribe(value => mainPosts = value)
  onDestroy(postUnsubscribe)


</script>

<svelte:head>
	<title>Listen Up | {currentEndpoint}</title>
  <meta name="description"
    content="Test your webhooks by using a simple generated endpoint and see your HTTP request come through in realtime." />
</svelte:head>

<Layout>
  <div slot="body" class="w-2/3 bg-gray-100 h-screen flex flex-col items-center p-4" >
        <Header endpoint={currentEndpoint} />
        <Posts />
  </div>
</Layout>
