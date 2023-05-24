import React from "react";
import styled from "styled-components";

const StyledCard = styled.div`
  position: relative;
  /* width: 400px; */
`;

const CardImage = styled.div`
  height: 400px;
  width: 100%;
  border-radius: 8px;
`;

const CardImg = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  border-radius: inherit;
  object-fit: cover;
`;

const CardContent = styled.div`
  position: absolute;
  left: 50%;
  transform: translate(-50%, 50%);
  width: calc(100% - 36px);
  background-color: white;
  z-index: 10;
  border-radius: 20px;
  padding: 20px;
  bottom: 0;
`;

const CardContentTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`;

const CardUser = styled.div`
  display: flex;
  align-items: center;
  column-gap: 12px;
`;

const UserAvatar = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 100rem;
  object-fit: cover;
  flex-shrink: 0;
`;

const UserName = styled.span`
  font-weight: 300;
  font-size: 16px;
  color: #333;
`;

const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CardTitle = styled.h3`
  color: #000;
  font-size: 18px;
  font-weight: 500;
  line-height: 27px;
`;

const CardAmount = styled.span`
  color: #000;
  font-size: 18px;
  font-weight: bold;
  line-height: 27px;
  background: linear-gradient(
    86.88deg,
    #7d6aff 1.38%,
    #ffb86c 64.35%,
    #fc2872 119.91%
  );
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
`;

const Card = () => {
  return (
    <StyledCard>
      <CardImage>
        <CardImg
          src="https://cdn.dribbble.com/users/1787323/screenshots/9911216/media/f7dbfdee24cce60e6e8b97e58f55a618.png?compress=1&resize=1000x750&vertical=top"
          alt=""
        />
      </CardImage>
      <CardContent>
        <CardContentTop>
          <CardUser>
            <UserAvatar
              src="https://cdn.dribbble.com/users/1044993/screenshots/5299982/media/8bb2edf9ebe9f6ec5e7a492a7c0a37c3.png?compress=1&resize=800x600&vertical=top"
              alt=""
            />
            <UserName>@zndrson</UserName>
          </CardUser>
          <div>256</div>
        </CardContentTop>
        <CardFooter>
          <CardTitle>Cosmic Perspective</CardTitle>
          <CardAmount>12,000 PSL</CardAmount>
        </CardFooter>
      </CardContent>
    </StyledCard>
  );
};

export default Card;
