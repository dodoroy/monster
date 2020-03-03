<template>
  <div>
    <h1>Mouse Cursor Gradient Tracking</h1>
    <blockquote>
      A hover effect where the gradient follows the mouse cursor.
      <ul>
        <li>
          <code class="language-text">--x</code> and <code class="language-text">--y</code> are used to track the
          position of the mouse on the button.
        </li>
        <li><code class="language-text">--size</code> is used to keep modify of the gradient's dimensions.</li>
        <li>
          <code class="language-text">background: radial-gradient(circle closest-side, pink, transparent);</code>
          creates the gradient at the correct postion.
        </li>
      </ul>
    </blockquote>
    <pre>
    function handleMouseMove(e) {
      // const x = e.pageX - e.target.offsetLeft
      // const y = e.pageY - e.target.offsetTop

      var rect = e.target.getBoundingClientRect();
      var x = e.clientX - rect.left;
      var y = e.clientY - rect.top;
      e.target.style.setProperty('--x', x + 'px');
      e.target.style.setProperty('--y', y + 'px');
    }
    </pre>

    <button class="mouse-cursor-gradient-tracking">
      <span>Hover me</span>
    </button>

    <button class="mouse-cursor-gradient-tracking btn-red">
      <span>Hover me I'm awesome</span>
    </button>
  </div>
</template>

<script>
export default {
  mounted () {
    var btns = document.getElementsByClassName('mouse-cursor-gradient-tracking')

    for (let i = 0; i < btns.length; i++) {
      const btn = btns.item(i)
      btn.onmousemove = handleMouseMove
    }

    function handleMouseMove (e) {
      // const x = e.pageX - e.target.offsetLeft
      // const y = e.pageY - e.target.offsetTop

      var rect = e.target.getBoundingClientRect()
      var x = e.clientX - rect.left
      var y = e.clientY - rect.top
      e.target.style.setProperty('--x', x + 'px')
      e.target.style.setProperty('--y', y + 'px')
    }
  }
}
</script>

<style lang="scss">
.mouse-cursor-gradient-tracking {
  position: relative;
  padding: 1rem 1.5rem;
  font-size: 1.4rem;
  outline: none;
  background: #7983ff;
  color: #fff;
  cursor: pointer;
  overflow: hidden;
  span {
    /* ？？*/
    position: relative;
    pointer-events: none;
  }

  &::before {
    --size: 0;
    content: '';
    position: absolute;
    left: var(--x);
    top: var(--y);
    width: var(--size);
    height: var(--size);
    transform: translate(-50%, -50%);
    background: radial-gradient(circle closest-side, pink, transparent);
    transition: all 0.2s ease;
  }

  &:hover::before {
    --size: 100px;
  }
}

.btn-red {
  background: #f72359;
  border-radius: 100px;

  &::before {
    background: radial-gradient(circle closest-side, #4405f7, transparent);
  }

  &hover::before {
    --size: 400px;
  }
}
</style>
