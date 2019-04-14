<template>
  <div>
    <table id="scoreboard">
      <thead>
        <th>Name</th>
        <th>Current Points</th>
        <th>Brutality Score</th>
      </thead>
      <tbody>
        <tr v-for="(player, key) in players" :key="key">
          <td>
            <router-link
              :to="{ name: 'player-detail', params: { playerName: key } }"
              >{{ key }}</router-link
            >
          </td>
          <td>{{ computePoints(player.answers) }}</td>
          <td>{{ Math.round(computeBrutality(player.answers) * 100) }}%</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { characters, statuses } from "@/Characters.js";
import { mapState } from "vuex";

export default {
  name: "scoreboard",
  data() {
    return {
      characters,
      statuses
    };
  },
  computed: mapState(["players"]),
  methods: {
    computePoints(answers) {
      return Object.entries(answers)
        .map(answerEntry => {
          const predictedStatus = answerEntry[1];

          return statuses[predictedStatus] === characters[answerEntry[0]].status
            ? 1
            : 0;
        })
        .reduce((total, pt) => total + pt);
    },
    computeBrutality(answers) {
      return (
        Object.entries(answers)
          .map(answerEntry => {
            return answerEntry[1] !== 0 ? 1 : 0;
          })
          .filter(status => status === 1).length /
        Object.keys(this.characters).length
      );
    }
  }
};
</script>

<style scoped>
#scoreboard {
  margin-left: auto;
  margin-right: auto;
}
</style>
