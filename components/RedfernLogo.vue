<template>
  <img
    class="RedfernLogo"
    alt="Redfern Logo"
    src="/logo.png"
  >
</template>

<style>
.RedfernLogo {
  width: 180px;
  transform: rotateY(560deg);
  animation: turn 3.5s ease-out forwards 1s;
}

@keyframes turn {
  100% {
    transform: rotateY(0deg);
  }
}
</style>
