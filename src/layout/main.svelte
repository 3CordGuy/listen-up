<script>
import { createNewEndpoint } from "../stores"
</script>

<div class="flex">
  <div class="w-full sm:w-1/3 bg-indigo-900 md:h-screen flex flex-col border-r">
    <div class="w-full flex-grow flex flex-col justify-end text-white text-center">
      <div>
        <h1 class="font-bold text-5xl">
          <i class="fas fa-headphones"></i>&nbsp;Listen Up
        </h1>
        <h2 class="font-thin text-2xl">Super Simple Webhook Testing</h2>
      </div>

      <div class="mt-4" v-if="!showListener">
        <button
          on:click={createNewEndpoint}
          class="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
          >Create New Hook
          Endpoint
        </button>
      </div>
    </div>
    <div class="w-full flex justify-center flex-grow text-white text-center font-hairline">
      <div class="footer flex flex-row content-center self-end pb-4">
        <a class="mr-2" href="//github.com/3Cordguy/listen-up">
          <span>
            <i class="fab fa-2x fa-github-square"></i>
          </span>
        </a>
        <a class="mr-2" href="//www.twitter.com/3CordGuy">
          <span>
            <i class="fab fa-2x fa-twitter"></i>
          </span>
        </a>
        <div>
          Listen Up &copy; 2021 Josh Weaver
        </div>
      </div>
    </div>
  </div>
  <slot name="body"></slot>
</div>

<style>
	/* styles go here */
</style>
