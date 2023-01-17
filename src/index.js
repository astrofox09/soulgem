import React from "react";
import ReactDOM from "react-dom";
import {
  AdaptivityProvider,
  ConfigProvider,
  AppRoot,
  SplitLayout,
  SplitCol,
  View,
  Panel,
  PanelHeader,
  Header,
  Group,
  SimpleCell,
} from "@vkontakte/vkui";
import "@vkontakte/vkui/dist/vkui.css";
import "./index.css"

const App = () => {
  return (
    <AppRoot>
      <SplitLayout header={<PanelHeader separator={false} />}>
        <SplitCol autoSpaced>
          <View activePanel="main">
            <Panel id="main">

            </Panel>
          </View>
        </SplitCol>
      </SplitLayout>
    </AppRoot>
  );
};

ReactDOM.render(
  <ConfigProvider appearance="dark" platform="android">
    <AdaptivityProvider>
      <App />
    </AdaptivityProvider>
  </ConfigProvider>,
  document.getElementById("root")
);