const graphql = require('graphql');
const pool = require('../db/sql_pool.js');

const {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLID,
  GraphQLString,
  GraphQLInt,
  GraphQLBoolean,
  GraphQLList,
  GraphQLNonNull,
} = graphql;

const AppsType = new GraphQLObjectType({
  name: 'Apps',
  fields: () => ({
    id: { type: GraphQLID },
    uri: { type: GraphQLString },
    host: { type: GraphQLString },
    path: { type: GraphQLString },
    template: { type: GraphQLString },
    order: { type: GraphQLInt },
    icon: { type: GraphQLString },
    navService: { type: GraphQLString },
    location: { type: GraphQLString },
    capabilities: { type: GraphQLString },
    default: { type: GraphQLBoolean },
    label: { type: new GraphQLNonNull(GraphQLString) },
    items: { type: GraphQLString },
    predixZoneId: { type: GraphQLString },
    everyRelatedTenants: {
      type: new GraphQLList(TenantsType),
      resolve(parent, args) {
        const sql = `SELECT * FROM "Tenants" WHERE "predixZoneId" = '${parent.predixZoneId}';`;
        return pool
          .query(sql)
          .then((res) => res.rows)
          .catch((err) => console.log('Error: ', err));
      },
    },
    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString },
  }),
});

const ThemesType = new GraphQLObjectType({
  name: 'Themes',
  fields: () => ({
    id: { type: GraphQLID },
    uri: { type: GraphQLString },
    baseUri: { type: GraphQLString },
    main: { type: GraphQLString },
    error: { type: GraphQLString },
    errorChromeless: { type: GraphQLString },
    displayName: { type: GraphQLString },
    description: { type: GraphQLString },
    default: { type: GraphQLString },
    predixZoneId: { type: GraphQLString },
    everyRelatedTenants: {
      type: new GraphQLList(TenantsType),
      resolve(parent, args) {
        const sql = `SELECT * FROM "Tenants" WHERE "predixZoneId" = '${parent.predixZoneId}';`;
        return pool
          .query(sql)
          .then((res) => res.rows)
          .catch((err) => console.log('Error: ', err));
      },
    },
    updatedAt: { type: GraphQLString },
    createdAt: { type: GraphQLString },
  }),
});

const TenantsType = new GraphQLObjectType({
  name: 'Tenants',
  fields: () => ({
    id: { type: GraphQLID },
    host: { type: GraphQLString },
    route: { type: GraphQLString },
    predixZoneId: { type: GraphQLString },
    relatedApps: {
      type: AppsType,
      resolve(parent, args) {
        const sql = `SELECT * FROM "Apps" WHERE "predixZoneId" = '${parent.predixZoneId}';`;
        return pool
          .query(sql)
          .then((res) => res.rows[0])
          .catch((err) => console.log('Error: ', err));
      },
    },
    relatedPreferences: {
      type: PreferencesType,
      resolve(parent, args) {
        const sql = `SELECT * FROM "Preferences" WHERE "predixZoneId" = '${parent.predixZoneId}';`;
        return pool
          .query(sql)
          .then((res) => res.rows[0])
          .catch((err) => console.log('Error: ', err));
      },
    },
    relatedUaainfo: {
      type: UaainfoType,
      resolve(parent, args) {
        const sql = `SELECT * FROM "Uaainfo" WHERE "predixZoneId" = '${parent.predixZoneId}';`;
        return pool
          .query(sql)
          .then((res) => res.rows[0])
          .catch((err) => console.log('Error: ', err));
      },
    },
    relatedConfig: {
      type: ConfigType,
      resolve(parent, args) {
        const sql = `SELECT * FROM "Config" WHERE "predixZoneId" = '${parent.predixZoneId}';`;
        return pool
          .query(sql)
          .then((res) => res.rows[0])
          .catch((err) => console.log('Error: ', err));
      },
    },
    metadata: { type: GraphQLString },
    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString },
    context: { type: GraphQLString },
    shared: { type: GraphQLBoolean },
    appConfigurationUri: { type: GraphQLString },
  }),
});

const GlobalconfigType = new GraphQLObjectType({
  name: 'Globalconfig',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    logo: { type: GraphQLString },
    logoUri: { type: GraphQLString },
    theme: { type: GraphQLString },
    applicationChrome: { type: GraphQLString },
    globalScripts: { type: GraphQLString },
    globalCss: { type: GraphQLString },
    predixZoneId: { type: GraphQLString },
    relatedTenants: {
      type: TenantsType,
      resolve(parent, args) {
        const sql = `SELECT * FROM "Tenants" WHERE "predixZoneId" = '${parent.predixZoneId}';`;
        return pool
          .query(sql)
          .then((res) => res.rows[0])
          .catch((err) => console.log('Error: ', err));
      },
    },
    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString },
  }),
});

const PreferencesType = new GraphQLObjectType({
  name: 'Preferences',
  fields: () => ({
    id: { type: GraphQLID },
    relatedConfig: {
      type: ConfigType,
      resolve(parent, args) {
        const sql = `SELECT * FROM "Config" WHERE "preferences" = '${parent.id}';`;
        return pool
          .query(sql)
          .then((res) => res.rows[0])
          .catch((err) => console.log('Error: ', err));
      },
    },
    name: { type: GraphQLString },
    metadata: { type: GraphQLString },
    level: { type: GraphQLString },
    predixZoneId: { type: GraphQLString },
    relatedTenants: {
      type: TenantsType,
      resolve(parent, args) {
        const sql = `SELECT * FROM "Tenants" WHERE "predixZoneId" = '${parent.predixZoneId}';`;
        return pool
          .query(sql)
          .then((res) => res.rows[0])
          .catch((err) => console.log('Error: ', err));
      },
    },
    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString },
  }),
});

const UaainfoType = new GraphQLObjectType({
  name: 'Uaainfo',
  fields: () => ({
    id: { type: GraphQLID },
    uaaUri: { type: GraphQLString },
    clientId: { type: GraphQLString },
    clientSecret: { type: GraphQLString },
    predixZoneId: { type: GraphQLString },
    relatedTenants: {
      type: TenantsType,
      resolve(parent, args) {
        const sql = `SELECT * FROM "Tenants" WHERE "predixZoneId" = '${parent.predixZoneId}';`;
        return pool
          .query(sql)
          .then((res) => res.rows[0])
          .catch((err) => console.log('Error: ', err));
      },
    },
  }),
});

const ConfigType = new GraphQLObjectType({
  name: 'Config',
  fields: () => ({
    id: { type: GraphQLID },
    predixZoneId: { type: GraphQLString },
    everyRelatedTenants: {
      type: new GraphQLList(TenantsType),
      resolve(parent, args) {
        const sql = `SELECT * FROM "Tenants" WHERE "predixZoneId" = '${parent.predixZoneId}';`;
        return pool
          .query(sql)
          .then((res) => res.rows)
          .catch((err) => console.log('Error: ', err));
      },
    },
    name: { type: GraphQLString },
    apps: { type: GraphQLString },
    theme: { type: GraphQLString },
    preferences: { type: GraphQLString },
    everyRelatedPreferences: {
      type: new GraphQLList(PreferencesType),
      resolve(parent, args) {
        const sql = `SELECT * FROM "Preferences" WHERE "id" = '${parent.preferences}';`;
        return pool
          .query(sql)
          .then((res) => res.rows)
          .catch((err) => console.log('Error: ', err));
      },
    },
    profile: { type: GraphQLString },
    settings: { type: GraphQLString },
    main: { type: GraphQLString },
    globalCSS: { type: GraphQLString },
    globalScripts: { type: GraphQLString },
    globalConfig: { type: GraphQLString },
    contextPath: { type: GraphQLString },
    themes: { type: GraphQLString },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    everyApps: {
      type: new GraphQLList(AppsType),
      resolve() {
        const sql = `SELECT * FROM "Apps";`;
        return pool
          .query(sql)
          .then((res) => res.rows)
          .catch((err) => console.log('Error: ', err));
      },
    },
    apps: {
      type: AppsType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        const sql = `SELECT * FROM "Apps" WHERE id = '${args.id}';`;
        return pool
          .query(sql)
          .then((res) => res.rows[0])
          .catch((err) => console.log('Error: ', err));
      },
    },
    everyThemes: {
      type: new GraphQLList(ThemesType),
      resolve() {
        const sql = `SELECT * FROM "Themes";`;
        return pool
          .query(sql)
          .then((res) => res.rows)
          .catch((err) => console.log('Error: ', err));
      },
    },
    themes: {
      type: ThemesType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        const sql = `SELECT * FROM "Themes" WHERE id = '${args.id}';`;
        return pool
          .query(sql)
          .then((res) => res.rows[0])
          .catch((err) => console.log('Error: ', err));
      },
    },
    everyTenants: {
      type: new GraphQLList(TenantsType),
      resolve() {
        const sql = `SELECT * FROM "Tenants";`;
        return pool
          .query(sql)
          .then((res) => res.rows)
          .catch((err) => console.log('Error: ', err));
      },
    },
    tenants: {
      type: TenantsType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        const sql = `SELECT * FROM "Tenants" WHERE id = '${args.id}';`;
        return pool
          .query(sql)
          .then((res) => res.rows[0])
          .catch((err) => console.log('Error: ', err));
      },
    },
    everyGlobalconfig: {
      type: new GraphQLList(GlobalconfigType),
      resolve() {
        const sql = `SELECT * FROM "Globalconfig";`;
        return pool
          .query(sql)
          .then((res) => res.rows)
          .catch((err) => console.log('Error: ', err));
      },
    },
    globalconfig: {
      type: GlobalconfigType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        const sql = `SELECT * FROM "Globalconfig" WHERE id = '${args.id}';`;
        return pool
          .query(sql)
          .then((res) => res.rows[0])
          .catch((err) => console.log('Error: ', err));
      },
    },
    everyPreferences: {
      type: new GraphQLList(PreferencesType),
      resolve() {
        const sql = `SELECT * FROM "Preferences";`;
        return pool
          .query(sql)
          .then((res) => res.rows)
          .catch((err) => console.log('Error: ', err));
      },
    },
    preferences: {
      type: PreferencesType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        const sql = `SELECT * FROM "Preferences" WHERE id = '${args.id}';`;
        return pool
          .query(sql)
          .then((res) => res.rows[0])
          .catch((err) => console.log('Error: ', err));
      },
    },
    everyUaainfo: {
      type: new GraphQLList(UaainfoType),
      resolve() {
        const sql = `SELECT * FROM "Uaainfo";`;
        return pool
          .query(sql)
          .then((res) => res.rows)
          .catch((err) => console.log('Error: ', err));
      },
    },
    uaainfo: {
      type: UaainfoType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        const sql = `SELECT * FROM "Uaainfo" WHERE id = '${args.id}';`;
        return pool
          .query(sql)
          .then((res) => res.rows[0])
          .catch((err) => console.log('Error: ', err));
      },
    },
    everyConfig: {
      type: new GraphQLList(ConfigType),
      resolve() {
        const sql = `SELECT * FROM "Config";`;
        return pool
          .query(sql)
          .then((res) => res.rows)
          .catch((err) => console.log('Error: ', err));
      },
    },
    config: {
      type: ConfigType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        const sql = `SELECT * FROM "Config" WHERE id = '${args.id}';`;
        return pool
          .query(sql)
          .then((res) => res.rows[0])
          .catch((err) => console.log('Error: ', err));
      },
    },
  },
});

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addApps: {
      type: AppsType,
      args: {
        id: { type: GraphQLID },
        uri: { type: GraphQLString },
        host: { type: GraphQLString },
        path: { type: GraphQLString },
        template: { type: GraphQLString },
        order: { type: GraphQLInt },
        icon: { type: GraphQLString },
        navService: { type: GraphQLString },
        location: { type: GraphQLString },
        capabilities: { type: GraphQLString },
        default: { type: GraphQLBoolean },
        label: { type: new GraphQLNonNull(GraphQLString) },
        items: { type: GraphQLString },
        predixZoneId: { type: GraphQLString },
        createdAt: { type: GraphQLString },
        updatedAt: { type: GraphQLString },
      },
      resolve(parent, args) {
        const columns = Object.keys(args).map((el) => `"${el}"`);
        const values = Object.values(args).map((el) => `'${el}'`);
        const sql = `INSERT INTO "Apps" (${columns}) VALUES (${values}) RETURNING *`;
        return pool.connect().then((client) => {
          return client
            .query(sql)
            .then((res) => {
              client.release();
              return res.rows[0];
            })
            .catch((err) => {
              client.release();
              console.log('Error: ', err);
            });
        });
      },
    },
    updateApps: {
      type: AppsType,
      args: {
        id: { type: GraphQLID },
        uri: { type: GraphQLString },
        host: { type: GraphQLString },
        path: { type: GraphQLString },
        template: { type: GraphQLString },
        order: { type: GraphQLInt },
        icon: { type: GraphQLString },
        navService: { type: GraphQLString },
        location: { type: GraphQLString },
        capabilities: { type: GraphQLString },
        default: { type: GraphQLBoolean },
        label: { type: new GraphQLNonNull(GraphQLString) },
        items: { type: GraphQLString },
        predixZoneId: { type: GraphQLString },
        createdAt: { type: GraphQLString },
        updatedAt: { type: GraphQLString },
      },
      resolve(parent, args) {
        let updateValues = '';
        for (const prop in args) {
          if (updateValues.length > 0) updateValues += `, `;
          updateValues += `"${prop}" = '${args[prop]}' `;
        }
        const sql = `UPDATE "Apps" SET ${updateValues} WHERE id = '${args.id}' RETURNING *;`;
        return pool.connect().then((client) => {
          return client
            .query(sql)
            .then((res) => {
              client.release();
              return res.rows[0];
            })
            .catch((err) => {
              client.release();
              console.log('Error: ', err);
            });
        });
      },
    },
    deleteApps: {
      type: AppsType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        const sql = `DELETE FROM "Apps" WHERE id = '${args.id}' RETURNING *;`;
        return pool.connect().then((client) => {
          return client
            .query(sql)
            .then((res) => {
              client.release();
              return res.rows[0];
            })
            .catch((err) => {
              client.release();
              console.log('Error: ', err);
            });
        });
      },
    },
    addThemes: {
      type: ThemesType,
      args: {
        id: { type: GraphQLID },
        uri: { type: GraphQLString },
        baseUri: { type: GraphQLString },
        main: { type: GraphQLString },
        error: { type: GraphQLString },
        errorChromeless: { type: GraphQLString },
        displayName: { type: GraphQLString },
        description: { type: GraphQLString },
        default: { type: GraphQLString },
        predixZoneId: { type: GraphQLString },
        updatedAt: { type: GraphQLString },
        createdAt: { type: GraphQLString },
      },
      resolve(parent, args) {
        const columns = Object.keys(args).map((el) => `"${el}"`);
        const values = Object.values(args).map((el) => `'${el}'`);
        const sql = `INSERT INTO "Themes" (${columns}) VALUES (${values}) RETURNING *`;
        return pool.connect().then((client) => {
          return client
            .query(sql)
            .then((res) => {
              client.release();
              return res.rows[0];
            })
            .catch((err) => {
              client.release();
              console.log('Error: ', err);
            });
        });
      },
    },
    updateThemes: {
      type: ThemesType,
      args: {
        id: { type: GraphQLID },
        uri: { type: GraphQLString },
        baseUri: { type: GraphQLString },
        main: { type: GraphQLString },
        error: { type: GraphQLString },
        errorChromeless: { type: GraphQLString },
        displayName: { type: GraphQLString },
        description: { type: GraphQLString },
        default: { type: GraphQLString },
        predixZoneId: { type: GraphQLString },
        updatedAt: { type: GraphQLString },
        createdAt: { type: GraphQLString },
      },
      resolve(parent, args) {
        let updateValues = '';
        for (const prop in args) {
          if (updateValues.length > 0) updateValues += `, `;
          updateValues += `"${prop}" = '${args[prop]}' `;
        }
        const sql = `UPDATE "Themes" SET ${updateValues} WHERE id = '${args.id}' RETURNING *;`;
        return pool.connect().then((client) => {
          return client
            .query(sql)
            .then((res) => {
              client.release();
              return res.rows[0];
            })
            .catch((err) => {
              client.release();
              console.log('Error: ', err);
            });
        });
      },
    },
    deleteThemes: {
      type: ThemesType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        const sql = `DELETE FROM "Themes" WHERE id = '${args.id}' RETURNING *;`;
        return pool.connect().then((client) => {
          return client
            .query(sql)
            .then((res) => {
              client.release();
              return res.rows[0];
            })
            .catch((err) => {
              client.release();
              console.log('Error: ', err);
            });
        });
      },
    },
    addTenants: {
      type: TenantsType,
      args: {
        id: { type: GraphQLID },
        host: { type: GraphQLString },
        route: { type: GraphQLString },
        predixZoneId: { type: GraphQLString },
        metadata: { type: GraphQLString },
        createdAt: { type: GraphQLString },
        updatedAt: { type: GraphQLString },
        context: { type: GraphQLString },
        shared: { type: GraphQLBoolean },
        appConfigurationUri: { type: GraphQLString },
      },
      resolve(parent, args) {
        const columns = Object.keys(args).map((el) => `"${el}"`);
        const values = Object.values(args).map((el) => `'${el}'`);
        const sql = `INSERT INTO "Tenants" (${columns}) VALUES (${values}) RETURNING *`;
        return pool.connect().then((client) => {
          return client
            .query(sql)
            .then((res) => {
              client.release();
              return res.rows[0];
            })
            .catch((err) => {
              client.release();
              console.log('Error: ', err);
            });
        });
      },
    },
    updateTenants: {
      type: TenantsType,
      args: {
        id: { type: GraphQLID },
        host: { type: GraphQLString },
        route: { type: GraphQLString },
        predixZoneId: { type: GraphQLString },
        metadata: { type: GraphQLString },
        createdAt: { type: GraphQLString },
        updatedAt: { type: GraphQLString },
        context: { type: GraphQLString },
        shared: { type: GraphQLBoolean },
        appConfigurationUri: { type: GraphQLString },
      },
      resolve(parent, args) {
        let updateValues = '';
        for (const prop in args) {
          if (updateValues.length > 0) updateValues += `, `;
          updateValues += `"${prop}" = '${args[prop]}' `;
        }
        const sql = `UPDATE "Tenants" SET ${updateValues} WHERE id = '${args.id}' RETURNING *;`;
        return pool.connect().then((client) => {
          return client
            .query(sql)
            .then((res) => {
              client.release();
              return res.rows[0];
            })
            .catch((err) => {
              client.release();
              console.log('Error: ', err);
            });
        });
      },
    },
    deleteTenants: {
      type: TenantsType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        const sql = `DELETE FROM "Tenants" WHERE id = '${args.id}' RETURNING *;`;
        return pool.connect().then((client) => {
          return client
            .query(sql)
            .then((res) => {
              client.release();
              return res.rows[0];
            })
            .catch((err) => {
              client.release();
              console.log('Error: ', err);
            });
        });
      },
    },
    addGlobalconfig: {
      type: GlobalconfigType,
      args: {
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        logo: { type: GraphQLString },
        logoUri: { type: GraphQLString },
        theme: { type: GraphQLString },
        applicationChrome: { type: GraphQLString },
        globalScripts: { type: GraphQLString },
        globalCss: { type: GraphQLString },
        predixZoneId: { type: GraphQLString },
        createdAt: { type: GraphQLString },
        updatedAt: { type: GraphQLString },
      },
      resolve(parent, args) {
        const columns = Object.keys(args).map((el) => `"${el}"`);
        const values = Object.values(args).map((el) => `'${el}'`);
        const sql = `INSERT INTO "Globalconfig" (${columns}) VALUES (${values}) RETURNING *`;
        return pool.connect().then((client) => {
          return client
            .query(sql)
            .then((res) => {
              client.release();
              return res.rows[0];
            })
            .catch((err) => {
              client.release();
              console.log('Error: ', err);
            });
        });
      },
    },
    updateGlobalconfig: {
      type: GlobalconfigType,
      args: {
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        logo: { type: GraphQLString },
        logoUri: { type: GraphQLString },
        theme: { type: GraphQLString },
        applicationChrome: { type: GraphQLString },
        globalScripts: { type: GraphQLString },
        globalCss: { type: GraphQLString },
        predixZoneId: { type: GraphQLString },
        createdAt: { type: GraphQLString },
        updatedAt: { type: GraphQLString },
      },
      resolve(parent, args) {
        let updateValues = '';
        for (const prop in args) {
          if (updateValues.length > 0) updateValues += `, `;
          updateValues += `"${prop}" = '${args[prop]}' `;
        }
        const sql = `UPDATE "Globalconfig" SET ${updateValues} WHERE id = '${args.id}' RETURNING *;`;
        return pool.connect().then((client) => {
          return client
            .query(sql)
            .then((res) => {
              client.release();
              return res.rows[0];
            })
            .catch((err) => {
              client.release();
              console.log('Error: ', err);
            });
        });
      },
    },
    deleteGlobalconfig: {
      type: GlobalconfigType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        const sql = `DELETE FROM "Globalconfig" WHERE id = '${args.id}' RETURNING *;`;
        return pool.connect().then((client) => {
          return client
            .query(sql)
            .then((res) => {
              client.release();
              return res.rows[0];
            })
            .catch((err) => {
              client.release();
              console.log('Error: ', err);
            });
        });
      },
    },
    addPreferences: {
      type: PreferencesType,
      args: {
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        metadata: { type: GraphQLString },
        level: { type: GraphQLString },
        predixZoneId: { type: GraphQLString },
        createdAt: { type: GraphQLString },
        updatedAt: { type: GraphQLString },
      },
      resolve(parent, args) {
        const columns = Object.keys(args).map((el) => `"${el}"`);
        const values = Object.values(args).map((el) => `'${el}'`);
        const sql = `INSERT INTO "Preferences" (${columns}) VALUES (${values}) RETURNING *`;
        return pool.connect().then((client) => {
          return client
            .query(sql)
            .then((res) => {
              client.release();
              return res.rows[0];
            })
            .catch((err) => {
              client.release();
              console.log('Error: ', err);
            });
        });
      },
    },
    updatePreferences: {
      type: PreferencesType,
      args: {
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        metadata: { type: GraphQLString },
        level: { type: GraphQLString },
        predixZoneId: { type: GraphQLString },
        createdAt: { type: GraphQLString },
        updatedAt: { type: GraphQLString },
      },
      resolve(parent, args) {
        let updateValues = '';
        for (const prop in args) {
          if (updateValues.length > 0) updateValues += `, `;
          updateValues += `"${prop}" = '${args[prop]}' `;
        }
        const sql = `UPDATE "Preferences" SET ${updateValues} WHERE id = '${args.id}' RETURNING *;`;
        return pool.connect().then((client) => {
          return client
            .query(sql)
            .then((res) => {
              client.release();
              return res.rows[0];
            })
            .catch((err) => {
              client.release();
              console.log('Error: ', err);
            });
        });
      },
    },
    deletePreferences: {
      type: PreferencesType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        const sql = `DELETE FROM "Preferences" WHERE id = '${args.id}' RETURNING *;`;
        return pool.connect().then((client) => {
          return client
            .query(sql)
            .then((res) => {
              client.release();
              return res.rows[0];
            })
            .catch((err) => {
              client.release();
              console.log('Error: ', err);
            });
        });
      },
    },
    addUaainfo: {
      type: UaainfoType,
      args: {
        id: { type: GraphQLID },
        uaaUri: { type: GraphQLString },
        clientId: { type: GraphQLString },
        clientSecret: { type: GraphQLString },
        predixZoneId: { type: GraphQLString },
      },
      resolve(parent, args) {
        const columns = Object.keys(args).map((el) => `"${el}"`);
        const values = Object.values(args).map((el) => `'${el}'`);
        const sql = `INSERT INTO "Uaainfo" (${columns}) VALUES (${values}) RETURNING *`;
        return pool.connect().then((client) => {
          return client
            .query(sql)
            .then((res) => {
              client.release();
              return res.rows[0];
            })
            .catch((err) => {
              client.release();
              console.log('Error: ', err);
            });
        });
      },
    },
    updateUaainfo: {
      type: UaainfoType,
      args: {
        id: { type: GraphQLID },
        uaaUri: { type: GraphQLString },
        clientId: { type: GraphQLString },
        clientSecret: { type: GraphQLString },
        predixZoneId: { type: GraphQLString },
      },
      resolve(parent, args) {
        let updateValues = '';
        for (const prop in args) {
          if (updateValues.length > 0) updateValues += `, `;
          updateValues += `"${prop}" = '${args[prop]}' `;
        }
        const sql = `UPDATE "Uaainfo" SET ${updateValues} WHERE id = '${args.id}' RETURNING *;`;
        return pool.connect().then((client) => {
          return client
            .query(sql)
            .then((res) => {
              client.release();
              return res.rows[0];
            })
            .catch((err) => {
              client.release();
              console.log('Error: ', err);
            });
        });
      },
    },
    deleteUaainfo: {
      type: UaainfoType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        const sql = `DELETE FROM "Uaainfo" WHERE id = '${args.id}' RETURNING *;`;
        return pool.connect().then((client) => {
          return client
            .query(sql)
            .then((res) => {
              client.release();
              return res.rows[0];
            })
            .catch((err) => {
              client.release();
              console.log('Error: ', err);
            });
        });
      },
    },
    addConfig: {
      type: ConfigType,
      args: {
        id: { type: GraphQLID },
        predixZoneId: { type: GraphQLString },
        name: { type: GraphQLString },
        apps: { type: GraphQLString },
        theme: { type: GraphQLString },
        preferences: { type: GraphQLString },
        profile: { type: GraphQLString },
        settings: { type: GraphQLString },
        main: { type: GraphQLString },
        globalCSS: { type: GraphQLString },
        globalScripts: { type: GraphQLString },
        globalConfig: { type: GraphQLString },
        contextPath: { type: GraphQLString },
        themes: { type: GraphQLString },
      },
      resolve(parent, args) {
        const columns = Object.keys(args).map((el) => `"${el}"`);
        const values = Object.values(args).map((el) => `'${el}'`);
        const sql = `INSERT INTO "Config" (${columns}) VALUES (${values}) RETURNING *`;
        return pool.connect().then((client) => {
          return client
            .query(sql)
            .then((res) => {
              client.release();
              return res.rows[0];
            })
            .catch((err) => {
              client.release();
              console.log('Error: ', err);
            });
        });
      },
    },
    updateConfig: {
      type: ConfigType,
      args: {
        id: { type: GraphQLID },
        predixZoneId: { type: GraphQLString },
        name: { type: GraphQLString },
        apps: { type: GraphQLString },
        theme: { type: GraphQLString },
        preferences: { type: GraphQLString },
        profile: { type: GraphQLString },
        settings: { type: GraphQLString },
        main: { type: GraphQLString },
        globalCSS: { type: GraphQLString },
        globalScripts: { type: GraphQLString },
        globalConfig: { type: GraphQLString },
        contextPath: { type: GraphQLString },
        themes: { type: GraphQLString },
      },
      resolve(parent, args) {
        let updateValues = '';
        for (const prop in args) {
          if (updateValues.length > 0) updateValues += `, `;
          updateValues += `"${prop}" = '${args[prop]}' `;
        }
        const sql = `UPDATE "Config" SET ${updateValues} WHERE id = '${args.id}' RETURNING *;`;
        return pool.connect().then((client) => {
          return client
            .query(sql)
            .then((res) => {
              client.release();
              return res.rows[0];
            })
            .catch((err) => {
              client.release();
              console.log('Error: ', err);
            });
        });
      },
    },
    deleteConfig: {
      type: ConfigType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        const sql = `DELETE FROM "Config" WHERE id = '${args.id}' RETURNING *;`;
        return pool.connect().then((client) => {
          return client
            .query(sql)
            .then((res) => {
              client.release();
              return res.rows[0];
            })
            .catch((err) => {
              client.release();
              console.log('Error: ', err);
            });
        });
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});
