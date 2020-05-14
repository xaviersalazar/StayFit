import React from "react";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import rootReducer from "./redux/reducers";
import * as eva from "@eva-design/eva";
import {
  ApplicationProvider,
  IconRegistry,
  Layout,
} from "@ui-kitten/components";
import { default as theme } from "./custom-theme.json";
import { FeatherIconsPack } from "./feather-icons";
import { NavigationView } from "./components/navigation/NavigationView";
import styled from "styled-components";

const store = createStore(rootReducer, applyMiddleware(thunk));

const Container = styled(Layout)`
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  background: #fff;
  height: 100%;
  width: 100%;
`;

export default () => (
  <Provider store={store}>
    <IconRegistry icons={FeatherIconsPack} />
    <ApplicationProvider {...eva} theme={{ ...eva.light, ...theme }}>
      <Container>
        <NavigationView />
      </Container>
    </ApplicationProvider>
  </Provider>
);
