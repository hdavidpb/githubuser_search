<template>
  <div v-if="$store.state.userData" class="card_container">
    <div class="section_container">
      <div class="left_side_container">
        <div class="image_profil_container">
          <img :src="$store.state.userData.avatar_url" alt="" />
        </div>
      </div>
      <div class="right_side_container">
        <div class="info_data_container">
          <div class="username_container">
            <h6>{{ $store.state.userData.login }}</h6>

            <p>
              {{ $store.state.userData.bio || "this profile not have bio" }}
            </p>
          </div>
        </div>
        <div class="info_data_container">
          <p>
            {{
              `Joined ${$dayjs($store.state.userData.created_at).format(
                "DD/MM/YYYY"
              )}`
            }}
          </p>
        </div>
      </div>
    </div>
    <div class="section_container">
      <div class="left_side_container"></div>
      <div class="right_side_container">
        <div class="card_followers_container">
          <div class="follow_container">
            <p>Repos</p>
            <h6>{{ $store.state.userData.public_repos }}</h6>
          </div>
          <div class="follow_container">
            <p>Followers</p>
            <h6>{{ $store.state.userData.followers }}</h6>
          </div>
          <div class="follow_container">
            <p>Following</p>
            <h6>{{ $store.state.userData.following }}</h6>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-else>
    <h1 class="not_user">not user yet...</h1>
  </div>
</template>

<script>
export default {};
</script>

<style>
.not_user {
  color: #ffffff;
}
.card_container {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  border-radius: 6px;
  background: rgb(5, 10, 80);
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.151);
  padding: 10px;
}
.section_container {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}
.left_side_container {
  width: 145px;
  height: 93px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
}
.image_profil_container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
}
.image_profil_container img {
  width: 80px;
  height: 80px;
  border-radius: 50%;
}
.right_side_container {
  flex: 1;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  gap: 1rem;
}
.info_data_container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
}
.username_container {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}
.username_container h6 {
  font-size: 18px;
  width: 100%;
  text-align: left;
}
.username_container span {
  font-size: 14px;
  width: 100%;
  text-align: left;
}
p {
  width: 100%;
  font-size: 14px;
  text-align: left;
  color: rgb(153, 147, 147);
}
.card_followers_container {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  gap: 1rem;
  padding: 6px;
  background: rgba(5, 5, 5, 0.521);
  grid-column: 1/3;
  border-radius: 6px;
}
.follow_container {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.follow_container p {
  font-size: 10px;
  color: azure;
  width: 100%;
  text-align: left;
}
.follow_container h6 {
  font-size: 16px;
  color: #ffffff;
  width: 100%;
  text-align: left;
  font-weight: bold;
}
</style>
