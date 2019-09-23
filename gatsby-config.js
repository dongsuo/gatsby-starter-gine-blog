module.exports = {
    plugins: [
        {
            resolve: `gatsby-theme-gine-blog`,
            options: {
                configTable: "https://www.notion.so/dongsuo/050017af19124d999d5828e388f08979?v=4afbd65fb6974d89a63f081b7ddccb26"
            }
        },
        {
            resolve: `gatsby-source-notion-database`,
            options: {
                configTable: "https://www.notion.so/dongsuo/02dfc61cc3ed4985b0530b10c5549619?v=8b4101da602546f9b145302366f1ea4b"
            }
        }
    ],
}
