<template>
  <div>
    <h1>Custom Scrollbar</h1>
    <blockquote>
      Customizes the scrollbar style for the document and elements with scrollable overflow, on WebKit platforms.
    </blockquote>
    <pre>
::-webkit-scrollbar targets the whole scrollbar element.
::-webkit-scrollbar-track targets only the scrollbar track.
::-webkit-scrollbar-thumb targets the scrollbar thumb.
    </pre>
    <div class="custom-scrollbar">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.<br>
        Iure id exercitationem nulla qui repellat laborum vitae, <br>
        molestias tempora velit natus. Quas, assumenda nisi. <br>
        Quisquam enim qui iure, consequatur velit sit?
      </p>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.custom-scrollbar {
  width: 300px;
  height: 120px;
  overflow-y: scroll;
}

.custom-scrollbar::-webkit-scrollbar {
  background: yellowgreen;
  width: 8px;
  border-radius: 10px;
}

.custom-scrollbar::-webkit-scrollbar-track {
  background: bisque;
  border-radius: 10px;
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  background: saddlebrown;
  border-radius: 10px;
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
}

.custom-scrollbar::-webkit-scrollbar-button {
  background: rebeccapurple;
}

.custom-scrollbar::-webkit-scrollbar-track-piece {
  /* background: bisque; */
}

.custom-scrollbar::-webkit-scrollbar-corner {
  /* background: bisque; */
}
</style>
