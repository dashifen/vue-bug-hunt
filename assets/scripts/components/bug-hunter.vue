<template>
  <h1>{{ greeting }}, world!</h1>
  <p>&copy {{ year }}</p>
</template>

<script>
export default {
  name: "bug-hunter",
  props: ['greeting'],
  data() {
    return {
      year: new Date().getFullYear()
    }
  }
};
</script>

<style scoped>

</style>
