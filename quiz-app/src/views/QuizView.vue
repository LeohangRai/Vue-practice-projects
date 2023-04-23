<script setup>
import QuizHeader from '../components/QuizHeader.vue';
import Question from '../components/Question.vue';
import { useRoute } from 'vue-router';
import { ref, watch, computed } from 'vue';
import quizes from '../data/quizes.json';

const route = useRoute();
const currentQuizId = Number(route.params.id);
const currentQuiz = quizes.find((q) => q.id === currentQuizId);
const currentQuestionIndex = ref(0);

/* To show Question 1/3 --> Question 2/3 and so on */
const questionNumberStatus = computed(
  () => `${currentQuestionIndex.value}/${currentQuiz.questions.length}`
);
/* To fill the completionn bar by percentage */
const barPercent = computed(
  () => `${(currentQuestionIndex.value / currentQuiz.questions.length) * 100}%`
);
</script>

<template>
  <div>
    <QuizHeader
      :questionNumberStatus="questionNumberStatus"
      :barPercent="barPercent"
    />
    <div>
      <Question :question="currentQuiz.questions[currentQuestionIndex]" />
    </div>
    <button @click="currentQuestionIndex++">Next Question</button>
  </div>
</template>
