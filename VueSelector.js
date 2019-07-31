let VueSelector = Vue.component('vue-selector', {
  template: `
    <div class="custom-vue-selector programming-languages">
      <p class="custom-vue-selector__label" @click="handleSelectorLabelClick('programmingLanguages')"> {{ title }} </p>
      <ul class="custom-vue-selector__selector" v-bind:class="{ active: isOpened }">
          <li class="custom-vue-selector__selector__item" v-bind:class="{selectedProgrammingLanguage}" @click="handleSelectorLabelClick('programmingLanguages')" v-for="language in values">{{language}}</li>
      </ul>
    </div>
  `,
  data() {
    return {
      isOpened: false
    }
  },
  props: {
    values: Array,
    title: String
  },
  methods: {
    handleSelectorLabelClick() {
      // Reverses current value of state
      this.isOpened = !this.isOpened;
    },
    selectedValue () {
        this.$emit(selectedProgrammingLanguage)
    }
  },
})