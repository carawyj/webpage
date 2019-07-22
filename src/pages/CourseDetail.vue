<template>
  <div>
    Course Info</br>
    {{ course.description }}</br>
    <router-link to="/course">back</router-link>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'courseDetail',
  components: {

  },
  computed: {
    ...mapGetters([
      'flavor',
      'courses'
    ]),
    id() {
      return this.$route.params.id;
    },
    course() {
      return this.courses[this.id];
    }
  },
  methods: {
    changed(event) {
      this.$store.commit('change', event.target.value)
    }
  }
}
</script>

<style>

</style>
