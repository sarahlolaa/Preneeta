<template>
<button class="bg-white font-medium text-center cursor-pointer text-gray-900">
    <slot></slot>
</button>
</template>

<style scoped>
button {
  min-height: 30px;
  min-width: 70px;
  border-radius: 32px;
  transition: all 0.1s ease-in-out;
  box-shadow: -6px -6px 10px rgba(255, 255, 255, 0.8), 6px 6px 10px rgba(0, 0, 0, 0.2);
}

button:hover {
  opacity: 0.3;
  box-shadow: -6px -6px 10px rgba(255, 255, 255, 0.8), 6px 6px 10px rgba(0, 0, 0, 0.2);
}

button:active {
  opacity: 1;
  box-shadow: inset -4px -4px 8px rgba(255, 255, 255, 0.5), inset 8px 8px 16px rgba(0, 0, 0, 0.1);
}
</style>