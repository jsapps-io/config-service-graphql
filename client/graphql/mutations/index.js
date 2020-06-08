import { gql } from 'apollo-boost';

const addAppsMutation = gql`
  mutation(
    $uri: String
    $host: String
    $path: String
    $template: String
    $order: Int
    $icon: String
    $navService: String
    $location: String
    $capabilities: String
    $default: Boolean
    $label: String!
    $items: String
    $predixZoneId: String
    $createdAt: String
    $updatedAt: String
  ) {
    addApps(
      uri: $uri
      host: $host
      path: $path
      template: $template
      order: $order
      icon: $icon
      navService: $navService
      location: $location
      capabilities: $capabilities
      default: $default
      label: $label
      items: $items
      predixZoneId: $predixZoneId
      createdAt: $createdAt
      updatedAt: $updatedAt
    ) {
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

const updateAppsMutation = gql`
  mutation(
    $id: ID!
    $uri: String
    $host: String
    $path: String
    $template: String
    $order: Int
    $icon: String
    $navService: String
    $location: String
    $capabilities: String
    $default: Boolean
    $label: String!
    $items: String
    $predixZoneId: String
    $createdAt: String
    $updatedAt: String
  ) {
    updateApps(
      id: $id
      uri: $uri
      host: $host
      path: $path
      template: $template
      order: $order
      icon: $icon
      navService: $navService
      location: $location
      capabilities: $capabilities
      default: $default
      label: $label
      items: $items
      predixZoneId: $predixZoneId
      createdAt: $createdAt
      updatedAt: $updatedAt
    ) {
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

const deleteAppsMutation = gql`
  mutation($id: ID!) {
    deleteApps(id: $id) {
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

const addThemesMutation = gql`
  mutation(
    $uri: String
    $baseUri: String
    $main: String
    $error: String
    $errorChromeless: String
    $displayName: String
    $description: String
    $default: String
    $predixZoneId: String
    $updatedAt: String
    $createdAt: String
  ) {
    addThemes(
      uri: $uri
      baseUri: $baseUri
      main: $main
      error: $error
      errorChromeless: $errorChromeless
      displayName: $displayName
      description: $description
      default: $default
      predixZoneId: $predixZoneId
      updatedAt: $updatedAt
      createdAt: $createdAt
    ) {
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

const updateThemesMutation = gql`
  mutation(
    $id: ID!
    $uri: String
    $baseUri: String
    $main: String
    $error: String
    $errorChromeless: String
    $displayName: String
    $description: String
    $default: String
    $predixZoneId: String
    $updatedAt: String
    $createdAt: String
  ) {
    updateThemes(
      id: $id
      uri: $uri
      baseUri: $baseUri
      main: $main
      error: $error
      errorChromeless: $errorChromeless
      displayName: $displayName
      description: $description
      default: $default
      predixZoneId: $predixZoneId
      updatedAt: $updatedAt
      createdAt: $createdAt
    ) {
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

const deleteThemesMutation = gql`
  mutation($id: ID!) {
    deleteThemes(id: $id) {
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

const addTenantsMutation = gql`
  mutation(
    $host: String
    $route: String
    $predixZoneId: String
    $metadata: String
    $createdAt: String
    $updatedAt: String
    $context: String
    $shared: Boolean
    $appConfigurationUri: String
  ) {
    addTenants(
      host: $host
      route: $route
      predixZoneId: $predixZoneId
      metadata: $metadata
      createdAt: $createdAt
      updatedAt: $updatedAt
      context: $context
      shared: $shared
      appConfigurationUri: $appConfigurationUri
    ) {
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

const updateTenantsMutation = gql`
  mutation(
    $id: ID!
    $host: String
    $route: String
    $predixZoneId: String
    $metadata: String
    $createdAt: String
    $updatedAt: String
    $context: String
    $shared: Boolean
    $appConfigurationUri: String
  ) {
    updateTenants(
      id: $id
      host: $host
      route: $route
      predixZoneId: $predixZoneId
      metadata: $metadata
      createdAt: $createdAt
      updatedAt: $updatedAt
      context: $context
      shared: $shared
      appConfigurationUri: $appConfigurationUri
    ) {
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

const deleteTenantsMutation = gql`
  mutation($id: ID!) {
    deleteTenants(id: $id) {
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

const addGlobalconfigMutation = gql`
  mutation(
    $name: String
    $logo: String
    $logoUri: String
    $theme: String
    $applicationChrome: String
    $globalScripts: String
    $globalCss: String
    $predixZoneId: String
    $createdAt: String
    $updatedAt: String
  ) {
    addGlobalconfig(
      name: $name
      logo: $logo
      logoUri: $logoUri
      theme: $theme
      applicationChrome: $applicationChrome
      globalScripts: $globalScripts
      globalCss: $globalCss
      predixZoneId: $predixZoneId
      createdAt: $createdAt
      updatedAt: $updatedAt
    ) {
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

const updateGlobalconfigMutation = gql`
  mutation(
    $id: ID!
    $name: String
    $logo: String
    $logoUri: String
    $theme: String
    $applicationChrome: String
    $globalScripts: String
    $globalCss: String
    $predixZoneId: String
    $createdAt: String
    $updatedAt: String
  ) {
    updateGlobalconfig(
      id: $id
      name: $name
      logo: $logo
      logoUri: $logoUri
      theme: $theme
      applicationChrome: $applicationChrome
      globalScripts: $globalScripts
      globalCss: $globalCss
      predixZoneId: $predixZoneId
      createdAt: $createdAt
      updatedAt: $updatedAt
    ) {
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

const deleteGlobalconfigMutation = gql`
  mutation($id: ID!) {
    deleteGlobalconfig(id: $id) {
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

const addPreferencesMutation = gql`
  mutation(
    $name: String
    $metadata: String
    $level: String
    $predixZoneId: String
    $createdAt: String
    $updatedAt: String
  ) {
    addPreferences(
      name: $name
      metadata: $metadata
      level: $level
      predixZoneId: $predixZoneId
      createdAt: $createdAt
      updatedAt: $updatedAt
    ) {
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

const updatePreferencesMutation = gql`
  mutation(
    $id: ID!
    $name: String
    $metadata: String
    $level: String
    $predixZoneId: String
    $createdAt: String
    $updatedAt: String
  ) {
    updatePreferences(
      id: $id
      name: $name
      metadata: $metadata
      level: $level
      predixZoneId: $predixZoneId
      createdAt: $createdAt
      updatedAt: $updatedAt
    ) {
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

const deletePreferencesMutation = gql`
  mutation($id: ID!) {
    deletePreferences(id: $id) {
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

const addUaainfoMutation = gql`
  mutation($uaaUri: String, $clientId: String, $clientSecret: String, $predixZoneId: String) {
    addUaainfo(
      uaaUri: $uaaUri
      clientId: $clientId
      clientSecret: $clientSecret
      predixZoneId: $predixZoneId
    ) {
      id
      uaaUri
      clientId
      clientSecret
      predixZoneId
    }
  }
`;

const updateUaainfoMutation = gql`
  mutation(
    $id: ID!
    $uaaUri: String
    $clientId: String
    $clientSecret: String
    $predixZoneId: String
  ) {
    updateUaainfo(
      id: $id
      uaaUri: $uaaUri
      clientId: $clientId
      clientSecret: $clientSecret
      predixZoneId: $predixZoneId
    ) {
      id
      uaaUri
      clientId
      clientSecret
      predixZoneId
    }
  }
`;

const deleteUaainfoMutation = gql`
  mutation($id: ID!) {
    deleteUaainfo(id: $id) {
      id
      uaaUri
      clientId
      clientSecret
      predixZoneId
    }
  }
`;

const addConfigMutation = gql`
  mutation(
    $predixZoneId: String
    $name: String
    $apps: String
    $theme: String
    $preferences: String
    $profile: String
    $settings: String
    $main: String
    $globalCSS: String
    $globalScripts: String
    $globalConfig: String
    $contextPath: String
    $themes: String
  ) {
    addConfig(
      predixZoneId: $predixZoneId
      name: $name
      apps: $apps
      theme: $theme
      preferences: $preferences
      profile: $profile
      settings: $settings
      main: $main
      globalCSS: $globalCSS
      globalScripts: $globalScripts
      globalConfig: $globalConfig
      contextPath: $contextPath
      themes: $themes
    ) {
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

const updateConfigMutation = gql`
  mutation(
    $id: ID!
    $predixZoneId: String
    $name: String
    $apps: String
    $theme: String
    $preferences: String
    $profile: String
    $settings: String
    $main: String
    $globalCSS: String
    $globalScripts: String
    $globalConfig: String
    $contextPath: String
    $themes: String
  ) {
    updateConfig(
      id: $id
      predixZoneId: $predixZoneId
      name: $name
      apps: $apps
      theme: $theme
      preferences: $preferences
      profile: $profile
      settings: $settings
      main: $main
      globalCSS: $globalCSS
      globalScripts: $globalScripts
      globalConfig: $globalConfig
      contextPath: $contextPath
      themes: $themes
    ) {
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

const deleteConfigMutation = gql`
  mutation($id: ID!) {
    deleteConfig(id: $id) {
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
  addAppsMutation,
  updateAppsMutation,
  deleteAppsMutation,
  addThemesMutation,
  updateThemesMutation,
  deleteThemesMutation,
  addTenantsMutation,
  updateTenantsMutation,
  deleteTenantsMutation,
  addGlobalconfigMutation,
  updateGlobalconfigMutation,
  deleteGlobalconfigMutation,
  addPreferencesMutation,
  updatePreferencesMutation,
  deletePreferencesMutation,
  addUaainfoMutation,
  updateUaainfoMutation,
  deleteUaainfoMutation,
  addConfigMutation,
  updateConfigMutation,
  deleteConfigMutation,
};
