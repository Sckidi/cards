let VueSelector = Vue.component('vue-multiple-selector', {
    template: `
    <div class="multiple-selector">
            <p class="multiple-selector__titles">Programming languages</p>
            <hr width="85%" size="1" color=#52a6de />
            <ul class="multiple-selector__value">
              <li>Python</li>
              <li>JavaScript</li>
              <li>Java</li>
              <li>PHP</li>
              <li>GO</li>
            </ul>
            <p class="multiple-selector__titles">Databases</p>
            <hr width="85%" size="1" color=#52a6de />
            <ul class="multiple-selector__value">
              <li>MongoDB</li>
              <li>MySQL</li>
              <li>Oracle</li>
            </ul>
            <p class="multiple-selector__titles">Industries</p>
            <hr width="85%" size="1" color=#52a6de />
            <ul class="multiple-selector__value">
              <li>Hospitality</li>
              <li>Oil & Gas</li>
              <li>Retail</li>
              <li>Automotive</li>
              <li>Human Resources</li>
              <li>Life Sciences</li>
            </ul>
          </div>
  `,
}