<template>
  <div>
    <Character :name="characterName" />
  </div>
</template>

<script>
import Character from "@/components/Character.vue";
export default {
  components: {
    Character
  },
  props: {
    characterName: String
  }
};
</script>

<style></style>
