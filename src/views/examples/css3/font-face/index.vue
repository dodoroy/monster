<template>
  <div>
    <!-- article, aside, figure, figcaption, footer, header, hgroup, nav, section, summary -->

    <article>
      <header>
        <h1>How the World Could End</h1>
        <p>Scenarios that spell the end of life as we know it</p>
      </header>

      <div class="Content">
        <h2>Mayan Doomsday</h2>
        <p>
          Skeptics suggest that the Mayan calendar simply rolls to a new
          5,126-year era after 2012, and doesn't actually predict a life-ending
          apocalypse. But given that the long-dead Mayans were wrong about
          virtually everything else, why should we trust them on this?
        </p>
      </div>
    </article>
  </div>
</template>
<script>
export default {

}
</script>
<style lang="scss">
@import url(./font/font.css);
h1,p {
  margin: 0;
}
article {
  font-family: "MetrophobicRegular", Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  max-width: 800px;
  min-width: 400px;

  header {
    background-color: darkkhaki;
    border: 2px gray solid;
    padding: 10px;
    margin: 10px;
    text-align: center;

    border-top-left-radius: 150px 30px;
    border-top-right-radius: 150px 30px;

    box-shadow: 5px 5px 5px gray;

    h1 {
      font-family: "ZeroZeroIsRegular", "Lucida Sans", "Lucida Sans Regular", "Lucida Grande", "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
      color: white;
      font-size: 50px;
    }
    p {
      font-family: "ImpactLabelReversedRegular";
      font-size: 20px;
      font-weight: bold;
    }
  }
  .Content {
    h2 {
      width: 100px;
      font-family: "ImpactLabelRegular";
      font-size: 20px;
      font-weight: normal;
      margin: 25px 0 0 10px;
      transform: rotate(2deg);
    }
  }
}

</style>
