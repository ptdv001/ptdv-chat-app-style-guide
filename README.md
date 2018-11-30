# Style Guide (Ptdv)

!IMPORTANT avoid local npm link on virtual drives. The symboloic link failes with an EISDIR error https://github.com/nodejs/node/issues/6861. One work around during dev is to just edit the local module in the node_modules dir and then manually copy the changes to this project.

## Setup

Include the src/main.scss file in the main CSS of your App with a `@import '~ptdv-style-guide/src/styles.scss';`
