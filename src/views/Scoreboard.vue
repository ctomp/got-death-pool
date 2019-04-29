<template>
  <div>
    <table id="scoreboard">
      <thead>
        <th>Name</th>
        <th>Current Points</th>
        <th>Brutality Score</th>
      </thead>
      <tbody>
        <tr v-for="player in sortedPlayers" :key="player.name">
          <td>
            <router-link
              :to="{
                name: 'player-detail',
                params: { playerName: player.name }
              }"
              >{{ player.name }}</router-link
            >
          </td>
          <td>{{ player.score }}</td>
          <td>{{ Math.round(player.brutality * 100) }}%</td>
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
  computed: {
    sortedPlayers() {
      console.log(this.players);
      const playerArr = Object.keys(this.players).map(key => {
        return { ...this.players[key], name: key };
      });
      if (playerArr.length === 0) {
        return this.players;
      }

      playerArr.forEach(player => {
        player.score = this.computePoints(player.answers);
        player.brutality = this.computeBrutality(player.answers);
      });

      console.log(playerArr);

      return playerArr.sort((player1, player2) => {
        if (player1.score > player2.score) {
          return -1;
        } else if (player1.score < player2.score) {
          return 1;
        }

        return 0;
      });
    },
    ...mapState(["players"])
  },
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
