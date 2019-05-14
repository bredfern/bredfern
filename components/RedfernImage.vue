<template>
  <img class="RedfernImage mb-2" alt="Redfern Image" src="/redfern.jpg" />
</template>

<style>
.RedfernImage {
  transform: rotateY(560deg);
  animation: turn 3.5s ease-out forwards 1s;
  height: 180px;
}

@keyframes turn {
  100% {
    transform: rotateY(0deg);
  }
}
</style>
