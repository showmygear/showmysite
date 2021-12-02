module.exports = {
  siteMetadata: {
    title: `曬裝備 - 登山裝備檢查表`,
    description:
      `曬裝備是一個方便分享給其他人的登山裝備檢查表`,
    url: `https://www.showmygear.com`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `曬裝備 - 登山裝備檢查表`,
        short_name: `曬裝備`,
        description: `The application does cool things and makes your life better.`,
        lang: `zh-tw`,
        display: `standalone`,
        icon: `src/images/icon.png`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#fff`,
      }
    },
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
