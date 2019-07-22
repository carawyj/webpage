<template>
  <div>
    All Courses</br>
    <div v-for="(course, index) in courses" v-bind:key="index">
      {{ course.courseCode }} -
      {{ course.courseName }}
      <div @click="goToDetail(index)"> info </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Course',
  components: {

  },
  computed: {
    ...mapGetters([
      'courses'
    ])
  },
  methods: {
    goToDetail(index) {
      this.$router.push({name:'course-detail',params:{id:index}})
    }
  }
}
</script>

<style>

</style>
