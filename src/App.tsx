import React from 'react';
import { InputForm } from './components/InputForm';
import './style';
import { Layout } from 'antd';
import { IssuesList } from './components/IssuesList';


function App() {
  return (
    <Layout>
      <InputForm />

      <IssuesList />
    </Layout>
  );
}

export default App;
