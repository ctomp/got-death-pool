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
            :title="`${character.name} [${character.status}]`"
          />
          <div :class="['image-overlay', character.status]"></div>
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

<style scoped lang="scss">
.alive {
  // border-width: 2px;
  background-color: green;
  color: white;
  // border-style: solid;
}
.dead {
  // border-width: 2px;
  background-color: #db5461;
  color: white;
}
.wight {
  // border-width: 2px;
  // border-color: #062f4f;
  color: white;
  font-weight: bold;

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
  // border-collapse: collapse;
  display: block;
  overflow-x: scroll;
}
tr {
  border-top: 1px solid black;
  padding: 5px;
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
  position: relative;
  opacity: 0.5;
  width: auto;
  z-index: 10;
}
.guess {
  box-sizing: border-box;
  font-size: 0.8em;
  padding: 5px;
  text-align: center;
}
.image-overlay {
  width: 25px;
  height: 25px;
  position: relative;
  top: -31px;

  &.alive {
    background-color: green;
  }
  &.dead {
    background-color: #db5461;
  }
  &.wight {
    background-color: blue;
  }
}
</style>
