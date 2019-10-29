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
                configTable: "https://www.notion.so/dongsuo/69d831c3ad6c4721b73f0c87d51660d3?v=2b4e82ad6e714ab5b2d7e19163b7a9e1"

            }
        }
    ],
}
