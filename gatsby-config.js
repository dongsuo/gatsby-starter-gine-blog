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
                configTable: "https://www.notion.so/dongsuo/d6494f96d1cb4c7d97a0f765e4866873?v=41068923cf5a409ba21bd273cb28cdd5"

            }
        }
    ],
}
