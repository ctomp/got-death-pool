<template>
  <div>
    <div id="character-grid">
      <Character
        v-for="(character, key) in characters"
        :key="key"
        :name="key"
      />
    </div>
  </div>
</template>

<script>
import Character from "@/components/Character.vue";
import { mapState } from "vuex";

export default {
  name: "characters",
  components: {
    Character
  },
  data() {
    return {
      selectedCharacter: null
    };
  },
  computed: mapState(["characters"])
};
</script>

<style scoped>
#character-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  grid-gap: 1rem 1rem;
}
</style>
