
<h1 align="center">POSH - E-COMMERCE</h1>

<p align="center">
<img src="https://github.com/pawelkom88/lush-junior-task/blob/main/posh-logo.png?raw=true" alt="Outletity logo" width="300" height="300"/>
</p>

## Table of Contents

1. [About the Project](#about-the-project)
2. [Toolset](#toolset)
3. [Challenges and solution](#challenges)

## About the Project 
Posh is a fully responsive fake e-commerce store built as result of given task by LUSH DIGITAL E-COMMERCE TEAM.

- Folders and files architecture is pretty standard for this type of projects. 
<img src="https://github.com/pawelkom88/lush-junior-task/blob/main/tree.png?raw=true" width="200" height="400"/>

In my workflow I have used:
- Feature branches and Pull Requests with descriptive commits
- Autogenerated types and hooks by Saleor Api
- Apollo client to communicate with the API
- Path aliases. Thanks to them, the import statements are short and more convenient to use.


If I had more time, I would: 
- Implement tests using React Testing Library
- Try to sort / search items using cashed data instead of sending a new request to the API.

I really enjoyed working on this project, although it was one of the hardest I have done so far. It learned me a ton of new things and that is the most important part.

## Toolset
- Next.js is my framework of my choice for this project. It provides server-side rendering and routing out of the box. Another important feature is statically generated pages with dynamic routes using getStaticPaths (which was crucial to complete the task ) and responsive images with lazy loading.

<a href='https://nextjs.org/docs/getting-started'>docs</a>

- Apollo Client is a comprehensive state management library for JavaScript that enables you to manage both local and remote data with GraphQL. It makes working with queries relatively easy and provides features such as caching, fetch policies and hooks.

<a href='https://www.apollographql.com/docs/'>docs</a>

- Saleor
Saleor is a headless, GraphQL-first e-commerce platform that gives you the most flexible and future-proof way of building your e-commerce. I installed

<a href='https://docs.saleor.io/docs/3.x/developer/products'>docs</a>

- GraphQL Code Generator 
It is a command-line tool that generates types along with helpers such as React Hooks from a GraphQL schema.

- SASS Modules
I love writing CSS and SASS/SCSS give you extra powers. All scss files live together with their components and are scoped to them. It helps to avoid class names conflict, makes styles easier to read and manage. On the top of that, I have taken advantage of partials such as variables, mixins and breakpoints.

- Typescript
Superset of Java Script is definitely the future of web development. It helped me avoid silly bugs and provided a handy auto complete.

<a href='https://www.typescriptlang.org/docs/'>docs</a>

## Challenges

The biggest challenge was to familiarize myself with Apollo and GraphQL. These are new technologies to me, but thanks to great documentation and <a href='https://frontendmasters.com/courses/client-graphql-react/apollo-client-api-querying/'>this course</a> learning process was a pleasure.

- Accesssibility
I always try to make my sites as accessible as possible.It takes extra time to implement them, but it is worth it. I have used simple colors that provide high contract, readable fonts, easily focusable, semantic HTML tags and aria-labels. The site has been tested using built in Narrator in Windows 10.

- Code readability
I tried to keep my components small and use descriptive, straight to the point names. I did the same with variables and functions. I believe I have achieved this goal and additional comments is not required.



