import type { Schema, Attribute } from '@strapi/strapi';

export interface CasCliniqueCorrection extends Schema.Component {
  collectionName: 'components_cas_clinique_corrections';
  info: {
    displayName: 'correction';
    icon: 'file';
    description: '';
  };
  attributes: {
    correction: Attribute.RichText;
  };
}

export interface CasCliniqueQuestion extends Schema.Component {
  collectionName: 'components_test_questions';
  info: {
    displayName: 'question';
    icon: 'file';
    description: '';
  };
  attributes: {
    question: Attribute.Text;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'cas-clinique.correction': CasCliniqueCorrection;
      'cas-clinique.question': CasCliniqueQuestion;
    }
  }
}
