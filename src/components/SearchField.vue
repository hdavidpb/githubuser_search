<template>
  <form
    class="search_field_container"
    @submit.prevent="$store.dispatch('searchUser', userValue)"
  >
    <div class="icon_container">
      <i class="fa-solid fa-magnifying-glass"></i>
    </div>
    <div class="input_container">
      <input
        v-model="userValue"
        type="text"
        placeholder="Search GitHub username..."
      />
    </div>
    <div class="button_search_container">
      <button type="submit">Search</button>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      userValue: "",
    };
  },
};
</script>

<style>
.search_field_container {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border-radius: 6px;
  background: rgb(5, 10, 80);
}
.icon_container {
  width: 80px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3px;
  color: rgb(58, 119, 252);
  font-size: 20px;
}
.input_container {
  flex: 1;
  height: 100%;
}
.input_container input {
  width: 100%;
  border: none;
  padding: 8px;
  text-align: left;
  outline: none;
  background: transparent;
  color: #ffffff;
}
input::placeholder {
  color: #ffffff;
}
.button_search_container {
  width: 120px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3px;
}
.button_search_container button {
  border: none;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 13px;
  color: #ffffff;
  background: rgb(58, 119, 252);
  cursor: pointer;
}
</style>
