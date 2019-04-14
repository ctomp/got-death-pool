<template>
  <div :class="['character-card', `${character.status}`]">
    <div class="image-cropper">
      <img
        class="character-pic"
        :src="character.imageUrl"
        :alt="character.name"
      />
    </div>
    <div class="character-info">
      <p class="name">{{ character.name }}</p>
      <p :class="['status', `${character.status}`]">{{ character.status }}</p>
    </div>
  </div>
</template>

<script>
import { statuses } from "@/Characters.js";
import { mapState } from "vuex";
export default {
  name: "character",
  props: {
    name: String,
    predictedStatus: {
      type: Number,
      default: -1
    }
  },
  computed: mapState({
    character(state) {
      const character = { ...state.characters[this.name] };
      if (this.predictedStatus !== -1) {
        character.status = statuses[this.predictedStatus];
      }

      return character;
    }
  })
};
</script>

<style lang="scss" scoped>
.character-card {
  border: 1px solid #1e2749;
  border-radius: 10px;
  color: #fafaff;
  display: flex;
  padding: 5px;

  &.alive {
    background-color: #c4d6b0;
    color: green;
  }

  &.dead {
    background-color: #db5461;
  }

  &.wight {
    background-color: #062f4f;
  }
}
.image-cropper {
  border: 1px solid #1e2749;
  border-radius: 50%;
  flex: 0 0 auto;
  height: 200px;
  overflow: hidden;
  width: 200px;
}
.character-pic {
  display: inline;
  height: 100%;
  margin: 0 auto;
  margin-left: -25%;
  width: auto;
}
.character-info {
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  justify-content: space-evenly;
  text-align: center;
}
.name {
  font-size: 1.4em;
  font-weight: bold;
}
.status {
  font-size: 1.1em;
  text-transform: capitalize;

  &.alive::after {
    content: "!";
  }
  &.dead::after {
    content: " :(";
  }
}
</style>
