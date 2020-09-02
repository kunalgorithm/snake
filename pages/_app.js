import React from "react";
import App, { Container } from "next/app";
import Head from "next/head";

import { Layout, Menu } from "antd";
import Link from "next/link";
import { GithubOutlined } from "@ant-design/icons";

const { Header, Footer, Sider, Content } = Layout;
//@ts-ignore
import "antd/dist/antd.dark.css";
import "../global.scss";
class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Head>
          <title>🐍</title>
          <meta name="description" content="In your browser ☄️" />
        </Head>

        <Layout style={{ height: "100vh", marginTop: "-10px" }}>
          <Content style={{ padding: "3em" }}>
            <Component {...pageProps} />
          </Content>

          <Footer style={{ textAlign: "right" }}>
            <a
              href="https://github.com/kunalgorithm/snake"
              target="_blank"
              style={{ color: "rgba(255, 255, 255, 0.55)" }}
            >
              Source <GithubOutlined />
            </a>
          </Footer>
        </Layout>
      </>
    );
  }
}

export default MyApp;
