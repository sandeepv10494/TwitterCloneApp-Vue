<template>
   <form method="GET">
    <div class="px-4 pt-4 ">   
    <div class="relative text-gray-600 focus-within:text-gray-400">
      <span class="absolute inset-y-0 left-0 flex items-center pl-2 ">
        <button type="submit" class="p-1 focus:outline-none focus:shadow-outline">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" class="w-6 h-6"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </button>
      </span>
      <input type="search" name="q" class="min-w-full h-12 rounded-full py-2 text-sm text-white bg-gray-900 rounded-md pl-10 focus:outline-none focus:bg-white focus:text-gray-900" placeholder="Search Twitter" autocomplete="off">
    </div>
    </div>
  </form>
</template>