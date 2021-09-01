export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '612ffe6b4280bb186c5d49ec',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-qmh12mjv',
                  apiId: '6b1a78ce-0843-4af1-80dd-2a42d1fd2ae8'
                },
                {
                  buildHookId: '612ffe6b1c71b713c6331cdb',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-hfd2b55e',
                  apiId: '62333ddb-d43c-4c79-975d-8af35170ee08'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/antecamarastudio/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-hfd2b55e.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
