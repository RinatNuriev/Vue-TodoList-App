<template>
  <div class="wrapper-todo">
    <div class="title has-text-centered">My Todo List</div>

    <form @submit.prevent="addTodo">
      <div class="field is-grouped mb-5">
        <p class="control is-expanded">
          <input class="input" v-model="todoItem" type="text" placeholder="Add a todo">
        </p>
        <p class="control">
          <button :disabled="!todoItem" class="button is-info">
            Add
          </button>
        </p>
      </div>
    </form>

    <div class="card mb-3" v-for="i in todos" :key="i.id" :class="{ 'has-background-success-light': i.done }">
      <div class="card-content">
        <div class="content">
          <div class="columns is-mobile is-vcentered">
            <div class="column" :class="{ 'has-text-success line-through': i.done }">{{ i.content }}</div>
            <div class="column is-5 has-text-right">
              <button class="button is-light" :class="i.done ? 'is-success' : 'is-lighth'"
                @click="toggleDone(i.id)">&check;</button>
              <button class="button is-danger ml-1" @click="removeTodo(i.id)">&cross;</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { db } from './firebase/index.js'
import { collection, onSnapshot, addDoc, deleteDoc, doc, updateDoc, query, orderBy } from "firebase/firestore";

const todoItem = ref('')
const todos = ref([])

const todoCollectionRef = collection(db, "Todos")
const todoCollectionQuery = query(todoCollectionRef, orderBy("date", "desc"));

const addTodo = async () => {
  const newTodo = {
    content: todoItem.value,
    done: false,
    date: Date.now()
  }
  const docRef = await addDoc(todoCollectionRef, newTodo);
  console.log("Document written with ID: ", docRef.id);
  todoItem.value = ''
}

const removeTodo = async (id) => {
  await deleteDoc(doc(todoCollectionRef, id));
}

const toggleDone = (id) => {
  const toggleDone = doc(todoCollectionRef, id);
  todos.value.forEach(elem => {
    if (elem.id === id) {
      updateDoc(toggleDone, {
        done: !elem.done
      });
    }
  })
}

onMounted(() => {
  onSnapshot(todoCollectionQuery, (querySnapshot) => {
    const fbTodos = [];
    querySnapshot.forEach((doc) => {
      const todo = {
        id: doc.id,
        content: doc.data().content,
        done: doc.data().done
      }
      fbTodos.push(todo)
    });
    todos.value = fbTodos
  });
})

</script>

<style>
@import 'bulma/css/bulma.min.css';

.wrapper-todo {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
}

.line-through {
  text-decoration: line-through;
}
</style>