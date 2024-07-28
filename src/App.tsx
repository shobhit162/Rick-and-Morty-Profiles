/** @jsxImportSource @emotion/react */
import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { css } from '@emotion/react';

const headerStyle = css`
  background-color: #282c34;
  padding: 16px;
  color: white;
  text-align: center;
  border-radius: 8px;
`;

const linkStyle = css`
  color: white;
  margin: 0 8px;
  text-decoration: none;
`;

const mainStyle = css`
  padding: 16px;
`;

const App: React.FC = () => {
  return (
    <div>
      <header css={headerStyle}>
        <h1>Rick and Morty Profiles</h1>
        <nav>
          <Link to="/" css={linkStyle}>Home</Link>
        </nav>
      </header>
      <main css={mainStyle}>
        <Outlet />
      </main>
    </div>
  );
};

export default App;
