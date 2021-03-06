<template>
  <div>
    <h1>TodoMVC</h1>
    <blockquote>
      his is a fully spec-compliant TodoMVC implementation in under 120 effective lines of
      JavaScript (excluding comments and blank lines).
    </blockquote>

    <section class="todoapp">
      <h1>todos</h1>
      <header class="header">
        <input
          v-model="newTodo"
          class="new-todo"
          autofocus
          autocomplete="off"
          placeholder="What needs to be done?"
          @keyup.enter="addTodo"
        >
      </header>
      <section
        v-show="todos.length"
        v-cloak
        class="main"
      >
        <input
          id="toggle-all"
          v-model="allDone"
          class="toggle-all"
          type="checkbox"
        >
        <label for="toggle-all" />
        <ul class="todo-list">
          <li
            v-for="todo in filteredTodos"
            :key="todo.id"
            class="todo"
            :class="{ completed: todo.completed, editing: todo == editedTodo }"
          >
            <div class="view">
              <input
                v-model="todo.completed"
                class="toggle"
                type="checkbox"
              >
              <label @dblclick="editTodo(todo)">{{ todo.title }}</label>
              <button
                class="destroy"
                @click="removeTodo(todo)"
              />
            </div>
            <input
              v-model="todo.title"
              v-todo-focus="todo == editedTodo"
              class="edit"
              type="text"
              @blur="doneEdit(todo)"
              @keyup.enter="doneEdit(todo)"
              @keyup.esc="cancelEdit(todo)"
            >
          </li>
        </ul>
      </section>
      <footer
        v-show="todos.length"
        v-cloak
        class="footer"
      >
        <span class="todo-count">
          <strong>{{ remaining }}</strong> {{ remaining | pluralize }} left
        </span>
        <ul class="filters">
          <li>
            <a
              href="#/all"
              :class="{ selected: visibility == 'all' }"
            >All</a>
          </li>
          <li>
            <a
              href="#/active"
              :class="{ selected: visibility == 'active' }"
            >Active</a>
          </li>
          <li>
            <a
              href="#/completed"
              :class="{ selected: visibility == 'completed' }"
            >Completed</a>
          </li>
        </ul>
        <button
          v-show="todos.length > remaining"
          class="clear-completed"
          @click="removeCompleted"
        >
          Clear completed
        </button>
      </footer>
    </section>

    <footer class="info">
      <p>Double-click to edit a todo</p>
      <p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
    </footer>
  </div>
</template>
<script>
// Full spec-compliant TodoMVC with localStorage persistence
// and hash-based routing in ~120 effective lines of JavaScript.

// localStorage persistence
var STORAGE_KEY = 'todos-vuejs'
var todoStorage = {
  fetch: function () {
    var todos = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
    todos.forEach(function (todo, index) {
      todo.id = index
    })
    todoStorage.uid = todos.length
    return todos
  },
  save: function (todos) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
  }
}

// visibility filters
const filters = {
  all: function (todos) {
    return todos
  },
  active: function (todos) {
    return todos.filter(function (todo) {
      return !todo.completed
    })
  },
  completed: function (todos) {
    return todos.filter(function (todo) {
      return todo.completed
    })
  }
}

export default {

  filters: {
    pluralize: function (n) {
      return n === 1 ? 'item' : 'items'
    }
  },

  // a custom directive to wait for the DOM to be updated
  // before focusing on the input field.
  // http://vuejs.org/guide/custom-directive.html
  directives: {
    'todo-focus': function (el, binding) {
      if (binding.value) {
        el.focus()
      }
    }
  },
  // app initial state
  data () {
    return {
      todos: todoStorage.fetch(),
      newTodo: '',
      editedTodo: null,
      visibility: 'all'
    }
  },

  // computed properties
  // http://vuejs.org/guide/computed.html
  computed: {
    filteredTodos: function () {
      return filters[this.visibility](this.todos)
    },
    remaining: function () {
      return filters.active(this.todos).length
    },
    allDone: {
      get: function () {
        return this.remaining === 0
      },
      set: function (value) {
        this.todos.forEach(function (todo) {
          todo.completed = value
        })
      }
    }
  },

  // watch todos change for localStorage persistence
  watch: {
    todos: {
      handler: function (todos) {
        todoStorage.save(todos)
      },
      deep: true
    }
  },
  created () {
    // handle routing
    window.addEventListener('hashchange', this.onHashChange)
    this.onHashChange()
  },
  // methods that implement data logic.
  // note there's no DOM manipulation here at all.
  methods: {
    addTodo: function () {
      var value = this.newTodo && this.newTodo.trim()
      if (!value) {
        return
      }
      this.todos.push({
        id: todoStorage.uid++,
        title: value,
        completed: false
      })
      this.newTodo = ''
    },

    removeTodo: function (todo) {
      this.todos.splice(this.todos.indexOf(todo), 1)
    },

    editTodo: function (todo) {
      this.beforeEditCache = todo.title
      this.editedTodo = todo
    },

    doneEdit: function (todo) {
      if (!this.editedTodo) {
        return
      }
      this.editedTodo = null
      todo.title = todo.title.trim()
      if (!todo.title) {
        this.removeTodo(todo)
      }
    },

    cancelEdit: function (todo) {
      this.editedTodo = null
      todo.title = this.beforeEditCache
    },

    removeCompleted: function () {
      this.todos = filters.active(this.todos)
    },

    onHashChange () {
      var visibility = window.location.hash.replace(/#\/?/, '')

      if (filters[visibility]) {
        this.visibility = visibility
      } else {
        window.location.hash = ''
        this.visibility = 'all'
      }
    }
  }
}
</script>
<style lang="scss" scoped>
@import './style.scss';
[v-cloak] {
  display: none;
}
</style>
