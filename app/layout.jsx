import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Banner, Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'
import { ThemeProvider } from 'next-themes'
import './globals.css'

export const metadata = {
  // Define your metadata here
  // For more information on metadata API, see: https://nextjs.org/docs/app/building-your-application/optimizing/metadata
}
 
const banner = <Banner storageKey="some-key">Cosme 1.1.0 is released 🎉</Banner>
const navbar = (
//   <Navbar
//     logo={<b> | Docs</b>}
//     // ... Your additional navbar options
//   />
  <Navbar
  logo={
    <>
    <img src="/img/icon3.png" className="logo-invert " width="30" height="30"  />
  <div className='Sidebar_divider__COuse'></div>
      <span style={{ marginLeft: '.4em', fontWeight: 500, }} className='logo'>
      Cosme Docs
      </span>
    </>
  }
/>
)
const footer = <Footer className="footer">
  <div>
    {new Date().getFullYear()} © Rootly.cc. Scripts Technologies (P) Ltd 
  </div>
  <div>
Made with ❤️ in Rootly Team
  </div>
  </Footer>
 
export default async function RootLayout({ children }) {
  return (
    <html
      // Not required, but good for SEO
      lang="en"
      // Required to be set
      dir="ltr"
      // Suggested by `next-themes` package https://github.com/pacocoursey/next-themes#with-app
      suppressHydrationWarning
    >
      
        <Head>
  <link rel="icon" type="image/png" href="/favicon.png" />
  <title> Cosme Documentation - Shopify ThemesRootly.cc</title>
</Head>
      <body>
      <ThemeProvider attribute="class"> {/* 👈 обязательно */}
        <Layout
         sidebar={{ defaultMenuCollapseLevel: 1 }}
          banner={banner}
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/shuding/nextra/tree/main/docs"
          footer={footer}
          // ... Your additional layout options
        >
          {children}
        </Layout>
        </ThemeProvider>
      </body>
    </html>
  )
}