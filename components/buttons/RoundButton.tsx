import styled from "styled-components";

interface IButtonProps {
  text: string;
  link: string;
}

const RoundButton = (props: IButtonProps) => {
  const { text, link } = props;

  return (
    <RoundBtnWrapper>
      <a href={link} className="cta link">
        <span>{text}</span>
        <svg width="13px" height="10px" viewBox="0 0 13 10">
          <path d="M1,5 L11,5"></path>
          <polyline points="8 1 12 5 8 9"></polyline>
        </svg>
      </a>
    </RoundBtnWrapper>
  );
};

export default RoundButton;

const RoundBtnWrapper = styled.button`
  background-color: transparent;
  outline: none;
  border: none;
  .cta {
    position: relative;
    margin: auto;
    padding: 21px 22px;
    transition: all 0.2s ease;
    &:before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      display: block;
      border-radius: 28px;
      background: ${(props) => `rgba(${props.theme.colorPrimaryRgb}, 0.9)`};
      width: 56px;
      height: 56px;
      transition: all 0.3s ease;
    }
    span {
      position: relative;
      font-size: 15px;
      font-weight: 600;
      line-height: 18px;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      vertical-align: middle;
      transition: all 0.3s ease;
      color: ${(props) => props.theme.colorText};
    }

    svg {
      position: relative;
      top: 0;
      margin-left: 10px;
      fill: none;
      stroke-linecap: round;
      stroke-linejoin: round;
      stroke: ${(props) => props.theme.colorPrimary};
      stroke-width: 2;
      transform: translateX(-5px);
      transition: all 0.3s ease;
    }

    &:hover {
      &:before {
        width: 100%;
        background: ${(props) => `rgba(${props.theme.colorPrimaryRgb}, 1)`};
      }
      span {
        color: ${(props) => props.theme.colorWhite};
      }
      svg {
        transform: translateX(0);
        stroke: ${(props) => props.theme.colorWhite};
      }
    }
    &:active {
      transform: scale(0.96);
    }
  }
`;

// inspired by https://dribbble.com/shots/4397812-Click-Me
