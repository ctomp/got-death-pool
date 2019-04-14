<template>
  <div>
    <p id="player-name">{{ this.playerName }}</p>
    <Character
      class="pick"
      v-for="(answer, key) in player.answers"
      :key="key"
      :name="key"
      :predictedStatus="answer"
    />
  </div>
</template>

<script>
import Character from "@/components/Character.vue";
import { statuses } from "@/Characters.js";
import { mapState } from "vuex";
export default {
  name: "player-detail",
  components: {
    Character
  },
  props: {
    playerName: String
  },
  data() {
    return {
      statuses
    };
  },
  computed: mapState({
    characters: state => state.characters,
    player(state) {
      return state.players[this.playerName];
    }
  })
};
</script>

<style lang="scss" scoped>
#player-name {
  font-size: 2rem;
  font-weight: bold;
  margin: 0;
  text-align: center;

  &::after {
    content: "'s Picks";
  }
}
.pick + .pick {
  margin-top: 1rem;
}
</style>
