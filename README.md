# news-app-nepalaya

# For frontend

1. Switch to frontend directory: `cd frontend`
2. Install node.js if not installed: https://nodejs.org/en/download/
3. Install npm: https://www.npmjs.com/get-npm\
4. Install pnpm: `npm install -g pnpm@latest-10`
5. Install vite: `pnpm create vite .`
6. Follow the promts:
   - Project name: `frontend`
   - Select a framework: `React`
   - Select a variant: `Javascript`
7. Install dependencies: `pnpm install`
8. Run the app: `pnpm run dev`

# Setup Mantine

1. `npm install @mantine/core @mantine/hooks`
2. `npm install --save-dev postcss postcss-preset-mantine postcss-simple-vars`
3. Create postcss.config.cjs file at the root of your application with the following content:

   ```
   module.exports = {
     plugins: {
       'postcss-preset-mantine': {},
       'postcss-simple-vars': {
         variables: {
           'mantine-breakpoint-xs': '36em',
           'mantine-breakpoint-sm': '48em',
           'mantine-breakpoint-md': '62em',
           'mantine-breakpoint-lg': '75em',
           'mantine-breakpoint-xl': '88em',
         },
       },
     },
   };
   ```

4. Remove everything from `src/App.jsx` and add:

   ```
    import '@mantine/core/styles.css';

    import { MantineProvider } from '@mantine/core';

    export default function App() {
      return <MantineProvider>{/* Your app here */}</MantineProvider>;
    }
   ```

5. Run the app: `pnpm run dev`

# For Backend (Setup DRF YASG)

1. `pip install -U drf-yasg`

2. In `settings.py` add:

   ```
   INSTALLED_APPS = [
    ...
    'drf_yasg',
    ...
   ]

   ```

3. In `urls.py` add:

   ```
   from django.urls import re_path
   from rest_framework import permissions
   from drf_yasg.views import get_schema_view
   from drf_yasg import openapi


   ...

   schema_view = get_schema_view(
   openapi.Info(
   title="Snippets API",
   default_version='v1',
   description="Test description",
   terms_of_service="https://www.google.com/policies/terms/",
   contact=openapi.Contact(email="contact@snippets.local"),
   license=openapi.License(name="BSD License"),
   ),
   public=True,
   permission_classes=(permissions.AllowAny,),
   )

   urlpatterns = [
   ....
   path('swagger<format>/', schema_view.without_ui(cache_timeout=0), name='schema-json'),
   path('api/docs/', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
   path('redoc/', schema_view.with_ui('redoc', cache_timeout=0), name='schema-redoc'),
   ...
   ]
   ```

```

```
