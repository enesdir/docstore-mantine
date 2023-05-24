# Project Structure

Public Files

```
public/
  +-- assets/
  +-- fonts/
```

Global Files

```
src/
  +-- components/
  +-- config/
  +-- features/
  +-- hooks/
  +-- lib/
  +-- pages/
  +-- styles/
  +-- types/
  +-- utils/
```

Feature/Views Based Files

```
src/features
  +-- api/
  +-- components/
  +-- providers/
  +-- hooks/
  +-- styles/
  +-- types/
  +-- utils/
```

`assets/` - media files

`components/` - reusable React components shared between features

`config/` - files containing constant values and configs

`features/` - container blocks that define a section/feature structure and contain unique components for a particular view

`providers/` - context provider components that use React Context API and render children

`hooks/` - reusable custom hooks

`layout/` - building blocks of the layout structure: header, footer, sidebars etc.

`pages/` - directory with a <a href="https://nextjs.org/docs/basic-features/pages" >file-based routing</a> that contains pages and API routes

`styles/` - everything related to styling and theming

`types/` - type declarations for Typescript

`utils/` - helper functions

Section Based Files

```
src/features
  +-- api/
  +-- components/
  +-- {ComponentType}/
    +-- api/
    +-- components/
    +-- hooks/
    +-- types/
  +-- providers/
  +-- hooks/
  +-- types/
  +-- utils/
```

`{ComponentType}/` - React components

`components/` - reusable React components shared between section components

`hooks/` - reusable custom hooks shared between section components
