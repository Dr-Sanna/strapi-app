'use strict';

module.exports = ({ env }) => ({
  // ...
  'strapi-algolia': {
    enabled: true,
    config: {
      apiKey: env('ALGOLIA_ADMIN_KEY'),
      applicationId: env('ALGOLIA_APP_ID'),
      indexPrefix: `${env('NODE_ENV')}_`,
      contentTypes: [
        {
          name: 'api::cas-clinique.cas-clinique',
          populate: {
            fields: ['id', 'titre', 'enonce', 'sousmatiere', 'indexMatiere'],
          },
          hideFields: [
            'image', // Cache les champs volumineux
            'createdAt',
            'updatedAt',
            'publishedAt',
            'question',
            'correction',
          ],
        },
        {
          name: 'api::liens-utile.liens-utile',
          populate: {
            fields: ['id', 'titre', 'url', 'description'],
          },
          hideFields: [
            'createdAt',
            'updatedAt',
            'publishedAt',
          ],
        },
        {
          name: 'api::guide-clinique.guide-clinique',
          populate: {
            fields: ['id', 'titre', 'enonce', 'sousmatiere', 'indexMatiere'],
          },
          hideFields: [
            'createdAt',
            'updatedAt',
            'publishedAt',
          ],
        },
        // Ajoutez d'autres types de contenu si nécessaire...
      ],
    },
  },
});
