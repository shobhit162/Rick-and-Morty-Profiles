/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';

interface ShimmerUIProps {
  cards: number;
}

const gridStyle = css`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 16px;
`;

const cardStyle = css`
  border: 1px solid #ddd;
  border-radius: 12px;
  padding: 16px;
  text-align: center;
  background: linear-gradient(-45deg, #eee 40%, #fafafa 50%, #eee 60%);
  height: 300px;
  background-size: 300%;
  background-position-x: 100%;
  animation: shimmer 0.5s infinite linear;
  @keyframes shimmer {
   to {
      background-position-x: 0%
   }
}
`;

const cardStyleForProfile = css`
  border: 1px solid #ddd;
  width: 300px;
  border-radius: 12px;
  padding: 16px;
  text-align: center;
  background: linear-gradient(-45deg, #eee 40%, #fafafa 50%, #eee 60%);
  height: 500px;
  background-size: 300%;
  background-position-x: 100%;
  animation: shimmer 0.5s infinite linear;
  @keyframes shimmer {
   to {
      background-position-x: 0%
   }
}
`;

const gridStyleForProfile = css`
  display: flex;
  justify-content: center;
`;

const Shimmer: React.FC<ShimmerUIProps>= ({cards}) => {
  return (
    <div data-testid="shimmer">
      {cards === 20 && <div css={gridStyle}>
        {Array(cards)  // for 20 cards we are using different css than 1 card
          .fill("")
          .map((e, index) => (
            <div key={index} css={cardStyle}></div>
          ))}
      </div>}
      {cards === 1 && <div css={gridStyleForProfile}>
        {Array(cards)
          .fill("")
          .map((e, index) => (
            <div key={index} css={cardStyleForProfile}></div>
          ))}
      </div>
      }
    </div>
  );
};
export default Shimmer;