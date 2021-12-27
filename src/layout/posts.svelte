<script>
import Post from '../layout/post.svelte'
import { posts, clear } from '../stores.js';

$: count = $posts.length
$: requests = $posts

</script>

<div class="overflow-scroll w-full">
  <div class="pb-2 pt-2 flex flex-row border-b justify-between overflow-hidden">
    <span class="font-bold border border-teal-100 text-purple-800 font-bold py-2 px-4 rounded-full">Received
      {count}</span>
    <button class="mr-4 text-red-500 text-sm" on:click={clear}>Clear List</button>
    <textarea id="copy-area" class="absolute" readonly style="right: 2000px;"></textarea>
  </div>
  {#each requests as post}
      <Post post={post} />
  {/each}
</div>
