<template>
  <button class="button">
    <slot></slot>
  </button>
</template>

<script></script>

<style scoped>
.button {
  display: flex;
  align-items: center;
  justify-content: center;
  outline: rgba(0, 0, 0, 0);
  cursor: pointer;
  padding: 10px 8px;
  border: var(--border);
  border-radius: var(--border-radius);
  font-family: monospace;
  user-select: none;
  transition: color 0.5s ease;
}

.button:hover {
  transition: color 0.5s ease;
  color: var(--color-active);
}

.button:active {
  color: var(--color-reverse);
  background-color: var(--bg-color-reverse);
}
</style>
