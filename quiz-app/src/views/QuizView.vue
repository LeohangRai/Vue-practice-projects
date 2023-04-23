<script setup>
import QuizHeader from '../components/QuizHeader.vue';
import Question from '../components/Question.vue';
import { useRoute } from 'vue-router';
import { ref, watch } from 'vue';
import quizes from '../data/quizes.json';

const route = useRoute();
const currentQuizId = Number(route.params.id);
const currentQuiz = quizes.find((q) => q.id === currentQuizId);
const currentQuestionIndex = ref(0);
const questionNumberStatus = ref(
  `${currentQuestionIndex.value}/${currentQuiz.questions.length}`
); // to show on the progress bar

watch(currentQuestionIndex, () => {
  questionNumberStatus.value = `${currentQuestionIndex.value}/${currentQuiz.questions.length}`;
});
</script>

<template>
  <div>
    <QuizHeader :questionNumberStatus="questionNumberStatus" />
    <div>
      <Question :question="currentQuiz.questions[currentQuestionIndex]" />
    </div>
    <button @click="currentQuestionIndex++">Next Question</button>
  </div>
</template>
