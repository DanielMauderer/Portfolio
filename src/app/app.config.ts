import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideHighlightOptions } from 'ngx-highlightjs';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    importProvidersFrom([BrowserAnimationsModule]),
    provideHighlightOptions({
      lineNumbersLoader: () => import('ngx-highlightjs/line-numbers'),
      coreLibraryLoader: () => import('highlight.js/lib/core'),
      languages: {
        protobuf: () => import('highlight.js/lib/languages/protobuf'),
        rust: () => import('highlight.js/lib/languages/rust'),
        c: () => import('highlight.js/lib/languages/c'),
        json: () => import('highlight.js/lib/languages/json'),
        xml: () => import('highlight.js/lib/languages/xml')
      },
      themePath: 'assets/styles/stackoverflow-dark.css'
    })
  ]
};
