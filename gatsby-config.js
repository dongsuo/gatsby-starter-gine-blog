module.exports = {
    plugins: [
        {
            resolve: `gatsby-theme-gine-blog`,
            options: {
                configTable: "https://www.notion.so/dongsuo/95fafe9116e147128a9563323b5a9183?v=413e7969a4ba4faa885bf6978bca865a"
            }
        },
        {
            resolve: `gatsby-source-notion-database`,
            options: {
                configTable: "https://www.notion.so/dongsuo/78ea364f81fd45b58efd7c6df9aa5a1a?v=185004f774ff43e4ba4e4ebd0f36fa8c"

            }
        },
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                trackingId: `UA-110850031-2`,
                head: true,
            },
        },
    ],
}
