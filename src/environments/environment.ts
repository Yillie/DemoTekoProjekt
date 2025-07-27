// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  msalConfig: {
    auth: {
      clientId: '99230a9c-792b-48ef-97b3-37e9512d7a5f',
      authority: 'https://login.microsoftonline.com/be941029-9e58-4043-98d4-7c023fea3a9a/v2.0',
    },
  },
  apiConfig: {
    scopes: ['https://graph.microsoft.com/.default'],
    uri: 'https://graph.microsoft.com/v1.0/me',
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
