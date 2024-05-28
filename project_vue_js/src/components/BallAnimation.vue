<template>
  <div class="animation-container">
    <img src="@/assets/img/BasketBall_3D.png" alt="Bola" class="animated-object" v-for="n in 10" :key="n" :style="{ animationDelay: `${n * 0.5}s` }"/>
  </div>
</template>

<script>
export default {
  name: 'BallAnimation'
};
</script>

<style scoped>
.animation-container {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 100px;
  overflow: hidden;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.animated-object {
  width: 50px;
  height: 50px;
  background-color: var(--primary-color);
  border-radius: 50%;
  position: absolute;
  bottom: 0;
  animation: moveHorizontal 10s linear infinite;
}

@keyframes moveHorizontal {
  0% {
    transform: translateX(-100%);
  }
  30% {
    transform: translateX(60%);
  }
  75% {
    transform: translateX(-100%);
  }
}
</style>
