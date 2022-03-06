<template>
  <div class="search_container">
    <search-field />

    <user-profile-card />
  </div>
</template>

<script>
import SearchField from "../components/SearchField.vue";
import UserProfileCard from "../components/UserProfileCard.vue";
export default {
  components: { SearchField, UserProfileCard },
};
</script>

<style>
.search_container {
  width: 520px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
}

@media (max-width: 600px) {
  .search_container {
    width: 95%;
  }
}
</style>
