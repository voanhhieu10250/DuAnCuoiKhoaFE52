import styled from "styled-components";

export const StepCheckout = styled.div`
  position: fixed;
  background-color: #fff;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
  z-index: 3;
  top: -1px;
  left: 0;
  height: 80px;
  width: ${(props) => (props.fullSize ? "100%" : "75%")};
  @media (min-width: 480px) and (max-width: 768px) {
    height: 60px;
    width: 100%;
  }
`;

export const StepLeftSide = styled.div`
  float: left;
  @media (min-width: 480px) and (max-width: 768px) {
    width: 100%;
    text-align: center;
    height: 60px;
    position: relative;
  }
  .closeBtn {
    display: none;
    @media (min-width: 480px) and (max-width: 768px) {
      display: block;
      position: absolute;
      left: 15px;
      top: 50%;
      transform: translateY(-50%);
    }
  }
  ul {
    margin: 0;
    padding-left: 40px;
    @media (min-width: 480px) and (max-width: 768px) {
      padding: 0;
    }
    & li.active {
      color: #fb4226;
      position: relative;

      @media (min-width: 480px) and (max-width: 768px) {
        display: block;
        color: #000;
        line-height: 60px;
      }
      &::after {
        content: "";
        position: absolute;
        border-bottom: 2px solid #fb4226;
        width: calc(100% - 60px);
        left: 50%;
        transform: translateX(-50%);
        @media (min-width: 480px) and (max-width: 768px) {
          display: none;
        }
      }
    }
    & li {
      display: inline-block;
      list-style-type: none;
      padding: 0 30px;
      line-height: 80px;
      font-size: 14px;
      text-transform: uppercase;
      .stepNumber {
        font-size: 18px;
        margin-right: 5px;
        @media (min-width: 480px) and (max-width: 768px) {
          font-size: 14px;
        }
      }
      @media (min-width: 1024px) and (max-width: 1500px) {
        font-size: 12px;
      }
      @media (min-width: 480px) and (max-width: 768px) {
        display: none;
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
      span {
        @media (min-width: 480px) and (max-width: 768px) {
          display: none;
        }
      }
      & .btnLogin {
        margin-right: 5px;
        height: auto;
        width: 30px;
        border-radius: 25px;
      }
    }
  }
`;
