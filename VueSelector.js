let VueSelector = Vue.component('vue-selector', {
  template: `
    <div class="custom-vue-selector">
      <p class="custom-vue-selector__value" @click="handleSelectorLabelClick('programmingLanguages')">{{selected_value}} <img class="img-arrow" src="img/down-arrow.png"></p>
      <ul class="custom-vue-selector__selector" v-bind:class="{ active: isOpened }"> 
          <li class="custom-vue-selector__selector__item" v-on:click="handleSelectorElementClick(language)" v-for="language in values">{{language}}<div class="circle"></div>
              
          </li>
      </ul>
    </div>
  `,
  data() {
    return {
      isOpened: false,
      // selectedValue: 'Nothing selected'
    }
  },
  props: {
    values: Array,
    title: String,
    selected_value: String
  },
  methods: {
    handleSelectorLabelClick() {
      // Reverses current value of state
      this.isOpened = !this.isOpened;
    },
    handleSelectorElementClick(value) {
      // Assigns selected value to var in state
      // this.selectedValue = value;
      // Send data to parent
      this.$emit('value-selected', this.title, value);
      // Close selector
      this.isOpened = !this.isOpened;
    }
    // countEntyOccurrences(projects, programming_languages) {
    //   return projects.filter(element => element === programming_languages).length 
    // }
  },
})