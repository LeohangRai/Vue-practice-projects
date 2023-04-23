<script setup>
import QuizHeader from '../components/QuizHeader.vue'
import Question from '../components/Question.vue';
import { useRoute } from 'vue-router';
import { ref } from 'vue';
import quizes from '../data/quizes.json';

const route = useRoute();
const currentQuizId = Number(route.params.id);
const currentQuiz = quizes.find(q => q.id === currentQuizId);
const currentQuestionIndex = ref(0)

</script>

<template>
  <div>
    <QuizHeader />
    <div>
      <Question :question="currentQuiz.questions[currentQuestionIndex]" />
    </div>
  </div>
</template>

