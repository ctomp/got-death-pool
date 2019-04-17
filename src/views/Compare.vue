<template>
  <table>
    <thead>
      <th class="frozen"></th>
      <th v-for="(character, key) in characters" :key="key">
        <div class="image-cropper">
          <img
            :src="character.imageUrl"
            class="row-header character-pic"
            :alt="character.name"
            :title="character.name"
          />
        </div>
      </th>
    </thead>
    <tbody>
      <tr v-for="(player, key) in players" :key="key">
        <td class="frozen">{{ key }}</td>
        <td
          class="guess"
          v-for="(answer, key) in player.answers"
          :key="key"
          :class="['cell', statuses[answer]]"
        >
          <span v-if="statuses[answer] === characters[key].status">✓</span>
          <span v-else>✗</span>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { statuses } from "@/Characters.js";
import { mapState } from "vuex";

export default {
  data() {
    return {
      statuses
    };
  },
  computed: mapState(["players", "characters"])
};
</script>

<style scoped>
.alive {
  background-color: green;
}
.dead {
  background-color: #db5461;
}
.wight {
  background-color: #062f4f;
}
.cell {
  width: 50px;
}
.row-header {
  width: 75px;
  height: auto;
}
table {
  display: block;
  overflow-x: scroll;
}
.image-cropper {
  border: 1px solid #1e2749;
  border-radius: 50%;
  flex: 0 0 auto;
  height: 25px;
  overflow: hidden;
  width: 25px;
}
.character-pic {
  display: inline;
  height: 100%;
  margin: 0 auto;
  margin-left: -25%;
  width: auto;
}
.guess {
  color: white;
  font-size: 0.8em;
  text-align: center;
}
</style>
