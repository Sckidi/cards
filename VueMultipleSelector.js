let VueSelector = Vue.component('vue-multiple-selector', {
    template: `
    <div class="multiple-selector">
            <p class="multiple-selector__titles" @click="handleSelectorLabelClick('programmingLanguages')">{{selected_value}} </p>
            <hr width="85%" size="1" color=#52a6de />
            <ul class="multiple-selector__value">
              <li v-on:click="handleSelectorElementClick(language)" v-for="language in values">{{language}}</li>
            </ul>
    </div>
  `,
  props: {
    values: Array,
    selected_value: String,
    title: String
  },
  methods: {
    countEntyOccurrences(projects, programming_languages) {
      return projects.filter(element => element === programming_languages).length 
    },
    handleSelectorElementClick(value) {
      // Assigns selected value to var in state
      // this.selectedValue = value;
      // Send data to parent
      this.$emit('value-selected', this.title, value);
  },
})