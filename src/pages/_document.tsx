import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheets } from '@material-ui/core/styles';
import theme from '../lib/themes/dark';
import { Configuration } from '../lib/Config';
import PropTypes from 'prop-types';

export default function MyDocument() {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  return (
    <Html lang='en'>
      <Head>
        <meta name='theme-color' content={theme.palette.primary.main} />
        <meta name='title' content={this.props.config.meta.title} />
        <meta name='description' content={this.props.config.meta.description} />
        <meta property='og:title' content={this.props.config.meta.title} />
        <meta
          property='og:thumbnail'
          content={this.props.config.meta.thumbnail}
        />
        <link
          rel='stylesheet'
          href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap'
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

MyDocument.propTypes = {
  config: PropTypes.any,
};

MyDocument.getInitialProps = async ctx => {
  const sheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: App => props => sheets.collect(<App {...props} />),
    });

  const initialProps = await Document.getInitialProps(ctx);
  return {
    ...initialProps,
    config: Configuration.readConfig(),
    styles: [
      ...React.Children.toArray(initialProps.styles),
      sheets.getStyleElement(),
    ],
  };
};
