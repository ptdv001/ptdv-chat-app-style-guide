# Style Guide (Ptdv)

!IMPORTANT avoid local npm link on virtual drives. The symboloic link failes with an EISDIR error https://github.com/nodejs/node/issues/6861. One work around during dev is to just edit the local module in the node_modules dir and then manually copy the changes to this project.

## Setup

Include the src/main.scss file in the main CSS of your App with a `@import '~ptdv-style-guide/src/styles.scss';`

Fontawesome library added as an npm transitive dependency to your project.

TODO use rolloup to support non ES6 browsers.

Example include using VueJS
```
import { library } from '@fortawesome/fontawesome-svg-core';
import { far } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import '../node_modules/ptdv-style-guide/dist/ptdv-fontawesome.js'; // Global variable PTDV_CUSTOM_ICONS

library.add(far, PTDV_CUSTOM_ICONS);
Vue.component('fa-icon', FontAwesomeIcon)
```
