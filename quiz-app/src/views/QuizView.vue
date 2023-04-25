<script setup>
import QuizHeader from '../components/QuizHeader.vue';
import Question from '../components/Question.vue';
import Result from '../components/Result.vue';
import { useRoute } from 'vue-router';
import { ref, computed } from 'vue';
import quizes from '../data/quizes.json';

const route = useRoute();
const currentQuizId = Number(route.params.id);
const currentQuiz = quizes.find((q) => q.id === currentQuizId);
const currentQuestionIndex = ref(0);
const numberOfCorrectAnswers = ref(0);
const showResults = ref(false);

/* To show Question 1/3 --> Question 2/3 and so on */
const questionNumberStatus = computed(
  () => `${currentQuestionIndex.value}/${currentQuiz.questions.length}`
);
/* To fill the completionn bar by percentage */
const barPercent = computed(
  () => `${(currentQuestionIndex.value / currentQuiz.questions.length) * 100}%`
);

function optionSelectionHandler(isCorrect) {
  if (isCorrect) {
    numberOfCorrectAnswers.value++;
  }
  if (currentQuestionIndex.value === currentQuiz.questions.length - 1) {
    showResults.value = true;
  }
  currentQuestionIndex.value++;
}
</script>

<template>
  <div>
    <QuizHeader
      :questionNumberStatus="questionNumberStatus"
      :barPercent="barPercent"
    />
    <div>
      <Result
        v-if="showResults"
        :totalNumOfQuestions="currentQuiz.questions.length"
        :numOfCorrectAnswers="numberOfCorrectAnswers"
      />
      <Question
        v-else
        :question="currentQuiz.questions[currentQuestionIndex]"
        @optionSelected="optionSelectionHandler"
      />
    </div>
  </div>
</template>
