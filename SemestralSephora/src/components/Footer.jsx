import {Facebook,Instagram,MailOutline,Phone,Pinterest,Room,Twitter} from "@material-ui/icons";
import styled from "styled-components";

  
  const Container = styled.div`
    display: flex;
    background-color:  black;
    color: white;
  `;
  
  const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
  `;
  
  const Logo = styled.h1`
    font-weight: bold;
    letter-spacing: 3px;
    cursor: pointer;
  `;
  
  const Desc = styled.p`
    margin: 20px 0px;
    text-align: justify;
  `;
  
  const SocialContainer = styled.div`
    display: flex;
  `;
  
  const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${(props) => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
  `;
  
  const Center = styled.div`
    flex: 1;
    padding: 20px;
  `;
  
  const Title = styled.h3`
    margin-bottom: 30px;
  `;
  
  const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
  `;
  
  const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
  `;
  
  const Right = styled.div`
    flex: 1;
    padding: 20px;
  
  `;
  
  const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
  `;
  
  const Payment = styled.img`
      width: 50%;
  `;



  const Footer = () => {
    return (
      <Container>
        <Left>
          <Logo>SEPHORA</Logo>
          <Desc>
          A leader in prestige omni-retail, 
          our mission at Sephora is to create a welcoming beauty shopping 
          experience for all and inspire fearlessness in our community.
          <br/>
          <br/>
          We operate over 2,700 stores in 35 countries worldwide, with an 
          expanding base of over 500 stores across the Americas, and a world-class 
          ecommerce site. Since opening our first US store in New York’s SoHo 
          neighborhood in 1998, Sephora has been an industry-leading champion of diversity, 
          inclusivity, and empowerment in the US, guided by our longstanding company values.
          </Desc>
          <SocialContainer>
            <SocialIcon color="3B5999">
              <Facebook />
            </SocialIcon>
            <SocialIcon color="E4405F">
              <Instagram />
            </SocialIcon>
            <SocialIcon color="55ACEE">
              <Twitter />
            </SocialIcon>
            <SocialIcon color="E60023">
              <Pinterest />
            </SocialIcon>
          </SocialContainer>
        </Left>
        <Center>
          <Title>Useful Links</Title>
          <List>
            <ListItem>Home</ListItem>
            <ListItem>Cart</ListItem>
            <ListItem>Products</ListItem>
            <ListItem>Make-up</ListItem>
            <ListItem>Skincare</ListItem>
            <ListItem>Tools</ListItem>
            <ListItem>My Account</ListItem>
            <ListItem>Wishlist</ListItem>
            <ListItem>Terms</ListItem>
          </List>
        </Center>
        <Right>
          <Title>Contact</Title>
          <ContactItem>
            <Room style={{marginRight:"10px"}}/> 622 Dixie Path , South Tobinchester 98336
          </ContactItem>
          <ContactItem>
            <Phone style={{marginRight:"10px"}}/> +1-877-737-4672
          </ContactItem>
          <ContactItem>
            <MailOutline style={{marginRight:"10px"}} /> cssuport@sephora.com
          </ContactItem>
          <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
        </Right>
      </Container>
    );
  };
  
  export default Footer;