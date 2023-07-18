<!-- InterestIcon.svelte -->
<script>
    export let interest;
    export let src;
  </script>

  <img src="{src}" alt="{interest}">

  <style>
    img {
        width: 30px;
    }
  </style>