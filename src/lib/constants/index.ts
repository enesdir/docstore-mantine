export { PATHS } from './Paths'

export const FAVICON_FOLDER = '/_static/favicons'

export const HOME_HOSTNAMES = new Set([
  // comment for better diffs
  'dub.sh',
  'localhost',
  'localhost:3000',
])

export const APP_HOSTNAMES = new Set(['app.dub.sh', 'app.localhost:3000', 'preview.dub.sh'])

export const DEFAULT_REDIRECTS = {
  home: 'https://dub.sh',
  signin: 'https://app.dub.sh/login',
  login: 'https://app.dub.sh/login',
  register: 'https://app.dub.sh/register',
  signup: 'https://app.dub.sh/register',
  app: 'https://app.dub.sh',
  dashboard: 'https://app.dub.sh',
  links: 'https://app.dub.sh/links',
  settings: 'https://app.dub.sh/settings',
  welcome: 'https://app.dub.sh/welcome',
  slack: 'https://dub.slack.com',
  discord: 'https://twitter.com/dubdotsh', // placeholder for now
}
