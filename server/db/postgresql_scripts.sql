CREATE TABLE "Apps" (
  "id"  serial  UNIQUE,
  "uri"  varchar,
  "host"  varchar,
  "path"  varchar,
  "template"  varchar,
  "order"  integer,
  "icon"  varchar,
  "navService"  varchar,
  "location"  varchar,
  "capabilities"  varchar,
  "default"  boolean,
  "label"  varchar  NOT NULL,
  "items"  varchar,
  "predixZoneId"  varchar,
  "createdAt"  varchar,
  "updatedAt"  varchar,
  CONSTRAINT Apps_pk PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE "Themes" (
  "id"  serial  UNIQUE,
  "uri"  varchar,
  "baseUri"  varchar,
  "main"  varchar,
  "error"  varchar,
  "errorChromeless"  varchar,
  "displayName"  varchar,
  "description"  varchar,
  "default"  varchar,
  "predixZoneId"  varchar,
  "updatedAt"  varchar,
  "createdAt"  varchar,
  CONSTRAINT Themes_pk PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE "Tenants" (
  "id"  serial  UNIQUE,
  "host"  varchar,
  "route"  varchar,
  "predixZoneId"  varchar,
  "metadata"  varchar,
  "createdAt"  varchar,
  "updatedAt"  varchar,
  "context"  varchar,
  "shared"  boolean,
  "appConfigurationUri"  varchar,
  CONSTRAINT Tenants_pk PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE "Globalconfig" (
  "id"  serial  UNIQUE,
  "name"  varchar,
  "logo"  varchar,
  "logoUri"  varchar,
  "theme"  varchar,
  "applicationChrome"  varchar,
  "globalScripts"  varchar,
  "globalCss"  varchar,
  "predixZoneId"  varchar,
  "createdAt"  varchar,
  "updatedAt"  varchar,
  CONSTRAINT Globalconfig_pk PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE "Preferences" (
  "id"  serial  UNIQUE,
  "name"  varchar,
  "metadata"  varchar,
  "level"  varchar,
  "predixZoneId"  varchar,
  "createdAt"  varchar,
  "updatedAt"  varchar,
  CONSTRAINT Preferences_pk PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE "Uaainfo" (
  "id"  serial  UNIQUE,
  "uaaUri"  varchar,
  "clientId"  varchar,
  "clientSecret"  varchar,
  "predixZoneId"  varchar,
  CONSTRAINT Uaainfo_pk PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE "Config" (
  "id"  serial  UNIQUE,
  "predixZoneId"  varchar,
  "name"  varchar,
  "apps"  varchar,
  "theme"  varchar,
  "preferences"  varchar,
  "profile"  varchar,
  "settings"  varchar,
  "main"  varchar,
  "globalCSS"  varchar,
  "globalScripts"  varchar,
  "globalConfig"  varchar,
  "contextPath"  varchar,
  "themes"  varchar,
  CONSTRAINT Config_pk PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);


ALTER TABLE "Apps" ADD CONSTRAINT "Apps_fk0" FOREIGN KEY ("predixZoneId") REFERENCES "Tenants"("predixZoneId");

ALTER TABLE "Themes" ADD CONSTRAINT "Themes_fk0" FOREIGN KEY ("predixZoneId") REFERENCES "Tenants"("predixZoneId");

ALTER TABLE "Globalconfig" ADD CONSTRAINT "Globalconfig_fk0" FOREIGN KEY ("predixZoneId") REFERENCES "Tenants"("predixZoneId");

ALTER TABLE "Preferences" ADD CONSTRAINT "Preferences_fk0" FOREIGN KEY ("predixZoneId") REFERENCES "Tenants"("predixZoneId");

ALTER TABLE "Uaainfo" ADD CONSTRAINT "Uaainfo_fk0" FOREIGN KEY ("predixZoneId") REFERENCES "Tenants"("predixZoneId");

ALTER TABLE "Config" ADD CONSTRAINT "Config_fk0" FOREIGN KEY ("predixZoneId") REFERENCES "Tenants"("predixZoneId");

ALTER TABLE "Config" ADD CONSTRAINT "Config_fk1" FOREIGN KEY ("preferences") REFERENCES "Preferences"("id");
