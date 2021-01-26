import styled from "styled-components";

export const StepCheckout = styled.div`
  position: fixed;
  background-color: #fff;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
  z-index: 3;
  top: -1px;
  left: 0;
  height: 80px;
  width: 75%;
`;

export const StepLeftSide = styled.div`
  float: left;
  & ul {
    margin: 0;
    padding-left: 40px;
    & li.active {
      color: #fb4226;
      position: relative;
      &::after {
        content: "";
        position: absolute;
        border-bottom: 2px solid #fb4226;
        width: calc(100% - 60px);
        left: 50%;
        transform: translateX(-50%);
      }
    }
    & li {
      display: inline-block;
      list-style-type: none;
      padding: 0 30px;
      line-height: 80px;
      font-size: 14px;
      text-transform: uppercase;
      @media (max-width: 1500px) and (min-width: 1024px) {
        font-size: 12px;
      }
      .stepNumber {
        font-size: 18px;
        margin-right: 5px;
      }
    }
  }
`;

export const StepRightSide = styled.div`
  position: absolute;
  right: 3%;
  top: 50%;
  transform: translateY(-50%);
  & #account {
    position: relative;
    padding-right: 10px;
    cursor: pointer;
    height: 120px;
    display: table-cell;
    vertical-align: middle;
    & .titleDisplay {
      color: #9b9b9b;
      margin: inherit;
      & .btnLogin {
        margin-right: 5px;
        height: auto;
        width: 30px;
        border-radius: 25px;
      }
    }
  }
`;
