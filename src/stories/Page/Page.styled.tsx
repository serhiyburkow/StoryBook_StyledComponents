import styled from 'styled-components';

export const Section = styled.section`
  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 14px;
  line-height: 24px;
  padding: 48px 20px;
  margin: 0 auto;
  max-width: 600px;
  color: #333;

  p {
    margin: 1em 0;
  }

  a {
    text-decoration: none;
    color: #1ea7fd;
  }
`;

export const Ul = styled.ul`
  padding-left: 30px;
  margin: 1em 0;

  li {
    margin-bottom: 8px;
  }
`;

export const Title = styled.h2`
  font-weight: 900;
  font-size: 32px;
  line-height: 1;
  margin: 0 0 4px;
  display: inline-block;
  vertical-align: top;
`;

export const Tip = styled.span`
  display: inline-block;
  border-radius: 1em;
  font-size: 11px;
  line-height: 12px;
  font-weight: 700;
  background: #e7fdd8;
  color: #66bf3c;
  padding: 4px 12px;
  margin-right: 10px;
  vertical-align: top;
`;

export const TipContainer = styled.div`
  font-size: 13px;
  line-height: 20px;
  margin-top: 40px;
  margin-bottom: 40px;
`;

export const TipImg = styled.svg`
  display: inline-block;
  height: 12px;
  width: 12px;
  margin-right: 4px;
  vertical-align: top;
  margin-top: 3px;

  path {
    fill: #66bf3c;
  }
`;
