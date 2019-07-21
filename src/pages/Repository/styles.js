import styled from 'styled-components';

export const Loading = styled.div`
  color: white;
  font-size: 30px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Owner = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;

  a {
    color: #7159c1;
    font-size: 16px;
    text-decoration: none;
  }

  img {
    width: 120px;
    border-radius: 50%;
    margin-top: 20px;
  }

  h1 {
    font-size: 24px;
    margin-top: 10px;
  }

  p {
    margin-top: 5px;
    font-size: 14px;
    color: #666;
    line-height: 1.4;
    text-align: center;
    max-height: 400px;
  }
`;

export const IssueList = styled.ul`
  padding-top: 30px;
  margin-top: 30px;
  border-top: 1px solid #eee;
  list-style: none;

  li {
    display: flex;
    padding: 15px 10px;
    border: 1px solid #eee;
    border-radius: 4px;

    & + li {
      margin-top: 10px;
    }

    img {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      border: 2px solid #eee;
    }

    div {
      flex: 1;
      margin-left: 15px;

      strong {
        font-size: 16px;

        a {
          text-decoration: none;
          color: #333;

          &:hover {
            color: #7159c1;
          }
        }

        span {
          background: #eee;
          color: #333;
          border-radius: 2px;
          font-size: 12px;
          font-weight: 600;
          height: 20px;
          padding: 3px 4px;
          margin-left: 10px;
        }
      }

      p {
        margin-top: 5px;
        font-size: 12px;
        color: #999;
      }
    }
  }
`;

export const Pagination = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    background: #7159c1;
    color: white;
    border-radius: 5px;
    padding: 5px;
  }

  span {
    color: #999;
    font-size: 16px;
    margin-left: 10px;
    margin-right: 10px;
  }
`;

export const FilterList = styled.div`
  display: flex;
  margin-top: 20px;
  justify-content: center;

  button {
    background: white;
    border: 1px #7159c1 solid;
    border-radius: 5px;
    margin-right: 10px;
    padding: 5px;
    color: #999;

    &:nth-child(${props => props.active + 1}) {
      background: #7159c1;
      color: white;
    }

    &:hover {
      background: #7159c1;
      color: white;
    }
  }
`;
