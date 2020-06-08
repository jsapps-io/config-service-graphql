import { gql } from 'apollo-boost';

const queryEveryApps = gql`
  {
    everyApps {
      id
      uri
      host
      path
      template
      order
      icon
      navService
      location
      capabilities
      default
      label
      items
      predixZoneId
      createdAt
      updatedAt
    }
  }
`;

const queryAppsById = gql`
  query($id: ID!) {
    apps(id: $id) {
      id
      uri
      host
      path
      template
      order
      icon
      navService
      location
      capabilities
      default
      label
      items
      predixZoneId
      createdAt
      updatedAt
    }
  }
`;

const queryEveryThemes = gql`
  {
    everyThemes {
      id
      uri
      baseUri
      main
      error
      errorChromeless
      displayName
      description
      default
      predixZoneId
      updatedAt
      createdAt
    }
  }
`;

const queryThemesById = gql`
  query($id: ID!) {
    themes(id: $id) {
      id
      uri
      baseUri
      main
      error
      errorChromeless
      displayName
      description
      default
      predixZoneId
      updatedAt
      createdAt
    }
  }
`;

const queryEveryTenants = gql`
  {
    everyTenants {
      id
      host
      route
      predixZoneId
      metadata
      createdAt
      updatedAt
      context
      shared
      appConfigurationUri
    }
  }
`;

const queryTenantsById = gql`
  query($id: ID!) {
    tenants(id: $id) {
      id
      host
      route
      predixZoneId
      metadata
      createdAt
      updatedAt
      context
      shared
      appConfigurationUri
    }
  }
`;

const queryEveryGlobalconfig = gql`
  {
    everyGlobalconfig {
      id
      name
      logo
      logoUri
      theme
      applicationChrome
      globalScripts
      globalCss
      predixZoneId
      createdAt
      updatedAt
    }
  }
`;

const queryGlobalconfigById = gql`
  query($id: ID!) {
    globalconfig(id: $id) {
      id
      name
      logo
      logoUri
      theme
      applicationChrome
      globalScripts
      globalCss
      predixZoneId
      createdAt
      updatedAt
    }
  }
`;

const queryEveryPreferences = gql`
  {
    everyPreferences {
      id
      name
      metadata
      level
      predixZoneId
      createdAt
      updatedAt
    }
  }
`;

const queryPreferencesById = gql`
  query($id: ID!) {
    preferences(id: $id) {
      id
      name
      metadata
      level
      predixZoneId
      createdAt
      updatedAt
    }
  }
`;

const queryEveryUaainfo = gql`
  {
    everyUaainfo {
      id
      uaaUri
      clientId
      clientSecret
      predixZoneId
    }
  }
`;

const queryUaainfoById = gql`
  query($id: ID!) {
    uaainfo(id: $id) {
      id
      uaaUri
      clientId
      clientSecret
      predixZoneId
    }
  }
`;

const queryEveryConfig = gql`
  {
    everyConfig {
      id
      predixZoneId
      name
      apps
      theme
      preferences
      profile
      settings
      main
      globalCSS
      globalScripts
      globalConfig
      contextPath
      themes
    }
  }
`;

const queryConfigById = gql`
  query($id: ID!) {
    config(id: $id) {
      id
      predixZoneId
      name
      apps
      theme
      preferences
      profile
      settings
      main
      globalCSS
      globalScripts
      globalConfig
      contextPath
      themes
    }
  }
`;

export {
  queryEveryApps,
  queryAppsById,
  queryEveryThemes,
  queryThemesById,
  queryEveryTenants,
  queryTenantsById,
  queryEveryGlobalconfig,
  queryGlobalconfigById,
  queryEveryPreferences,
  queryPreferencesById,
  queryEveryUaainfo,
  queryUaainfoById,
  queryEveryConfig,
  queryConfigById,
};
