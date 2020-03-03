<template>
  <div>
    <h1>Counter</h1>
    <blockquote>
      Counters are, in essence, variables maintained by CSS whose values may be incremented by CSS rules to track how
      many times they're used.
      <ol>
        <li>You can create a ordered list using any type of HTML.</li>
        <li>
          <code class="language-text">counter-reset</code> Initializes a counter, the value is the name of the counter.
          By default, the counter starts at 0. This property can also be used to change its value to any specific
          number.
        </li>
        <li>
          <code class="language-text">counter-increment</code> Used in element that will be countable. Once
          <code class="language-text">counter-reset</code> initialized, a counter's value can be increased or decreased.
        </li>
        <li>
          <code class="language-text">counter(name, style)</code> Displays the value of a section counter. Generally
          used in a <code class="language-text">content</code> property. This function can receive two parameters, the
          first as the name of the counter and the second one can be <code class="language-text">decimal</code> or
          <code class="language-text">upper-roman</code> (<code class="language-text">decimal</code> by default).
        </li>
        <li>
          <code class="language-text">counters(counter, string, style)</code> Displays the value of a section counter.
          Generally used in a <code class="language-text">content</code> property. This function can receive three
          parameters, the first as the name of the counter, the second one you can include a string which comes after
          the counter and the third one can be <code class="language-text">decimal</code> or
          <code class="language-text">upper-roman</code> (<code class="language-text">decimal</code> by default).
        </li>
        <li>
          A CSS counter can be especially useful for making outlined lists, because a new instance of the counter is
          automatically created in child elements. Using the <code class="language-text">counters()</code> function,
          separating text can be inserted between different levels of nested counters.
        </li>
      </ol>
    </blockquote>
    <pre>
  ul {
    counter-reset: counter-lala;
  }

  li::before {
    counter-increment: counter-lala;
    content: counters(counter-lala, '.') ' ';
  }
      </pre>

    <div class="demo">
      <ul>
        <li>List item</li>
        <li>List item</li>
        <li>
          List item
          <ul>
            <li>List item</li>
            <li>List item</li>
            <li>List item</li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.demo {
  ul {
    counter-reset: counter-lala;
  }

  li::before {
    counter-increment: counter-lala;
    content: counters(counter-lala, '.') ' ';
  }
}
</style>
