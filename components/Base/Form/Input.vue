<script lang="ts">
export default defineComponent({
  name: "TwInput",
  inheritAttrs: false,
});
</script>

<script setup lang="ts">
import { computed, defineComponent } from "vue";
export interface Props {
  name?: string;
  label?: string;
  placeholder?: string;
  modelValue?: string | number | null;
  type?: string;
  disabled?: boolean;
  errorClass?: string;
}
const props = withDefaults(defineProps<Props>(), {
  type: "text",
  disabled: false,
  errorClass: "",
});
const emit = defineEmits(["update:modelValue"]);
const computedValue = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit("update:modelValue", value);
  },
});
</script>

<template>
  <label v-if="label" class="font-bold text-gray-700 dark:text-gray-400">
    {{ label }}
  </label>
  <div>
    <input v-bind="$attrs" v-model="computedValue" :type="type"
      class="transition ease-in-out border p-2 relative text-sm outline-none w-full rounded bg-white h-10 placeholder:italic block text-gray-600 dark:text-gray-200 dark:border-gray-700 dark:bg-gray-800 outline-primary disabled:!bg-gray-100 disabled:cursor-not-allowed focus:shadow-[0_0_0_0.2rem_rgb(255_255_125_/_25%);]"
      :placeholder="placeholder" :disabled="disabled" />
  </div>
</template>
