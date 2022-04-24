folder structure:

- app: contains all logic for our app like global error boundary and HOCs.
- components: contains all of our ui components
- constants: contains all of constants that would be shared across code
- graphql: contains graphql related files like queries and mutations. (I had installed graphql.macro and used it because it compiles .gql files on build time)
- hooks: contains react hooks that will be used in our app.
- layouts: contains layouts
- pages: contains routing files (because we only have on page i used \*)
- types: contains types definitions
- utils: contains custom utils and exports from 3rd party libraries

It is recommended that all <img> tags include both width and height attributes. Without dimensions specified, layout shifts can occur, which are more noticeable on pages that take some time to load.

PLEASE don't directly use 3rd party libraries, write a wrapper for them and use that wrapper because in the future you can safely make change in them like upgrading to new versions or replacing them with new component.

I used yarn because it's faster.
