import Head from 'next/head'
import React from 'react'

import Script from 'next/script'

const Layout = ({children}) => {
  return (
    <div>
        
        <Script id="ads-init" strategy="afterInteractive" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3476621303569503"
     crossOrigin="anonymous"></Script>

  <ins className="adsbygoogle"
     style={{"display":"block"}}
     data-ad-client="ca-pub-3476621303569503"
     data-ad-slot="3627285369"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins>

    <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
      />
      <Script
        id="gtag-init"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />

        <main>
            {children}
        </main>
    </div>
  )
}

export default Layout