const { CONTEXT, DEPLOY_PRIME_URL } = process.env;

const PRODUCTION_URL = 'https://timosarkar.surge.sh';
const URL = CONTEXT === 'deploy-preview' ? DEPLOY_PRIME_URL : PRODUCTION_URL;

module.exports = {
  title: 'Timo Sarkar',
  description:
    'Personal site of Timo Sarkar',
  author: 'Timo Sarkar',
  authorImage: `${URL}/assets/images/og-me.jpg`,
  url: URL,
  logo: `${URL}/assets/images/site-logo.jpg`
};
